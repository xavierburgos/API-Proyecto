const mongoose = require('mongoose')

var code = Math.floor(Math.random() * 21066)

const pagos = mongoose.Schema({
    nombre: {
        type: String
    },
    codigo: {
        type: Number,
        default: code
    },
    timesptamp: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('pagos', pagos)