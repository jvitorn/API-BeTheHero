const mongoose = require('mongoose')
const JWT = require('jsonwebtoken')

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

                const payload = { userID: find._id, userName: find.name, userMail: find.email }
                const header = {
                    expiresIn: 300 // expires 
                }
                const authenticate = find.nivel == 'user' ? false : true;
                const SIGNATURE = 'HHTDSI'
                await JWT.sign(payload, SIGNATURE, header, (err, token) => {
                    if (err) {
                        throw new Error('erro');
                    }

                    res.setHeader('x-access-token', token);
                    res.status(202).json({ adm: authenticate, auth: true, token: token });
                })
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