import { IBaseComponent } from "shared/interfaces";

export interface PostProps extends IBaseComponent {
  username: string;
  createdAt: string;
  content: string;
  title: string;
}
