const mongoose = require('mongoose')

class Login {
    async login(user, res) {
        const { email, password } = user
        const Ong = mongoose.model('ongs')

        //insert
        try {
            //find
            const find = await Ong.findOne({ email: email, password: password }, { password: 0 }).sort({ title: 1 }).exec();
            let msg
            if (find) {
                msg = 'usuario encontrado'
            }
            // caso concluido irá executar isso
            res.status(202).json({ msg: msg, result: find._id })
        }
        // case error
        catch (error) {
            res.status(404).json({ msg: "usuario nao encontrado,favor verifique seus dados e tente novamente", error })
        }
    }
}
module.exports = new Login