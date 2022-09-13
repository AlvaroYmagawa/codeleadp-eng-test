import { createReducer } from "@reduxjs/toolkit";
import { saveUsernameAction } from "./session.actions";

const data = {
  username: "",
};

export const sessionReducer = createReducer(data, (builder) => {
  builder
    .addCase(saveUsernameAction, (state, action) => {
      state.username = action.payload.username;
    })
    .addDefaultCase((state, action) => {});
});
