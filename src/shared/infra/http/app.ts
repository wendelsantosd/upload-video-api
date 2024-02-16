import "reflect-metadata";
import "dotenv/config";
import "../../container";
import "express-async-errors";
import cors from "cors";
import express, { Request, Response, NextFunction } from "express";
import { router } from "./routes";
import { server } from "@shared/config/env/server";
import { AppError } from "@shared/errors/AppError";

export const bootstrapAPI = async () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(router);

  app.use("/videos", express.static("uploads/videos"));
  app.use("/thumbnails", express.static("uploads/thumbnails"));

  app.use(
    (
      error: Error,
      request: Request,
      response: Response,
      next: NextFunction
    ) => {
      if (error instanceof AppError)
        return response.status(error.statusCode).json({
          message: error.message,
        });

      return response.status(500).json({
        message: `Internal Server Error: ${error.message}`,
      });
    }
  );

  app.listen(server.port || 3333, () =>
    console.log(`Server is running on port ${server.port || 3333}`)
  );
};
