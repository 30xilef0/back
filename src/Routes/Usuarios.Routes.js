//Definir  urls dentro de bakend  en points  rutas en nustra aplicacion
const { Router } = require("express");

const req = require("express/lib/request");

const {
  createUsers,
  getALLUsers,
  getUser,
  deleteUser,
  ubdateUser,
} = require("../Controllers/Usuarios.Controllers");

const router = Router();

router.get("", (req, res) => {
  res.send("Servidor coriendo");
});

//Creando un usuario
router.post("/usuarios", createUsers);

//Todos los usuarios
router.get("/usuarios", getALLUsers);

//Un Solo usuario
router.get("/usuarios/:id", getUser);

//Eliminando un usuario
router.delete("/usuarios/:id", deleteUser);

//Actuallizando un usuario
router.put("/usuarios", ubdateUser);

module.exports = router;
