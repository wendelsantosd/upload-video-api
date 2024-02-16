import { CreateContentController } from "@modules/content/useCases/createContentController";
import { Router } from "express";

export const contentRoutes = Router();

const createContentController = new CreateContentController();

contentRoutes.post("/upload/video", createContentController.handle);
