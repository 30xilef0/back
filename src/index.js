const express = require("express");
const req = require("express/lib/request");
const { json } = require("express/lib/response");
const res = require("express/lib/response");
const morgan = require("morgan");

const usuasriosRoutes = require("./Routes/Usuarios.Routes");

const app = express();

app.use(morgan("dev"));

//Expres no reconoce por si solo los objeros json para eso es esta funcion
app.use(express.json());

app.use(usuasriosRoutes);

app.use((err, req, res, next) => {
    return res.json({
      message: err.message || "Hubo un error con el servidor ",
    });
  });
  
  app.listen(4001);
  console.log("Servidor en  el puerto 4001");
  