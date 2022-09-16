import { useCallback } from "react";
import { useApiStatus, useAppDispatch, useAppSelector } from "shared/hooks";
import {
  listPostsAPI,
  createPostAPI,
  deletePostAPI,
  updatePostAPI,
} from "../apis/posts.apis";
import {
  ICreatePostDTO,
  IDeletePostDTO,
  IUpdatePostDTO,
} from "../interfaces/dtos";
import {
  receivePostsAction,
  createPostAction,
  deletePostAction,
  updatePostAction,
} from "../redux";

export const usePosts = () => {
  const dispatch = useAppDispatch();
  const { apiStatus, changeApiStatus } = useApiStatus();
  const { posts } = useAppSelector((state) => state.posts);

  const loadPosts = useCallback(async () => {
    try {
      changeApiStatus("pending");
      const response = await listPostsAPI();
      dispatch(receivePostsAction(response.data.results));
      changeApiStatus("success");
    } catch (error) {
      changeApiStatus("error");
    }
  }, [changeApiStatus, dispatch]);

  const createPost = useCallback(
    async (data: ICreatePostDTO) => {
      try {
        changeApiStatus("creating");
        const response = await createPostAPI(data);
        dispatch(createPostAction(response.data));
        changeApiStatus("success");
      } catch (error) {
        changeApiStatus("error");
      }
    },
    [changeApiStatus, dispatch]
  );

  const updatePost = useCallback(
    async (data: IUpdatePostDTO) => {
      try {
        changeApiStatus("updating");
        const response = await updatePostAPI(data);
        dispatch(updatePostAction(response.data));
        changeApiStatus("success");
      } catch (error) {
        changeApiStatus("error");
      }
    },
    [changeApiStatus, dispatch]
  );

  const deletePost = useCallback(
    async (data: IDeletePostDTO) => {
      try {
        changeApiStatus("deleting");
        await deletePostAPI(data);
        dispatch(deletePostAction(data.id));
        changeApiStatus("success");
      } catch (error) {
        changeApiStatus("error");
      }
    },
    [changeApiStatus, dispatch]
  );

  return { loadPosts, createPost, updatePost, deletePost, posts, apiStatus };
};
