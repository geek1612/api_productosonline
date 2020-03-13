//importamos la libreria de mongoose
import { Schema, model } from "mongoose";

//modelo de schema 0 esquema
const schema = new Schema(
  {
    nombre: {
      type: String,
      required: true
    },
    logo: String
  },
  {
    collection: "app", // nombre de la coleccion
    timestamps: true // mongoose registra fecha y hora de actualizacion de forma automatica
  }
);

//exportamos el modelo de nuestra conexion pasando el nomnbre y su esquema correspondiente
export default model("app", schema);
