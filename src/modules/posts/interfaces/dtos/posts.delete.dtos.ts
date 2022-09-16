import { APIResponse } from "shared/interfaces/apis/apis.interfaces";

export type IDeletePostDTO = {
  id: number;
};

export type IDeletePostAPI = APIResponse<void>;
