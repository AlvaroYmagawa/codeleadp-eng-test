import { ICreatePostDTO } from "modules/posts/interfaces/dtos";
import { IBaseComponent } from "shared/interfaces";

export type PostFormData = Omit<ICreatePostDTO, 'username'> ;

export interface PostFormProps extends IBaseComponent {
  title?: string;
  content?: string;
  onSubmit?: (data: ICreatePostDTO) => void;
}
