const mongoose = require('mongoose')

var code = Math.floor(Math.random() * 21066)
const ventas = mongoose.Schema({
    productos: {
        type: String
    },
    total: {
        type: Number,
        default: code
    },
    sucursal: {
        type: String
    },
    usuario: {
        type: String
    },
    metodo_pago: {
        type: String
    }

})

module.exports = mongoose.model('ventas', ventas)