import { APIResponse } from "shared/interfaces/apis/apis.interfaces";
import { IPost } from "../posts.interfaces";

export type IListPostsAPI = APIResponse<{
  results: IPost[];
}>;
