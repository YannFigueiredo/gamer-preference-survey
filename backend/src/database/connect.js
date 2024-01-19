import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT
  }
);

export const testConnection = async () => {
  await connection.authenticate().then(() => {
    console.log("Banco de dados conectado!");
  }).catch(error => console.log("Erro ao conectar no banco de dados: ", error))
};