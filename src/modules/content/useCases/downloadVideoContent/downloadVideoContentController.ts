import { Request, Response } from "express";
import { container } from "tsyringe";
import { DownloadVideoContentUseCase } from "./downloadVideoContentUseCase";

export class DownloadVideoContentController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const downloadVideoContentUseCase = container.resolve(DownloadVideoContentUseCase);

    const content = await downloadVideoContentUseCase.execute({ id });

    return response.status(200).json({
      url: content.video.url,
    });
  }
}
