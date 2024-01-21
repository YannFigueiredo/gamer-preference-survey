import { connection } from "../database/connect.js";
import { DataTypes, Model } from "sequelize";

class GameModel extends Model {}

GameModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    platform: {
      type: DataTypes.ENUM("Playstation", "Xbox", "PC"),
      allowNull: false
    }
  },
  {
    sequelize: connection,
    modelName: "Game"
  }
);

export default GameModel;