import express from "express";
import gameRouter from "./routes/GameRoutes.js";
import genreRouter from "./routes/GenreRoutes.js";
import voteRouter from "./routes/VoteRoutes.js";
import { testConnection } from "./database/connect.js";
import ControlModel from "./models/ControlModel.js";
import GameModel from "./models/GameModel.js";
import GenreModel from "./models/GenreModel.js";
import VoteModel from "./models/VoteModel.js";
import { seed } from "./database/seed.js";
import { setupAssociations } from "./database/associations.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors({
  origin: "https://gamerpreferencesurvey.netlify.app",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true 
}));

app.use(gameRouter);
app.use(genreRouter);
app.use(voteRouter);

testConnection();

(async () => {
  try {
    setupAssociations();

    console.log("Associações configuradas!");
  } catch(error) {
    console.error("Erro ao configurar as associações: ", error);
  }

  try {
    await ControlModel.sync({ alter: true });
    await GenreModel.sync({ alter: true });
    await GameModel.sync({ alter: true });
    await VoteModel.sync({ alter: true });

    console.log("Modelos sincronizados!");

    await seed();
  } catch(error) {
    console.error("Erro ao sincronizar modelos: ", error);
  }
})();

export default app;
