const collections = require('../db/collections')
const mongoose = require('mongoose');
const UserModel = require('../controllers/ongsController');
const userData = {
    name: "test",
    email: "test@yopmail.com",
    password: "123",
    whatsapp: "123456789",
    city: "Itanhaém",
    uf: "SP"
};

describe('Testando model ONG´s', () => {

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
        collections.init(connection, mongoose);
    });

    it('Criando e Salvando dado de uma ONG', async done => {
        const validUser = UserModel.createOng(userData);

        // Object Id should be defined when successfully saved to MongoDB.
        done()
    });



})