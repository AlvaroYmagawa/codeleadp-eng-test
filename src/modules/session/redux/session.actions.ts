import { createAction } from "@reduxjs/toolkit";

export const saveUsernameAction = createAction(
  "@session/saveUsername",
  (username: string) => ({
    payload: { username },
  })
);
