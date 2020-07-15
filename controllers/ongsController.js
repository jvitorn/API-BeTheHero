const mongoose = require('mongoose')

class Ongs {
    async createOng(ong, res) {
        //informações para cadastrar na collection
        const { name, email, password, whatsapp, city, uf } = ong
        // model
        const Ong = await mongoose.model('ongs')
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
    async updateOng(id, ong, res) {
        //informações para cadastrar na collection
        const { name, email, password, whatsapp, city, uf } = ong
        //Collection of ONGs
        const Ong = mongoose.model('ongs')
        try {
            //atualizar informações
            const update = await Ong.updateOne({ _id: id }, {
                name: name,
                email: email,
                password: password,
                whatsapp: whatsapp,
                city: city,
                uf: uf
            })
            res.status(201).json({ msg: "Dados Atualizados Com Sucesso", update })
        }
        catch (error) {
            res.status(400).json({ msg: "Erro ao atualizar dados da ONG", error })
        }
    }
    async listOng(res) {
        //Collection of ONGs
        const Ong = await mongoose.model('ongs')
        try {
            //find
            const find = await Ong.find({}, { password: 0, uf: 0 }).sort({ title: 1 }).exec();


            //contador de registros
            const count = await Ong.countDocuments()
            res.status(202).json({ results: find, count: count });
        } catch (error) {
            res.status(404).json({ msg: "Erro ao listar ONGs", err: error })
        }



    }
    async listId(id, res) {
        //Collection of ONGs
        const Ong = await mongoose.model('ongs')
        try {
            //find
            const find = await Ong.findOne({ _id: id }, { password: 0 }).sort({ title: 1 }).exec();



            res.status(202).json({ results: find });
        } catch (error) {
            res.status(404).json({ msg: "Erro ao listar ONGs", err: error })
        }



    }
    // delete
    async deleteOng(id, res) {
        const ongId = id
        //Collection of ONGs
        const Ong = await mongoose.model('ongs')
        try {
            //Função de remover usuario passando como parametro o ID dele 
            const dell = await Ong.findOneAndDelete({ _id: ongId }).exec()

            //passando status e um json com a resposta
            res.status(204).json({ msg: "ONG Removida com sucesso", result: dell.ok });
        }
        catch (error) {
            res.status(400).json({ msg: "Erro ao deletar a ONG", error });
        }
    }
}
// export
module.exports = new Ongs