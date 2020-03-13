//importamos el modelo de las coleccion marcas
import Marcas from "../../dataBase/models/marcas";
//creamos los resolvers y los exportamos

export default {
  Query: {
    getMarcas: async () => {
      try {
        const marcas = await Marcas.find();
        return marcas;
      } catch (error) {
        console.log(error);
        return null;
      }
    }
  },

  Mutation: {
    createMarca: async (_, { nombre }) => {
      try {
        const newMarca = new Marcas({
          nombre: nombre
        });
        await newMarca.save();
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    deleteMarca: async (_, { _id }) => {
      try {
        await Marcas.findOneAndDelete({
          _id: _id
        });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  }
}
