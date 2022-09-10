import { configureStore } from "@reduxjs/toolkit";
import AircraftDetailsSlice from "./slices/AircraftDetailsSlice";
import AuthSlice from "./slices/AuthSlice";
import DropDownSlice from "./slices/DropDownSlice";
import ModalSlice from "./slices/ModalSlice";
import SignUpInfoSlice from "./slices/SignUpInfoSlice";
import TabSlice from "./slices/TabSlice";
export const store = configureStore({
  reducer: {
    modal: ModalSlice,
    dropDown: DropDownSlice,
    auth: AuthSlice,
    signUpInfo: SignUpInfoSlice,
    tab: TabSlice,
    aircraftDetails: AircraftDetailsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
