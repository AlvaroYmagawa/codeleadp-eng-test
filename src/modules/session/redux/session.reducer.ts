import { createReducer } from "@reduxjs/toolkit";
import { logoutAction, saveUsernameAction } from "./session.actions";

const data = {
  username: "",
};

export const sessionReducer = createReducer(data, (builder) => {
  builder
    .addCase(saveUsernameAction, (state, action) => {
      state.username = action.payload.username;
    })
    .addCase(logoutAction, (state) => {
      state.username = '';
    })
    .addDefaultCase((state, action) => {});
});
