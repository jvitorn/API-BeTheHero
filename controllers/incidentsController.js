const mongoose = require('mongoose')


class Incidents {
    // create
    async createIncidents(incident, res) {
        //informações para cadastrar na collection
        const { title, description, value, ongId } = incident
        const Incident = mongoose.model('incidents')
        //insert
        try {
            const insert = await new Incident({
                title: title,
                description: description,
                value: value,
                ongId: ongId
            }).save()
            // caso concluido irá executar isso
            res.status(201).json({ msg: "Cadastro de Novo Incident concluido !", title: insert.title })
        }
        // case error
        catch (error) {
            res.status(404).json({ msg: "Erro ao cadastrar o Incident", error })
        }
    }
    // update
    async updateIncidents(id, incident, res) {
        //Collection of Incidents
        const Incident = mongoose.model('incidents')
        try {
            //atualizar informações
            const update = await Incident.updateOne({ _id: id }, {
                title: incident.title,
                description: incident.description,
                value: incident.email
            })
            res.status(201).json({ msg: "Dados Atualizados Com Sucesso", update })
        }
        catch (error) {
            res.status(400).json({ msg: "Erro ao atualizar Incident", error })
        }
    }
    async listIncidents(res) {
        //Collection of Incidents
        const Incident = mongoose.model('incidents')
        try {
            //find
            const find = await Incident.find().sort({ title: 1 }).exec();
            res.status(202).json(find);
        } catch (err) {
            res.status(404).json({ msg: "Erro ao listar Incidents", err })
        }
        //contador de registros
        const { count } = await Incident.count()
        //contador de registros passando o o dado pelo cabeçalho
        res.header('X-Total-Count', count);
    }
    // delete
    async deleteIncidents(id, res) {
        // Collectio of Incidents
        const Incident = mongoose.model('incidents')
        try {
            //Função de remover usuario passando como parametro o ID dele 
            const dell = await Incident.deleteOne({ _id: id })
            //passando status e um json com a resposta
            res.status(204).json({ msg: "Incident Removido com sucesso", dell });
        }
        catch (error) {
            res.status(400).json({ msg: "Erro ao deletar o  Incident", error });
        }
    }
}
module.exports = new Incidents