const mongoose = require('mongoose')

class Login {
    async login(user, res) {
        const { email, password } = user
        const Ong = mongoose.model('ongs')

        //insert
        try {
            //find
            const find = await Ong.find({ email: email, password: password }).sort({ title: 1 }).exec();
            let msg
            if (find.length) {
                msg = 'usuario encontrado'
            } else {
                msg = 'usuario nao encontrado,favor verifique seus dados e tente novamente'
            }
            // caso concluido irá executar isso
            res.status(202).json({ msg: msg, result: find })
        }
        // case error
        catch (error) {
            res.status(404).json({ msg: "Erro ao cadastrar o Incident", error })
        }
    }
}
module.exports = new Login