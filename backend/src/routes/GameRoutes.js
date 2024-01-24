import { Router } from "express";
import GameController from "../controllers/GameController.js";

const gameRouter = Router();

gameRouter.get("/games", GameController.listGames);
gameRouter.get("/games/:id", GameController.listGame);
gameRouter.post("/games", GameController.createGame);
gameRouter.put("/games/:id", GameController.updateGame);
gameRouter.delete("/games/:id", GameController.deleteGame);

export default gameRouter;