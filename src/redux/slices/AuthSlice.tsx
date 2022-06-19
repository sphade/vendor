import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {};

const AuthSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setAuth: (state, { payload }: PayloadAction<{}>) => {
      state = payload;
    },
  },
});

export const { setAuth } = AuthSlice.actions;

export default AuthSlice.reducer;
