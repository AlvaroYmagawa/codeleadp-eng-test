import { createReducer } from "@reduxjs/toolkit";
import { IPost } from "../interfaces/posts.interfaces";
import {
  receivePostsAction,
  createPostAction,
  deletePostAction,
  updatePostAction,
} from "./posts.actions";

type ReducerData = {
  posts: IPost[];
};

const data: ReducerData = {
  posts: [],
};

export const postsReducer = createReducer(data, (builder) => {
  builder
    .addCase(receivePostsAction, (state, action) => {
      const { posts: newPosts } = action.payload;
      state.posts = newPosts;
    })
    .addCase(createPostAction, (state, action) => {
      const { post } = action.payload;
      state.posts = [post, ...state.posts];
    })
    .addCase(updatePostAction, (state, action) => {
      const { post } = action.payload;

      const postIndex = state.posts.findIndex((p) => p.id === post.id);

      if (postIndex !== -1) {
        state.posts[postIndex] = post;
      }
    })
    .addCase(deletePostAction, (state, action) => {
      const { postId } = action.payload;
      state.posts = state.posts.filter((p) => p.id !== postId);
    })
    .addDefaultCase((state, action) => {});
});
