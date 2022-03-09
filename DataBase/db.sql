CREATE DATABASE Usuarios_Datos

CREATE TABLE Usuarios (
    id  SERIAL PRIMARY KEY,
    nombre VARCHAR (255) ,
    apellido_paterno VARCHAR (255) ,
    apellido_materno VARCHAR (255) ,
    email  VARCHAR(255) UNIQUE,
    direccion VARCHAR(255),
    codigo_postal  INTEGER,
    telefono  INTEGER,
    contraseña VARCHAR(255)
     );