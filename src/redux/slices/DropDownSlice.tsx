import { createSlice } from "@reduxjs/toolkit";

interface IDropDownSlice {
    headerDropDown: boolean;
}
const initialState: IDropDownSlice = {
  headerDropDown: false,
};

const DropDownSlice = createSlice({
  name: "dropDownSlice",
  initialState,
  reducers: {
    toggleHeaderDropDown: ({headerDropDown}) => {
        headerDropDown = !headerDropDown;
    },
  },
});

export const { toggleHeaderDropDown } = DropDownSlice.actions;

export default DropDownSlice.reducer;
// export const modalSelector = (state) => state.overview;
