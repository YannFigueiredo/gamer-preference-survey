import { Router } from "express";
import VoteController from "../controllers/VoteController.js";

const voteRouter = Router();

voteRouter.get("/votes", VoteController.listVotes);
voteRouter.get("/votes/:id", VoteController.listVote);
voteRouter.post("/votes", VoteController.createVote);
voteRouter.put("/votes/:id", VoteController.updateVote);
voteRouter.delete("/votes/:id", VoteController.deleteVote);

export default voteRouter;