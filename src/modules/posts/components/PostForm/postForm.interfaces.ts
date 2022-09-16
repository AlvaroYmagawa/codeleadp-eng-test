import { ICreatePostDTO } from "modules/posts/interfaces/dtos";
import { IBaseComponent } from "shared/interfaces";

export type PostFormData = Omit<ICreatePostDTO, "username">;

export interface PostFormProps extends IBaseComponent {
  defaultValues?: Omit<ICreatePostDTO, "username">;
  onSubmit?: (data: ICreatePostDTO) => void;
  isLoading?: boolean;
}
