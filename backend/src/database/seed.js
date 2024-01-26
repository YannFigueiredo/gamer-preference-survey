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
        age: 28,
        GameId: 2,
      });

      await VoteModel.create({
        voter: "Amanda Mendes",
        age: 23,
        GameId: 6,
      });

      await VoteModel.create({
        voter: "Fernando Guanais",
        age: 14,
        GameId: 19,
      });

      await VoteModel.create({
        voter: "Max Figueiredo",
        age: 5,
        GameId: 11,
      });

      await VoteModel.create({
        voter: "Cristiano Messi",
        age: 38,
        GameId: 9,
      });

      await VoteModel.create({
        voter: "José Rodrigues",
        age: 25,
        GameId: 16,
      });

      await VoteModel.create({
        voter: "Thiago Tavares",
        age: 30,
        GameId: 5,
      });

      await VoteModel.create({
        voter: "Marcus Santiago",
        age: 30,
        GameId: 7,
      });

      await VoteModel.create({
        voter: "Daniel Remédios",
        age: 25,
        GameId: 8,
      });

      await VoteModel.create({
        voter: "Ádilla Figueiredo",
        age: 25,
        GameId: 1,
      });

      await VoteModel.create({
        voter: "Ana Brito",
        age: 73,
        GameId: 2,
      });

      await VoteModel.create({
        voter: "Claudia Figueiredo",
        age: 53,
        GameId: 14,
      });

      await VoteModel.create({
        voter: "Alex Figueiredo",
        age: 48,
        GameId: 3,
      });

      await VoteModel.create({
        voter: "Osmar Tadeu",
        age: 33,
        GameId: 15,
      });

      await VoteModel.create({
        voter: "Maria Helena",
        age: 24,
        GameId: 13,
      });

      await ControlModel.create({
        name: "seed_executed"
      });
    }
  } catch(error) {
    console.error("Erro ao provisionar o banco de dados: ", error);
  };
};