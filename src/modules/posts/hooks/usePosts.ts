import { useCallback } from "react";
import { useApiStatus, useAppDispatch, useAppSelector } from "shared/hooks";
import { listPosts } from "../apis/posts.apis";
import { receivePosts } from "../redux";

export const usePosts = () => {
  const dispatch = useAppDispatch();
  const { apiStatus, changeApiStatus } = useApiStatus();
  const { posts } = useAppSelector((state) => state.posts);

  const loadPosts = useCallback(async () => {
    try {
      changeApiStatus("pending");
      const response = await listPosts();
      dispatch(receivePosts(response.data.results));
      changeApiStatus("success");
    } catch (error) {
      changeApiStatus("error");
    }
  }, [changeApiStatus, dispatch]);

  return { loadPosts, posts, apiStatus };
};
