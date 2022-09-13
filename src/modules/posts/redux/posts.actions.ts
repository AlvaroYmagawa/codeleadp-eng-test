import { createAction } from "@reduxjs/toolkit";
import { IPost } from "../interfaces/posts.interfaces";

export const receivePosts = createAction(
  "@posts/listPostsRequest",
  (posts: IPost[]) => ({
    payload: { posts },
  })
);
