import { Modal } from "@mui/material";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TrashModalIcon } from "../../assets/images/icons";
import { useDeleteAircraft } from "../../hooks/mutations";
import { toggleDeleteModal } from "../../redux/slices/ModalSlice";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import localforage from "localforage";
import { useArchiveAircraft } from "../../hooks/mutations";
import { CircularProgress } from "@mui/material";
import { useSnackbar } from "notistack";
const DeleteModal: FC = () => {
  const deleteModalState = useSelector(
    (state: RootState) => state.modal.deleteModal
    );
    const dispatch = useDispatch();
    function closeModal() {
      dispatch(toggleDeleteModal());
    }
    const deleteAircraft = useDeleteAircraft()
  const [details, setDetails] = useState<any>();
  const archive = useArchiveAircraft(details?.id);
  const [loading, setLoading] = useState<boolean>( true);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    localforage.getItem("selectedAircraftDetails", (err, val) => {
      setDetails(val);
       setLoading(false);
     
    });
  }, []);
  useEffect(() => {
    if (archive.isSuccess) {
      enqueueSnackbar(
        `Aircraft archived
         successfully`,
        {
          variant: "success",
        }
      );
    }
  }, [archive.isSuccess, enqueueSnackbar]);
  return (
    <Modal open={deleteModalState} onClose={closeModal}>
      <div className="absolute top-[35%]        px-[24px] text-center py-5 left-[50%] -translate-x-1/2 bg-white rounded-lg   w-[450px] border-t-4 border-[#FF2A1C] min-h-[310px]">
        <img
          src={TrashModalIcon}
          alt={TrashModalIcon}
          className="absolute -top-[40px] left-[190px]"
        />
        <h1 className="text-2xl    font-semibold text-tertiary mt-[24px] mb-[36px]">
          Delete Aircraft?
        </h1>
        <p className="text-gray-500  text-justify ">
          You are trying to delete an aircraft. This action can not be undone.
          Are you sure you want to delete this aircraft?{" "}
          <span className="text-blue-500 underline cursor-pointer" onClick={() => {
            archive.mutate()
            closeModal()
          }}>Archive Instead</span>
        </p>

        <div className="flex items-center mt-12 justify-between ">
          <button
            onClick={closeModal}
            className="border bg-secondary border-[#828282] text-[#828282] px-2.5 rounded min-w-[189px] min-h-[49px] font-semibold capitalize"
          >
            no,Cancel
          </button>
          <button  onClick={()=>{
            deleteAircraft.mutate({id:details?.id})
          }
        }className=" bg-[#FF2A1C]
         
          text-secondary px-2.5 rounded min-w-[189px] min-h-[49px] font-semibold capitalize">
             {deleteAircraft.isLoading ? (
            <CircularProgress
              size={22}
              sx={{
                color: "white",
              }}
            />
          ) : (
   '       yes, Delete aircraft'
          )}
            
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default DeleteModal;
