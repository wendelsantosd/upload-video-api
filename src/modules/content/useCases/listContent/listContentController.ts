import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListContentUseCase } from "./listContentUseCase";

export class ListContentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listContentUseCase = container.resolve(ListContentUseCase);

    const contents = await listContentUseCase.execute();

    return response.status(200).json(contents);
  }
}
