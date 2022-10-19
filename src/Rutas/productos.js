const express = require('express')
const productoSchema = require('../Modelos/productos')

const router = express.Router()

//Nuevo producto
router.post('/productos', (req, res) => {
    const prod = productoSchema(req.body);
    prod
        .save()
        .then((data) => res.json(data))
        .catch((data) => res.json({ message: error }))
})

//Consulta
router.get('/productos', (req, res) => {
    productoSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//Busqueda de producto
router.get('/productos/sku', (req, res) => {
    const { s } = req.params

    productoSchema
        .find({
            sku
        }).then((data) => res.json(data))
        .catch((error) => res.send("Encontrado"))
})

//Eliminar producto
router.delete('/productos/:id', (req, res) => {
    const { id} = req.params

    productoSchema
        .remove({
            id
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//Actualizar producto
router.put('/productos/:id', (req, res) => {
    const { id } = req.params
    const { nombre, sku, stock, sucursal, precio, status } = req.body
    productoSchema
        .updateOne({
            id
        }, { $set: { nombre, sku, stock, sucursal, precio, status } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = router