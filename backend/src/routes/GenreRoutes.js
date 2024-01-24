import { Router } from "express";
import GenreController from "../controllers/GenreController.js";

const genreRouter = Router();

genreRouter.get("/genres", GenreController.listGenres);
genreRouter.get("/genres/:id", GenreController.listGenre);
genreRouter.post("/genres", GenreController.createGenre);
genreRouter.put("/genres/:id", GenreController.updateGenre);
genreRouter.delete("/genres/:id", GenreController.deleteGenre);

export default genreRouter;