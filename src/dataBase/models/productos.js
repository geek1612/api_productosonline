//importamos la libreria de mongoose
import { Schema, model } from "mongoose";

//modelo de schema 0 esquema
//referenciamos al ObjectId
const ObjectId = Schema.Types.ObjectId;
const schema = new Schema(
  {
    nombre: {
      type: String,
      required: true
    },
    categoria: {
      _id: ObjectId
    },
    marca: {
      _id: ObjectId
    },
    descripcion: String,
    precio: Number,
    url_imagen: String,
    caracteristicas: [
      {
        descripcion: {
          type: String,
          required: true
        }
      }
    ]
  },
  {
    collection: "productos", // nombre de la coleccion
    timestamps: true // mongoose registra fecha y hora de actualizacion de forma automatica
  }
);

//exportamos el modelo de nuestra conexion pasando el nomnbre y su esquema correspondiente
export default model("productos", schema);
