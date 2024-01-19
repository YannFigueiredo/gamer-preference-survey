import GameModel from "../models/GameModel.js";
import GenreModel from "../models/GenreModel.js";
import VoteModel from "../models/VoteModel.js";

export const setupAssociations = () => {
  GameModel.belongsTo(
    GenreModel,
    {
      onDelete: "RESTRICT"
    }
  );
  GameModel.belongsTo(
    VoteModel,
    {
      onDelete: "RESTRICT"
    }
  );
};