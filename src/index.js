//**mportamos las librerias **/
//libreria de express
import express, { json, urlencoded} from "express";
//sirve para ver las peticiones de los http
import morgan from "morgan";
//permite abrir las peticiones de otro dominio
import cors from "cors";
//permite leer cookkies de la cabecera de los http
import cookieParser from "cookie-parser";
//llamamos a las librerias de apollo server que contiene un gestor para probar la API integrada
import { ApolloServer } from "apollo-server-express";
//importamos el graphql/schema del API
import schema from "./graphql/schema";

//join =>concatenar rutas OS
import { join } from "path";
//importamos la libreria nativa express  HTTP
import { createServer } from "http";
//import colores
import "colors";
//importamos la conexion a la base de datos
import dataBase from "./dataBase/conection";

//guardamos nuestra aplicacion inicializada con  express
const app = express();

//importamos los middlewares
//utilizara en modo de desarrollo abrir peticiones
//app.use(morgan("dev"));
//permite hacer un par para poder leer archvos json
app.use(json());
// ayuda a decodificar la url
app.use(
  urlencoded({
    extended: false
  })
);
//sirve para leer los cookies
app.use(cookieParser());
//permite hacer peticiones desde otro dominio
app.use("*", cors());
app.use(express.static(join(__dirname, "../public")));

//variables generalles de la API
export const appPort = 4000;
export const appHost = "http://localhost";
export const appName = "API-graphql";

//inicializamos servidor de apollo
const server = new ApolloServer({
  schema: schema,
  introspection: true,
  playground: true
});

server.applyMiddleware({
  app
});

//ruta
app.use("/", (req, res) => {
  res.redirect("/");
});

//nos conectamos a la base de datos
dataBase();

//estamos creando el servidor http con las funciones de express
const httpServer = createServer(app);

//arrancamos el servidor htttp
httpServer.listen(appPort, () => {
  console.log(appName.magenta);
  console.log(
    `servidor funcionando `.yellow + `${appHost}:${appPort}/graphql`.green
  );
});
