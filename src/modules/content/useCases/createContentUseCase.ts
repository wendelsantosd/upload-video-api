import { inject, injectable } from "tsyringe";
import { Content } from "@prisma/client";
import { ICreateContentDTO } from "../dtos/createContentDTO";
import { IContentRepository } from "../repositories/IContentRepository";
import { serveStatic } from "@shared/config/env/serveStatic";
import { AppError } from "@shared/errors/AppError";

@injectable()
export class CreateContentUseCase {
  constructor(
    @inject("ContentRepository")
    private contentRepository: IContentRepository
  ) {}

  async execute(
    data: ICreateContentDTO,
    video?: Express.Multer.File,
    thumbnail?: Express.Multer.File
  ): Promise<Content> {
    if (!video) throw new AppError("É preciso enviar um vídeo.");

    const content = await this.contentRepository.create(data);

    await this.contentRepository.saveVideoContent({
      contentId: content.id,
      url: `${serveStatic.url}/videos/${video.filename}`,
      name: video.filename,
      size: video.size,
    });

    if (thumbnail)
      await this.contentRepository.saveThumbnailContent({
        contentId: content.id,
        url: `${serveStatic.url}/thumbnails/${thumbnail.filename}`,
        name: thumbnail.filename,
        size: thumbnail.size,
      });

    return content;
  }
}
