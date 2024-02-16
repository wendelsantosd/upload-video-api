import { Content } from "@prisma/client";
import { ICreateContentDTO } from "../dtos/createContentDto";

export interface IContentRepository {
  create(data: ICreateContentDTO): Promise<Content>;
}
