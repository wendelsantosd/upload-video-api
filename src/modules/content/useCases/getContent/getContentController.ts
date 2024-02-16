import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetContentUseCase } from "./getContentUseCase";

export class GetContentController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const getContentUseCase = container.resolve(GetContentUseCase);

    const content = await getContentUseCase.execute({ id });

    return response.status(200).json(content);
  }
}
