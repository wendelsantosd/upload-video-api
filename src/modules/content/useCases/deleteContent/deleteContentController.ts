import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteContentUseCase } from "./deleteContentUseCase";

export class DeleteContentController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteContentUseCase = container.resolve(DeleteContentUseCase);

    const content = await deleteContentUseCase.execute({ id });

    return response.status(200).json({ message: content });
  }
}
