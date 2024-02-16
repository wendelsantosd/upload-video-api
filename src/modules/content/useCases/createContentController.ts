import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateContentUseCase } from "./createContentUseCase";

type IVideo = {
  video: {
    originalname: string;
    size: number;
    key: string;
    location: string;
  };
};

type CustomRequest = Request & IVideo;

export class CreateContentController {
  async handle(request: CustomRequest, response: Response): Promise<Response> {
    const { title, description } = request.body;

    const video = request.file;

    console.log(video);

    const createContentUseCase = container.resolve(CreateContentUseCase);

    const content = await createContentUseCase.execute({
      title,
      description,
    });

    return response.status(201).json(content);
  }
}
