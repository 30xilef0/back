const { Pool } = require("pg");

//Crea una conexion con la base de datos
const pool = new Pool({
  user: "postgres",
  password: "dandy2003tkd",
  host: "localhost",
  port: 5432,
  database: "usuarios_datos",
});

module.exports = pool;