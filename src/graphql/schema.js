import { makeExecutableSchema } from "graphql-tools"; //llama a un metodo para crear esquema de graphql
import { fileLoader, mergeTypes, mergeResolvers } from "merge-graphql-schemas"; //permite mesclar los esquemas de graphql
import { join } from "path"; //permite mezclar diferentes sistemas operativos
import "graphql-import-node"; // sirve para node pueda leer archivos con la extension gql,
import graphql from "./schema.gql"; //type definicion del esquema(schema) general

//obtenido todo los archivos typeDefs( de extension gql y lo almacenamos en un array)
const arrayTypeDefs = fileLoader(join(__dirname, "./typeDefs"), {
  extension: [".gql"]
});
//agregamos a nuestro array typeDfs del esquema general
arrayTypeDefs.push(graphql);
//mezclamos todos los typeDefs en un solo archivo retornamos y lo definimos como un typeDefs
const typeDefs = mergeTypes(arrayTypeDefs);

//obtenido todos archivos resolvers( de extension js y lo almacenamos en un array)
const arrayResolvers = fileLoader(join(__dirname, "./resolvers"), {
  extension: [".js"]
});

//mezclamos todos los resolvers en un solo archivo retornamos y lo definimos como un resolvers
const resolvers = mergeResolvers(arrayResolvers);

//creamos un nuevo esquema y , pasamos los typeDefs y los resolver y luego exportamos
export default new makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
});
