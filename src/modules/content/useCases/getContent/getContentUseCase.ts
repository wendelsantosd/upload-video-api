import { inject, injectable } from "tsyringe";
import {
  IContent,
  IContentRepository,
} from "../../repositories/IContentRepository";
import { AppError } from "@shared/errors/AppError";

export type IRequest = {
  id: string;
};

@injectable()
export class GetContentUseCase {
  constructor(
    @inject("ContentRepository")
    private contentRepository: IContentRepository
  ) {}

  async execute({ id }: IRequest): Promise<IContent> {
    const content = await this.contentRepository.getById(id);

    if (!content) throw new AppError("Conteúdo não existe.");

    return content;
  }
}
