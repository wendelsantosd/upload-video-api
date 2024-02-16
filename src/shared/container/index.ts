import { container } from "tsyringe";
import { ContentRepository } from "@modules/content/infra/prisma/repositories/ContentRepository";
import { IContentRepository } from "@modules/content/repositories/IContentRepository";

container.registerSingleton<IContentRepository>(
  "ContentRepository",
  ContentRepository
)
