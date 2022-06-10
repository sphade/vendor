import { Modal } from "@mui/material";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TrashModalIcon } from "../../assets/images/icons";
import { toggleDeleteModal } from "../../redux/slices/ModalSlice";
import { RootState } from "../../redux/store";

const DeleteModal: FC = () => {
  const deleteModalState = useSelector(
    (state: RootState) => state.modal.deleteModal
  );
  const dispatch = useDispatch();
  function closeModal() {
    dispatch(toggleDeleteModal());
  }

  return (
    <Modal open={deleteModalState} onClose={closeModal}>
      <div className="absolute top-[35%]     px-[24px] text-center py-5 left-[50%] -translate-x-1/2 bg-white rounded-lg   w-[450px] border-t-4 border-[#FF2A1C] min-h-[310px]">
        <img
          src={TrashModalIcon}
          alt={TrashModalIcon}
          className="absolute -top-[40px] left-[190px]"
        />
        <h1 className="text-2xl font-semibold text-tertiary mt-[24px] mb-[16px]">
          Delete Aircraft?
        </h1>
        <p className="text-gray-500  text-justify ">
          You are trying to delete an aircraft. This action can not be undone.
          Are you sure you want to delete this aircraft?{" "}
          <span className="text-blue-500 underline">Archive Instead</span>
        </p>
        <div className="text-sm flex gap-3 mt-4 text-gray-500 items-center mb-[34px]">
          <input type="checkbox" name="" id="" />
          <p>Don't ask me again</p>
        </div>
        <div className="flex items-center justify-between ">
          <button className="border bg-secondary border-[#828282] text-[#828282] px-2.5 rounded min-w-[189px] min-h-[49px] font-semibold capitalize">
            no,Cancel
          </button>
          <button className=" bg-[#FF2A1C]  text-secondary px-2.5 rounded min-w-[189px] min-h-[49px] font-semibold capitalize">
            yes, Delete aircraft
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default DeleteModal;