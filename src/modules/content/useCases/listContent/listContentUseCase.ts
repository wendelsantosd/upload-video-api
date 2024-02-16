import { inject, injectable } from "tsyringe";
import { Content } from "@prisma/client";
import { IContentRepository } from "../../repositories/IContentRepository";

@injectable()
export class ListContentUseCase {
  constructor(
    @inject("ContentRepository")
    private contentRepository: IContentRepository
  ) {}

  async execute(): Promise<Content[]> {
    return await this.contentRepository.list();
  }
}
