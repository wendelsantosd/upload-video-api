import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateContentUseCase } from "./createContentUseCase";


export class CreateContentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description } = request.body;

    const createContentUseCase = container.resolve(CreateContentUseCase);

    const content = await createContentUseCase.execute({
      title,
      description,
    });

    return response.status(201).json(content);
  }
}
