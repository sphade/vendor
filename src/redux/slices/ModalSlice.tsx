import { createSlice } from "@reduxjs/toolkit";

interface IModalSlice {
  deleteModal: boolean;
}
const initialState: IModalSlice = {
  deleteModal: false,
};

const ModalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    toggleDeleteModal: (state) => {
      state.deleteModal = !state.deleteModal;
    },
  },
});

export const { toggleDeleteModal } = ModalSlice.actions;

export default ModalSlice.reducer;
// export const modalSelector = (state) => state.overview;
