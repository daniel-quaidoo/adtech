import { User } from "@app/api-gateway/src/modules/auth/users/entities/user.entity";

//enums
import { DocumentEntityTypeEnum } from "./enums/document-type.enum";
import { MediaTypeEnum } from "./enums/media-type.enum";

export class CreateMediaDto {
  name: string;

  description?: string;

  content_url: string;

  media_type: MediaTypeEnum;

  media_alias: string;

  entity_id: string;

  entity_type: DocumentEntityTypeEnum;

  uploaded_by: User;
}