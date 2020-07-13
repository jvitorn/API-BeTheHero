class Collections {
    // iniciar connection
    init(connection, mongoose) {
        this.connection = connection
        this.ongSchema(mongoose)
        this.incidentSchema(mongoose)
    }
    ongSchema(mongoose) {
        const Schema = mongoose.Schema
        //model ongs
        const ongSchema = new Schema({

        })
        //criando uma collection usando o Schema definido
        mongoose.model('ongs', ongSchema)
        ongSchema.index({ email: 1 }, { unique: true })
        // log
        console.log('Schema de ONG´s criado com sucesso')
    }
    incidentSchema(mongoose) {
        // model incidents
        const IncidentSchema = mongoose.Schema({

        })
        //criando uma collection usando o schema definido
        mongoose.model('incidents', IncidentSchema);
        //log
        console.log('Incident Schema criado com Sucesso');
    }
}
module.exports = new Collections;