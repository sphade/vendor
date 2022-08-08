import { Modal } from "@mui/material";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TrashModalIcon } from "../../assets/images/icons";
import { toggleDeleteArchiveModal } from "../../redux/slices/ModalSlice";
import { RootState } from "../../redux/store";

const DeleteArchiveModal: FC = () => {
  const deleteArchiveModalState = useSelector(
    (state: RootState) => state.modal.deleteArchiveModal
  );
  const dispatch = useDispatch();
  function closeModal() {
    dispatch(toggleDeleteArchiveModal());
  }

  return (
    <Modal open={deleteArchiveModalState} onClose={closeModal}>
      <div className="absolute top-[35%]     px-[24px] text-center py-5 left-[50%] -translate-x-1/2 bg-white rounded-lg   w-[450px] border-t-4 border-[#FF2A1C] min-h-[310px]">
        <TrashModalIcon
          className="absolute -top-[40px] left-[190px]"
        />
        <h1 className="text-2xl font-semibold text-tertiary mt-[24px] mb-[36px]">
          Delete aircraft's?
        </h1>
        <p className="text-gray-500  text-justify ">
          You are trying to delete one or more archived aircraft. This action
          can not be undone. Are you sure you want to delete this aircraft('s')?{" "}
        </p>

        <div className="flex items-center mt-12 justify-between ">
          <button
            onClick={closeModal}
            className="border bg-secondary border-[#828282] text-[#828282] px-2.5 rounded min-w-[189px] min-h-[49px] font-semibold capitalize"
          >
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
export default DeleteArchiveModal;
