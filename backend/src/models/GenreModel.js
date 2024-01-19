import { connection } from "../database/connect.js";
import { DataTypes, Model } from "sequelize";

class GenreModel extends Model {}

GenreModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: connection,
    modelName: "Genre"
  }
);