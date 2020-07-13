const mongoose = require('mongoose');

require('dotenv').config({ path: '.env' });
//configurações de conexao
const connection = mongoose.connect("mongodb://localhost/behero", {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true
})

module.exports = connection;