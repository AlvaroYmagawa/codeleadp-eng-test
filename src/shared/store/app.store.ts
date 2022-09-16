import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "modules/posts/redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { sessionReducer } from "modules/session/redux/session.reducer";

const reducers = combineReducers({
  session: sessionReducer,
  posts: postsReducer,
});

const persistConfig = {
  key: "codeleap-network",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
