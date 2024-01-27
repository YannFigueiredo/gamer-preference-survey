import { Router } from "express";
import GenreController from "../controllers/GenreController.js";
import cors from "cors";

const genreRouter = Router();

genreRouter.get("/genres", cors(), GenreController.listGenres);
genreRouter.get("/genres/:id", cors(), GenreController.listGenre);
genreRouter.post("/genres", cors(), GenreController.createGenre);
genreRouter.put("/genres/:id", cors(), GenreController.updateGenre);
genreRouter.delete("/genres/:id", cors(), GenreController.deleteGenre);

export default genreRouter;