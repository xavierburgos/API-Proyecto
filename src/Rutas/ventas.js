const express = require('express')
const ventasSchema = require('../Modelos/ventas')

const router = express.Router()

//Registro de venta
router.post('/ventas', (req, res) => {
    const venta = ventasSchema(req.body);
    venta
        .save()
        .then((data) => res.json(data))
        .catch((data) => res.json({ message: error }))
})

//Consulta
router.get('/ventas', (req, res) => {
    ventasSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = router