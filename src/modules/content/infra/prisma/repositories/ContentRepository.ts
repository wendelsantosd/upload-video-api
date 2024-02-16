import { ICreateContentDTO } from "@modules/content/dtos/createContentDTO";
import { ISaveContentVideoDTO } from "@modules/content/dtos/saveContentVideoDTO";
import { IContentRepository } from "@modules/content/repositories/IContentRepository";
import { Content, PrismaClient, Video } from "@prisma/client";
import { prismaClient } from "@shared/infra/database/prisma/client";

export class ContentRepository implements IContentRepository {
  private repository: PrismaClient;

  constructor() {
    this.repository = prismaClient;
  }

  async create(data: ICreateContentDTO): Promise<Content> {
    return await this.repository.content.create({ data });
  }

  async saveVideoContent(data: ISaveContentVideoDTO): Promise<Video> {
    return await this.repository.video.create({ data });
  }
}
