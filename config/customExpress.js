// require
const express = require('express')
const consign = require('consign')
const cors = require('cors');
const bodyParser = require('body-parser')
// export
module.exports = () => {
    //criando um app em express
    const app = express()
    //midwares
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization')
        next()
    })
    // definindo arquivos estaticos da aplicação
    app.use(express.static('./public'))
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    //consign esta incluindo tudo que esta na pasta 'controllers' para dentro do app
    consign()
        .include('controllers')
        .into(app)
    //cors
    app.use(cors())



    //return
    return app;
}