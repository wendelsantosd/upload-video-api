import { AppError } from "@shared/errors/AppError";
import multer, { diskStorage } from "multer";
import path from "path";

export const storageVideoMulterConfig = {
  dest: path.resolve(__dirname, "..", "..", "..", "..", "uploads"),
  storage: diskStorage({
    destination: (req, res, callback) => {
      callback(null, path.resolve("uploads/videos"));
    },
    filename: (req, file, callback) => {
      const time = new Date().getTime();

      callback(null, `${time}_${file.originalname}`);
    },
  }),
  fileFilter: (req, file, callback) => {
    const allowedVideoMimes = ["video/mp4", "video/webm"];
    const mimeTypes = file.mimetype;

    if (allowedVideoMimes.includes(mimeTypes)) {
      callback(null, true);
    } else {
      callback(new AppError("Arquivo inválido. Aceita somente mp4, webm."));
    }
  },
};
