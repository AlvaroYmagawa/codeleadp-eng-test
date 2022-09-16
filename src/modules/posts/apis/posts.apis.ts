import { api } from "shared/services/api";
import {
  ICreatePostAPI,
  ICreatePostDTO,
  IDeletePostAPI,
  IDeletePostDTO,
  IListPostsAPI,
  IUpdatePostAPI,
  IUpdatePostDTO,
} from "../interfaces/dtos";

export const listPostsAPI = (): IListPostsAPI => api.get("/careers/");

export const createPostAPI = ({ content, title, username }: ICreatePostDTO): ICreatePostAPI=>
  api.post("/careers/", { content, title, username });

export const updatePostAPI = ({ content, id, title }: IUpdatePostDTO): IUpdatePostAPI =>
  api.patch(`/careers/${id}/`, { content, title });

export const deletePostAPI = ({ id }: IDeletePostDTO): IDeletePostAPI =>
  api.delete(`/careers/${id}/`);
