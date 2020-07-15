const mongoose = require('mongoose');


//configurações de conexao
const connection = async () => {
    await mongoose.connect("mongodb+srv://jvitorn:UE8v9L5fhUmiBoUO@cluster0-ydowt.gcp.mongodb.net/behero?retryWrites=true&w=majority", {
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true
    })
}

module.exports = connection();