const express = require('express')
const rolSchema = require('../Modelos/roles')

const router = express.Router()

//Consultas
router.get('/roles', (req, res) => {
    rolSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

router.post('/roles', (req, res) => {
    const roles = rolSchema(req.body);
    roles
        .save()
        .then((data) => res.json(data))
        .catch((data) => res.json({ message: error }))
})

module.exports = router