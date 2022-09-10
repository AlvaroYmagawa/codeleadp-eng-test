import { createReducer } from "@reduxjs/toolkit";
import { saveUsernameAction } from "./session.actions";

export const sessionReducer = createReducer(
  {
    username: "",
  },
  (builder) => {
    builder
      .addCase(saveUsernameAction, (state, action) => {
        state.username = action.payload.username;
      })
      .addDefaultCase((state, action) => {});
  }
);
