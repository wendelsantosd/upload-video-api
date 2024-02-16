import { ICreateContentDTO } from "@modules/content/dtos/createContentDTO";
import { ISaveContentFileDTO } from "@modules/content/dtos/saveContentVideoDTO";
import { IContentRepository } from "@modules/content/repositories/IContentRepository";
import { Content, PrismaClient, Thumbnail, Video } from "@prisma/client";
import { prismaClient } from "@shared/infra/database/prisma/client";

export class ContentRepository implements IContentRepository {
  private repository: PrismaClient;

  constructor() {
    this.repository = prismaClient;
  }
  async list(): Promise<Content[]> {
    return await this.repository.content.findMany({
      include: {
        video: true,
        thumbnail: true,
      }
    });
  }

  async create(data: ICreateContentDTO): Promise<Content> {
    return await this.repository.content.create({ data });
  }

  async saveVideoContent(data: ISaveContentFileDTO): Promise<Video> {
    return await this.repository.video.create({ data });
  }

  async saveThumbnailContent(data: ISaveContentFileDTO): Promise<Thumbnail> {
    return await this.repository.thumbnail.create({ data });
  }
}
