import { createReducer } from "@reduxjs/toolkit";
import { IPost } from "../interfaces/posts.interfaces";
import { receivePosts } from "./posts.actions";

type ReducerData = {
  posts: IPost[];
};

const data: ReducerData = {
  posts: [],
};

export const postsReducer = createReducer(data, (builder) => {
  builder
    .addCase(receivePosts, (state, action) => {
      const { posts: newPosts } = action.payload;
      state.posts = newPosts;
    })
    .addDefaultCase((state, action) => {});
});
