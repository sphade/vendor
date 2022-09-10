import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAircraftDetailsSlice {
  aircraftDetails: {} | any;
}
const initialState: IAircraftDetailsSlice = {
  aircraftDetails: {},
};

const AircraftDetailsSlice = createSlice({
  name: "AircraftDetailsSlice",
  initialState,
  reducers: {
    setAircraftDetails: (state, { payload }: PayloadAction<{}>) => {
      state.aircraftDetails = payload;
    },
  },
});

export const { setAircraftDetails } = AircraftDetailsSlice.actions;

export default AircraftDetailsSlice.reducer;
// export const modalSelector = (state) => state.overview;
