import Categorias from "../../dataBase/models/categorias";

export default {
  Query: {
    getCategorias: async () => {
      try {
        const categorias = await Categorias.find();
        return categorias;
      } catch (error) {
        console.log(error);
        return null;
      }
    }
  },

  Mutation: {
    createCategorias: async (_, { nombre, icono }) => {
      try {
        const newCategoria = new Categorias({
          nombre: nombre,
          icono: icono
        });
        await newCategoria.save();
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },

    deleteCategorias: async (_, { _id }) => {
      try {
        await Categorias.findOneAndDelete({
          _id: _id
        });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  }
};
