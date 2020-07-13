const mongoose = require('mongoose')

class Ongs {
    async createOng(ong, res) {
        //informações para cadastrar na collection
        const { name, email, password, whatsapp, city, uf } = ong
        // model
        const Ong = mongoose.model('ongs')
        //insert
        try {
            //save -> insert
            const insert = await new Ong({
                name: name,
                email: email,
                password: password,
                whatsapp: whatsapp,
                city: city,
                uf: uf
            }).save()

            res.status(201).json({ msg: "Cadastro de Nova ONG efetuado", id: insert._id });
        } catch (err) {
            res.status(404).json({ msg: "Erro ao cadastrar uma ONG", err })
        }
    }
}

module.exports = new Ongs