const { request, response } = require('express')
const JWT = require('jsonwebtoken')
const SIGNATURE = 'HHTDSI'
module.exports = {
    async validateToken(req = request, res = response, next) {
        const authtoken = req.headers.authorization

        if (!authtoken) {
            return res.status(401).json({ msg: "Token não enviado" })
        }

        const parts = authtoken.split(' ')

        if (!parts.lenght === 2) {
            return res.status(401).json({ msg: "Erro no Token" })
        }

        const [scheme, token] = parts;

        if (!/^Bearer$/i.test(scheme) || !token) {
            return res.status(401).json({ msg: "Token malformado" })
        }


        const verif = authtoken.split('Bearer ')
        JWT.verify(verif[1], SIGNATURE, (err, decoded) => {

            if (err) return res.status(500).json({ auth: false, msg: 'Falha ao autenticar Token.' })

            // se tudo estiver ok, salva no request para uso posterior
            req.userId = decoded.id
            next();
        });
    }
}