const express = require('express')
const usuarioSchema = require('../Modelos/usuarios')

const router = express.Router()

//Creacion de un usuario nuevo
router.post('/usuarios', (req, res) => {
    const user = usuarioSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((data) => res.json({ message: error }))
})

//Impresion de usuarios en la bd
router.get('/usuarios', (req, res) => {
    usuarioSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//Buscar usuario por id
router.get("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    usuarioSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });


//Borrando usuarios por id
router.delete("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    usuarioSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

//Modificando usuarios por id
router.put("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    const { correo, contraseña, nombre, edad, rol, sucursal } = req.body;
    usuarioSchema
      .updateOne({ _id: id }, { $set: { correo, contraseña, nombre, edad, rol, sucursal } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router