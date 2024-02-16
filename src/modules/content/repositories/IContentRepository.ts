import { Content, Video } from "@prisma/client";
import { ICreateContentDTO } from "../dtos/createContentDTO";
import { ISaveContentVideoDTO } from "../dtos/saveContentVideoDTO";

export interface IContentRepository {
  create(data: ICreateContentDTO): Promise<Content>;
  saveVideoContent(data: ISaveContentVideoDTO): Promise<Video>;
}
