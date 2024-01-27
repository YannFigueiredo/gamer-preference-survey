import { connection } from "../database/connect.js";
import { DataTypes, Model } from "sequelize";

class ControlModel extends Model {} 

ControlModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: connection,
    modelName: "Control",
    tableName: "controls"
  }
);

export default ControlModel;