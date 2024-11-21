const mongoose = require("mongoose");

const connectToDataBase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.zokv7.mongodb.net/?retryWrites=true&w=majority&appName=CursoNodejs`
    );
    console.log("Conexão ao Banco de Dados realizada com sucesso!");
  } catch (error) {
    console.log("Ocorreu um erro ao se conectar com o Banco de Dados: ", error);
  }
};

module.exports = connectToDataBase;
