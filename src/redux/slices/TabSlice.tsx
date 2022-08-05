import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITabSlice {
    airCraftTab: number;
}
const initialState: ITabSlice = {
  airCraftTab: 0,
};

const TabSlice = createSlice({
  name: "tabSlice",
  initialState,
  reducers: {
    setAirCraftTab: (state,{ payload }: PayloadAction<number>) => {
        state.airCraftTab = payload;
    },
  },
});

export const { setAirCraftTab } = TabSlice.actions;

export default TabSlice.reducer;
// export const modalSelector = (state) => state.overview;