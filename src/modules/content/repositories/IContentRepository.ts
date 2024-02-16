import { Content, Thumbnail, Video } from "@prisma/client";
import { ICreateContentDTO } from "../dtos/createContentDTO";
import { ISaveContentFileDTO } from "../dtos/saveContentVideoDTO";

export type IContent = Content & {
  video: Video;
  thumbnail: Thumbnail;
};

export interface IContentRepository {
  create(data: ICreateContentDTO): Promise<Content>;
  getById(id: string): Promise<IContent>;
  list(): Promise<Content[]>;
  saveVideoContent(data: ISaveContentFileDTO): Promise<Video>;
  saveThumbnailContent(data: ISaveContentFileDTO): Promise<Thumbnail>;
}
