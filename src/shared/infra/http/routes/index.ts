import { Router } from "express";
import { contentRoutes } from "./content.routes";

export const router = Router();

router.use("/", contentRoutes);
