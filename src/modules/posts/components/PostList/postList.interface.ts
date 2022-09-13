import { IPost } from "modules/posts/interfaces/posts.interfaces";
import { IBaseComponent } from "shared/interfaces";

export interface PostListProps extends IBaseComponent {
  posts: IPost[];
  isLoading?: boolean;
}
