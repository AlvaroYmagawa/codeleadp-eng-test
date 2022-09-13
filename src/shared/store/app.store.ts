import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "modules/posts/redux";
import { sessionReducer } from "modules/session/redux/session.reducer";

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    posts: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
