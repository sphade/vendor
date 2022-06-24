import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISignUpInfoSlice {
  signUpInfo: {} | any;
}
const initialState: ISignUpInfoSlice = {
  signUpInfo: {},
};

const SignUpInfoSlice = createSlice({
  name: "signUpInfoSlice",
  initialState,
  reducers: {
    setSignUpInfo: (state,{ payload }: PayloadAction<{}>) => {
        state.signUpInfo = payload;
    },
  },
});

export const { setSignUpInfo } = SignUpInfoSlice.actions;

export default SignUpInfoSlice.reducer;
// export const modalSelector = (state) => state.overview;
