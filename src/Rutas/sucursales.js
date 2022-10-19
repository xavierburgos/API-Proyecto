const express = require('express')
const sucursalSchema = require('../Modelos/sucursales')

const router = express.Router()

//Nueva sucursal
router.post('/sucursal', (req, res) => {
    const su = sucursalSchema(req.body);
    su
        .save()
        .then((data) => res.json(data))
        .catch((data) => res.json({ message: error }))
})

//Consulta
router.get('/sucursal', (req, res) => {
    sucursalSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})


//Actualizacion
router.put("/sucursal/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, telefono, direccion, status } = req.body;
    sucursalSchema
      .updateOne({ _id: id }, { $set: { nombre, telefono, direccion, status } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router