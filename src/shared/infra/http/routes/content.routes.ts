import { CreateContentController } from "@modules/content/useCases/createContent/createContentController";
import { DownloadVideoContentController } from "@modules/content/useCases/downloadVideoContent/downloadVideoContentController";
import { ListContentController } from "@modules/content/useCases/listContent/listContentController";
import { storageVideoMulterConfig } from "@shared/config/upload/multerConfig";
import { Router } from "express";
import multer from "multer";

export const contentRoutes = Router();

const createContentController = new CreateContentController();
const listContentController = new ListContentController();
const downloadVideoContentController = new DownloadVideoContentController();

contentRoutes.post(
  "/upload/video",
  multer(storageVideoMulterConfig).fields([
    {
      name: "video",
      maxCount: 1,
    },
    {
      name: "thumbnail",
      maxCount: 1,
    },
  ]),
  createContentController.handle
);

contentRoutes.get("/videos", listContentController.handle);
contentRoutes.get("/download/video/:id", downloadVideoContentController.handle);
