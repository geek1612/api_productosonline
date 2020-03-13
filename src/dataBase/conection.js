//importamos librerias de mongoose
import mongoose from "mongoose";
import "colors";

//variables de la conexion a la base de datos
const host = "localhost"; //direccion de la base de datos
const port = 27017; // puerto que usa por defecto mongodb
const driver = "mongodb"; //driver de la base de datos de mongo db
const db = "productosonline"; // nombre de la base de datos
const opt = "retryWrites=true&w=majority"; // opciones de la base de datos
const user = ""; //nombre de usaurio de acceso a la base de datos // en localhost se deja en blanco
const password = ""; // contraseña de acceso  a la base de  datos // en localhost se deja en blanco

// ## ¿Por qué no pasamos el user y password en el URI? ##
// Porque existen errores si el user ó el password tienen caracteres especiales,
// tales como:  @ " = : / $ & | ...... etc  (Como en nuestro caso...!!)

//creamos nuestra uri o url para accesar a base de datos  o cadena de conexion
const uri = `${driver}://${host}:${port}/${db}?${opt}`;

const conection = async () => {
  const options = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    user: user,
    pass: password
  }; 
  try {
    await mongoose.connect(uri, options);
    console.log("conexion a la base de datos fue exitosa".white);
  } catch (error) {
    console.log(error.toString().red);
  }
};

export default conection;
