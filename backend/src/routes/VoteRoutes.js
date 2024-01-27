import { Router } from "express";
import VoteController from "../controllers/VoteController.js";
import cors from "cors";

const voteRouter = Router();

voteRouter.get("/votes", cors(), VoteController.listVotes);
voteRouter.get("/votes/:id", cors(), VoteController.listVote);
voteRouter.post("/votes", cors(), VoteController.createVote);
voteRouter.put("/votes/:id", cors(), VoteController.updateVote);
voteRouter.delete("/votes/:id", cors(), VoteController.deleteVote);

export default voteRouter;