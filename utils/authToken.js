const { request, response } = require('express')
const JWT = require('jsonwebtoken')
const SIGNATURE = 'HHTDSI'
module.exports = {
    async validateToken(req = request, res = response, next) {
        const authtoken = req.headers['x-access-token']

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

        const { codigo, nivel, nome } = JWT.decode(token);

        if (!codigo || !nivel || !nome) {
            return res.status(401).json({ msg: "Token Inválido" })
        }

        JWT.verify(authtoken, SIGNATURE, (err, decoded) => {
            if (err) return res.status(500).send({ auth: false, msg: 'Falha ao autenticar Token.' })

            // se tudo estiver ok, salva no request para uso posterior
            req.userId = decoded.id
            next();
        });
    }
}