// require
const customExpress = require('./config/customExpress')
const app = customExpress();
const mongoose = require('mongoose')
const connection = require('./db/connection')
const collections = require('./db/collections')

// connection 
connection.then(() => {
    //init connection
    collections.init(connection, mongoose)

})
    // if error
    .catch((error) => console.error("Erro ao Connectar no MongoDB" + error))
module.exports = app;