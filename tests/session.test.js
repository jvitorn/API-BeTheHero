const collections = require('../db/collections')
const mongoose = require('mongoose')
const Session = require('../controllers/sessionController')

const userData = {
    email: "titulo",
    password: "aqui vai uma descrição de teste",

};
describe('Testando login', () => {

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

    it('login', async done => {
        const validUser = Session.login(userData);

        // Object Id should be defined when successfully saved to MongoDB.
        done()
    });



})