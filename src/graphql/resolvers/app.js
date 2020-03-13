import App from "../../dataBase/models/app";

export default {
  Query: {
    getApp: async () => {
      try {
        const app = await App.find();
        return app;
      } catch (error) {
        console.log(error);
        return null;
      }
    }
  },

  Mutation: {
    createApp: async (_, { nombre, logo }) => {
      try {
        const NewApp = new App({
          nombre: nombre,
          logo: logo
        });
        await NewApp.save();
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    deleteApp: async (_, { _id }) => {
      try {
        await App.findOneAndDelete({
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
