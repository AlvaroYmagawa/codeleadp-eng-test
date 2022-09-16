import { APIResponse } from "shared/interfaces/apis/apis.interfaces";
import { IPost } from "../posts.interfaces";

export type ICreatePostDTO = {
  title: string;
  content: string;
  username: string;
};

export type ICreatePostAPI = APIResponse<IPost>;
