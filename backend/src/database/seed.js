import GameModel from "../models/GameModel.js";
import GenreModel from "../models/GenreModel.js";
import VoteModel from "../models/VoteModel.js";
import ControlModel from "../models/ControlModel.js";

export const seed = async () => {
  const control = await ControlModel.findOne({ where: { name: "seed_executed" } });
  
  try {
    if(!control) {
      await GenreModel.create({
        name: "Aventura"
      });

      await GenreModel.create({
        name: "RPG"
      });

      await GenreModel.create({
        name: "FPS"
      });

      await GenreModel.create({
        name: "Ação"
      });

      await GenreModel.create({
        name: "Casual"
      });

      await GenreModel.create({
        name: "Esporte"
      });

      await GenreModel.create({
        name: "Terror"
      });

      await GameModel.create({
        title: "Halo",
        platform: 2,
        GenreId: 4
      });

      await GameModel.create({
        title: "God of War",
        platform: 1,
        GenreId: 4
      });

      await GameModel.create({
        title: "The Last of Us",
        platform: 1,
        GenreId: 7
      });

      await GameModel.create({
        title: "League of Legends",
        platform: 3,
        GenreId: 5
      });

      await GameModel.create({
        title: "Counter Strike 2",
        platform: 3,
        GenreId: 3
      });

      await GameModel.create({
        title: "Fall Guys",
        platform: 3,
        GenreId: 5
      });

      await GameModel.create({
        title: "The Witcher 3",
        platform: 2,
        GenreId: 1
      });

      await GameModel.create({
        title: "Minecraft",
        platform: 2,
        GenreId: 1
      });

      await GameModel.create({
        title: "Spiderman",
        platform: 1,
        GenreId: 4
      });

      await GameModel.create({
        title: "Valorant",
        platform: 3,
        GenreId: 3
      });

      await GameModel.create({
        title: "God of War 2",
        platform: 1,
        GenreId: 4
      });

      await GameModel.create({
        title: "God of War 3",
        platform: 1,
        GenreId: 4
      });

      await GameModel.create({
        title: "Starfield",
        platform: 2,
        GenreId: 2
      });

      await GameModel.create({
        title: "World of Warcraft",
        platform: 3,
        GenreId: 2
      });

      await GameModel.create({
        title: "DOTA 2",
        platform: 3,
        GenreId: 5
      });

      await GameModel.create({
        title: "Minecraft",
        platform: 3,
        GenreId: 1
      });

      await GameModel.create({
        title: "The Last of Us 2",
        platform: 1,
        GenreId: 7
      });

      await GameModel.create({
        title: "Hi-Fi Rush",
        platform: 2,
        GenreId: 4
      });

      await GameModel.create({
        title: "FIFA 23",
        platform: 1,
        GenreId: 6
      });

      await VoteModel.create({
        voter: "Yann Figueiredo",
        GameId: 2,
      });

      await VoteModel.create({
        voter: "Amanda Mendes",
        GameId: 6,
      });

      await VoteModel.create({
        voter: "Fernando Guanais",
        GameId: 19,
      });

      await ControlModel.create({
        name: "seed_executed"
      });
    }
  } catch(error) {
    console.error("Erro ao provisionar o banco de dados: ", error);
  };
};