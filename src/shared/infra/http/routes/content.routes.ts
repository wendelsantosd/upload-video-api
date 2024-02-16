import { CreateContentController } from "@modules/content/useCases/createContentController";
import { storageVideoMulterConfig } from "@shared/config/upload/multerConfig";
import { Router } from "express";
import multer from "multer";

export const contentRoutes = Router();

const createContentController = new CreateContentController();

contentRoutes.post(
  "/upload/video",
  multer(storageVideoMulterConfig).single("video"),
  createContentController.handle
);
