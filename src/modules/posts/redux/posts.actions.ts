import { createAction } from "@reduxjs/toolkit";
import { IPost } from "../interfaces/posts.interfaces";

export const receivePostsAction = createAction(
  "@posts/listPostsRequest",
  (posts: IPost[]) => ({
    payload: { posts },
  })
);

export const createPostAction = createAction(
  "@posts/createPostsRequest",
  (post: IPost) => ({
    payload: { post },
  })
);

export const updatePostAction = createAction(
  "@posts/updatePostsRequest",
  (post: IPost) => ({
    payload: { post },
  })
);

export const deletePostAction = createAction(
  "@posts/deletePostsRequest",
  (postId: number) => ({
    payload: { postId },
  })
);




