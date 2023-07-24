const { Schema, model } = require( 'mongoose' );


// * Schema: Es una representacion estructural de la entidad que se va a guardar en la base de datos
const storageSchema = new Schema({
    fileName: {
        type: 'string',
    },
    path: {
        type: 'string',
    },
    userId: {
        type: 'string',
    }
},
{
    timestamps: true,
    versionKey: false,
});


// * Creamos un modelo a partir de nuestro Schema
const storageModel = model( 'storage', storageSchema );


module.exports = storageModel;