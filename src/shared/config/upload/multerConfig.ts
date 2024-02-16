import { AppError } from "@shared/errors/AppError";
import { diskStorage } from "multer";
import path from "path";

export const storageVideoMulterConfig = {
  dest: path.resolve(__dirname, "..", "..", "..", "..", "uploads"),
  storage: diskStorage({
    destination: (req, file, callback) => {
      if (file.mimetype.includes("image")) {
        callback(null, path.resolve("uploads/thumbnails"));
      } else {
        callback(null, path.resolve("uploads/videos"));
      }
    },
    filename: (req, file, callback) => {
      const time = new Date().getTime();

      callback(null, `${time}_${file.originalname}`);
    },
  }),
  fileFilter: (req, file, callback) => {
    const allowedMimes = [
      "video/mp4",
      "video/webm",
      "image/jpeg",
      "image/jpg",
      "image/png",
    ];
    const mimeTypes = file.mimetype;

    if (allowedMimes.includes(mimeTypes)) {
      callback(null, true);
    } else {
      callback(new AppError("Arquivo inválido"));
    }
  },
};
