import { inject, injectable } from "tsyringe";
import { IContentRepository } from "../../repositories/IContentRepository";
import { AppError } from "@shared/errors/AppError";
import { promisify } from "util";
import fs from "fs";
import path from "path";

export type IRequest = {
  id: string;
};

@injectable()
export class DeleteContentUseCase {
  constructor(
    @inject("ContentRepository")
    private contentRepository: IContentRepository
  ) {}

  async execute({ id }: IRequest): Promise<string> {
    const content = await this.contentRepository.getById(id);

    if (!content) throw new AppError("Conteúdo não encontrado.", 404);

    const pathVideo = path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "..",
      "..",
      "uploads",
      "videos",
      content.video.name
    );

    const pathThumbnail = path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "..",
      "..",
      "uploads",
      "thumbnails",
      content.thumbnail.name
    );

    const result = await this.contentRepository.delete(id);

    promisify(fs.unlink)(pathVideo);
    promisify(fs.unlink)(pathThumbnail);

    return result;
  }
}
