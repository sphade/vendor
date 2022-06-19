import { createSlice } from "@reduxjs/toolkit";

interface IModalSlice {
  deleteModal: boolean;
  deleteArchiveModal: boolean;
}
const initialState: IModalSlice = {
  deleteModal: false,
  deleteArchiveModal: false,
};

const ModalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    toggleDeleteModal: (state) => {
      state.deleteModal = !state.deleteModal;
    },
    toggleDeleteArchiveModal: (state) => {
      state.deleteArchiveModal = !state.deleteArchiveModal;
    },
  },
});

export const { toggleDeleteModal, toggleDeleteArchiveModal } =
  ModalSlice.actions;

export default ModalSlice.reducer;
// export const modalSelector = (state) => state.overview;
