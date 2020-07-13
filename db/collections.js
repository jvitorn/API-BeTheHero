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
            name: {
                type: String,
                require: true,
                validate: () => Promise.reject(new Error('Oops!'))
            },
            email: {
                type: String,
                require: true,
                index: true,
                unique: true,
                validate: {
                    validator: () => Promise.resolve(false),
                    message: 'Email validation failed'
                }
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
        mongoose.model('ongs', ongSchema)
        ongSchema.index({ email: 1 }, { unique: true })
        // log
        console.log('Schema de ONG´s criado com sucesso')
    }
    incidentSchema(mongoose) {
        // model incidents
        const IncidentSchema = mongoose.Schema({
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
        mongoose.model('incidents', IncidentSchema);
        //log
        console.log('Incident Schema criado com Sucesso');
    }
}
module.exports = new Collections;