import { inject, injectable } from "tsyringe";
import { Content } from "@prisma/client";
import { ICreateContentDTO } from "../dtos/createContentDTO";
import { IContentRepository } from "../repositories/IContentRepository";
import { ISaveContentVideoDTO } from "../dtos/saveContentVideoDTO";
import { serveStatic } from "@shared/config/env/serveStatic";
import { Multer } from "multer";

@injectable()
export class CreateContentUseCase {
  constructor(
    @inject("ContentRepository")
    private contentRepository: IContentRepository
  ) {}

  async execute(
    data: ICreateContentDTO,
    video?: Express.Multer.File
  ): Promise<Content> {
    const content = await this.contentRepository.create(data);

    if (video)
      await this.contentRepository.saveVideoContent({
        contentId: content.id,
        url: `${serveStatic.url}/videos/${video.filename}`,
        name: video.filename,
        size: video.size,
      });

    return content;
  }
}
