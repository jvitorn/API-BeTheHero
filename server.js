// require
const customExpress = require('./config/customExpress')
const mongoose = require('mongoose')
const connection = require('./db/connection')
const collections = require('./db/collections')
const port = 3331

// connection 
connection.then(() => {
    const app = customExpress();
    // listen server
    app.listen(port, () => console.log('Servidor Iniciado e Rodando no link http://localhost:' + port))
    //log
    console.log("MongoDB connectado...");
    //init connection
    collections.init(connection, mongoose);
})
    // if error
    .catch((error) => console.error("Erro ao Connectar no MongoDB" + error))
