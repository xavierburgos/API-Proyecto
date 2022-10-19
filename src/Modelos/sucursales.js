const mongoose = require('mongoose')

var code = Math.floor(Math.random() * 21066)
const sucursales = mongoose.Schema({
    nombre: {
        type: String
    },
    codigo: {
        type: Number,
        default: code
    },
    telefono: {
        type: Number
    },
    direccion: {
        type: String
    },
    ubicacion: {
        type: String
    },
    status: {
        type: String
    }

})

module.exports = mongoose.model('sucursales', sucursales)