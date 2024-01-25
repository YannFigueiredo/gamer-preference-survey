import { connection } from "../database/connect.js";
import { DataTypes, Model } from "sequelize";

class VoteModel extends Model {}

VoteModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    voter: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize: connection,
    modelName: "Vote"
  }
);

export default VoteModel;