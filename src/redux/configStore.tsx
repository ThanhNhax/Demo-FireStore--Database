import { configureStore } from "@reduxjs/toolkit";
import todoReduxer from "./todos/todoReduxer";
// ...

export const store = configureStore({
  reducer: {
    todos: todoReduxer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
