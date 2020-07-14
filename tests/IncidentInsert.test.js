const collections = require('../db/collections')
const mongoose = require('mongoose');
const IncidentModel = require('../controllers/incidentsController');
const userData = {
    title: "titulo",
    description: "aqui vai uma descrição de teste",
    value: "120.00",
    url: "https://fenad.org.br/wp-content/uploads/2020/05/apadlogo.png",
    ongId: "fdfoaofsaofa9wrjq0fjqw9fq0wfjqw0f9j"
};

describe('Testando model Incident´s', () => {

    // It's just so easy to connect to the MongoDB Memory Server 
    // By using mongoose.connect
    beforeAll(async () => {
        const connection = await mongoose.connect("mongodb://localhost/behero", {
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true
        }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
        await collections.init(connection, mongoose);
    });

    it('Criando e Salvando dado de um Incident', async done => {
        const validUser = IncidentModel.createIncidents(userData);

        // Object Id should be defined when successfully saved to MongoDB.
        done()
    });



})