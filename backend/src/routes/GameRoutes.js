import { Router } from "express";
import GameController from "../controllers/GameController.js";
import cors from "cors";

const gameRouter = Router();

gameRouter.get("/games", cors(), GameController.listGames);
gameRouter.get("/games/:id", cors(), GameController.listGame);
gameRouter.post("/games", cors(), GameController.createGame);
gameRouter.put("/games/:id", cors(), GameController.updateGame);
gameRouter.delete("/games/:id", cors(), GameController.deleteGame);

export default gameRouter;