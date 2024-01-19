import express from "express";
import { testConnection } from "./database/connect.js";

const app = express();

app.use(express.json());

testConnection();

export default app;