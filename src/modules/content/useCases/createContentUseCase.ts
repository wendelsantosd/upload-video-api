import { inject, injectable } from "tsyringe";
import { Content } from "@prisma/client";
import { ICreateContentDTO } from "../dtos/createContentDto";
import { IContentRepository } from "../repositories/IContentRepository";

@injectable()
export class CreateContentUseCase {
  constructor(
    @inject("ContentRepository")
    private contentRepository: IContentRepository
  ) {}

  async execute(data: ICreateContentDTO): Promise<Content> {
    return await this.contentRepository.create(data);
  }
}
