class Collections {
    // iniciar connection
    init(connection, mongoose) {
        this.connection = connection
        this.ongSchema(mongoose)
        this.incidentSchema(mongoose)
    }
    async ongSchema(mongoose) {
        const Schema = mongoose.Schema
        //model ongs
        const ongSchema = await new Schema({
            name: {
                type: String,
                require: true
            },
            email: {
                type: String,
                require: true,
                index: true,
                unique: true
            },
            password: {
                type: String,
                require: true
            },
            whatsapp: {
                type: Number,
                require: true,
                unique: true
            },
            city: {
                type: String,
                require: true
            },
            uf: {
                type: String,
                max: 2,
                require: true
            }


        })
        //criando uma collection usando o Schema definido
        await mongoose.model('ongs', ongSchema)
        await ongSchema.index({ email: 1 }, { unique: true })
        // log

    }
    async incidentSchema(mongoose) {
        // model incidents
        const IncidentSchema = await mongoose.Schema({
            title: {
                type: String,
                require: true
            },
            description: {
                type: String,
                require: true
            },
            value: {
                type: Number,
                require: true
            },
            ongId: {
                type: String,
                require: true
            }
        })
        //criando uma collection usando o schema definido
        await mongoose.model('incidents', IncidentSchema);
        //log

    }
}
module.exports = new Collections;