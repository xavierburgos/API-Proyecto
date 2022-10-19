const express = require('express')
const pagoSchema = require('../Modelos/pagos')

const router = express.Router()

//Consulta
router.get('/pagos', (req, res) => {
    pagoSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//Detalle pagos
router.get('/pagos/id=:id&tipo=:p', (req, res) => {
    const { id, p } = req.params

    pagoSchema
        .find({
            _id: id,
            nombre: p
        }).then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = router