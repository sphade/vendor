import { configureStore } from "@reduxjs/toolkit";
import DropDownSlice from "./slices/DropDownSlice";
import ModalSlice from "./slices/ModalSlice";
export const store = configureStore({
  reducer: {
    modal: ModalSlice,
    dropDown: DropDownSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
