//Requires 
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 9000;

//Middlewares 
const usuario = require('./Rutas/usuarios')
const sucursal = require('./Rutas/sucursales')
const producto = require('./Rutas/productos')
const ventas = require('./Rutas/ventas')
const pagos = require('./Rutas/pagos')
const rol = require('./Rutas/roles')

//Rutas
app.get("/", (req, res) => {
  res.send("API Xavier Burgos");
});
app.use(express.json());
app.use('/api', sucursal)
app.use('/api', producto)
app.use('/api', pagos)
app.use('/api', ventas)
app.use('/api', rol)
app.use('/api', usuario)

// Conexion a la base de datos
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectadoa a la base de datos"))
  .catch((error) => console.error(error));

//Listening servidor
app.listen(port, () => console.log("Servidor en puerto: ", port));
