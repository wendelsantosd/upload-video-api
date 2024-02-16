import { Content, Thumbnail, Video } from "@prisma/client";
import { ICreateContentDTO } from "../dtos/createContentDTO";
import { ISaveContentFileDTO } from "../dtos/saveContentVideoDTO";

export interface IContentRepository {
  create(data: ICreateContentDTO): Promise<Content>;
  saveVideoContent(data: ISaveContentFileDTO): Promise<Video>;
  saveThumbnailContent(data: ISaveContentFileDTO): Promise<Thumbnail>;
}
