import { APIResponse } from "shared/interfaces/apis/apis.interfaces";
import { IPost } from "../posts.interfaces";

export type IUpdatePostDTO = {
  id: number;
  title: string;
  content: string;
};

export type IUpdatePostAPI = APIResponse<IPost>;
