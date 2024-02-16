import { ICreateContentDTO } from "@modules/content/dtos/createContentDto";
import { IContentRepository } from "@modules/content/repositories/IContentRepository";
import { Content, PrismaClient } from "@prisma/client";
import { prismaClient } from "@shared/infra/database/prisma/client";

export class ContentRepository implements IContentRepository {
  private repository: PrismaClient;

  constructor() {
    this.repository = prismaClient;
  }

  async create(data: ICreateContentDTO): Promise<Content> {
    return await this.repository.content.create({ data });
  }
}
