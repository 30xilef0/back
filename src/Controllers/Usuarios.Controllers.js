const { query }= require("express")
const pool = require("../db")

//Inserta un producto ala base de datos 
const createUsers= async (req, res, next) => {
    //nos permite conocer la informacion que nos manden
    const {nombre ,apellido_paterno,apellido_materno,email,direccion,codigo_postal,telefono,contraseña} = req.body;
    //Nota RETURNING * sirve para  que retornar todos los campos que an sido insertados
    try {
      const result = await pool.query(
        "INSERT INTO usuarios (nombre ,apellido_paterno,apellido_materno,email,direccion,codigo_postal,telefono,contraseña)   VALUES ($1,$2,$3,$4,$5,$6,$7,$8)  RETURNING *",
        [nombre ,apellido_paterno,apellido_materno,email,direccion,codigo_postal,telefono,contraseña]
      );
      res.json(result.rows[0]);
    } catch (error) {
      next(error);
    }
  };
  
  
    
  
  //Recibe todos los usuarios
  const getALLUsers= async (req, res, next) => {
    try {
      const getALLUsers = await pool.query("Select * From usuarios");
      res.json(getALLUsers.rows);
    } catch (error) {
      next(error);
    }
  };
  
  //Recibe solo un usuario
  const getUser = async (req, res, next) => {
    try {
      //este req.params lo que hace esque cualquier id que venga despues del / lo va a retornar  siempre y cuando este en la base de datos
      const { id } = req.params;
      const result = await pool.query("Select * From usuarios WHERE id = $1", [id]);
  
      //si no encontro el id
      if (result.rows.length == 0)
        return res.status(404).json({
          message: "Producto no encontrado",
        });
      res.json(result.rows[0]);
    } catch (error) {
      next(error);
    }
  };
  
  //Eliminando un producto
  const deleteUser = async (req, res, next) => {
    try {
      //este req.params lo que hace esque cualquier id que venga despues del / lo va a retornar  siempre y cuando este en la base de datos
      const { id } = req.params;
      const result = await pool.query("DELETE From usuarios WHERE id = $1 ", [id]);
  
      //si no encontro el id
      if (result.rowCount == 0)
        return res.status(404).json({
          message: "Producto no encontrado",
        });
  
      return res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  };
  
  //Actualiza
  const ubdateUser = async (req, res, next) => {
    const { id } = req.params;
    const { nombre ,apellido_paterno,apellido_materno,email,direccion,codigo_postal,telefono,contraseña } = req.body;
  
    try {
      const result = await pool.query(
        "UPDATE usuarios SET nombre = $1, apellido_paterno = $2,apellido_materno = $3  ,email = $4 , direccion = $5,codigo_postal = $6 , telefono = $7,contraseña = $8  WHERE id = $9 RETURNING *",
        [nombre ,apellido_paterno,apellido_materno,email,direccion,codigo_postal,telefono,contraseña, id]
      );
  
      if (result.rows.length == 0)
        return res.status(404).json({
          message: "Producto no encontrado",
        });
  
      return res.json(result.rows[0]);
    } catch (error) {
      next(error);
    }
  };
  
  module.exports = {
    createUsers,
    getALLUsers,
    getUser,
    deleteUser,
    ubdateUser,
  };
  