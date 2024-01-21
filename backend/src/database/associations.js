import GameModel from "../models/GameModel.js";
import GenreModel from "../models/GenreModel.js";
import VoteModel from "../models/VoteModel.js";

export const setupAssociations = () => {
  GameModel.belongsTo(GenreModel);
  GenreModel.hasMany(GameModel);
  GameModel.hasMany(VoteModel);
  VoteModel.belongsTo(GameModel);
};