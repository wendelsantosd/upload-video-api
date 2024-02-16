import "reflect-metadata";
import "dotenv/config";
import "../../container";
import cors from "cors";
import express from "express";
import { router } from "./routes";

export const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
