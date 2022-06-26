import { Popover } from "@mui/material";
import { Link } from "react-router-dom";
import classNames from "classnames";
import {
  ArrowRightSmallIcon,
  EditIcon,
  FolderIcon,
  TrashIcon,
} from "../../assets/images/icons";
import { useDispatch } from "react-redux";
import { toggleDeleteModal } from "../../redux/slices/ModalSlice";
import { useEffect, useState } from "react";
import localforage from "localforage";
import { useArchiveAircraft } from "../../hooks/mutations";
import { useSnackbar } from "notistack";

const AircraftCardDropDown = ({
  dropDownState,
  setDropDownState,
}: {
  dropDownState: any;
  setDropDownState: any;
}) => {
  const handleClose = () => {
    setDropDownState(null);
  };
  const dispatch = useDispatch();

  const open = Boolean(dropDownState);
  const id = open ? "simple-popover" : undefined;
  const [aircraft, setAircraft] = useState<any>("");
  const { enqueueSnackbar } = useSnackbar();
  const archive = useArchiveAircraft(aircraft?.id);
  useEffect(() => {
    localforage.getItem("selectedAircraft", (error, value) => {
      setAircraft(value);
    });
  });
  useEffect(() => {
    if (archive.isSuccess) {
      enqueueSnackbar(
        `Aircraft ${
          aircraft?.isArchived ? "unArchived" : "archived"
        }  successfully`,
        {
          variant: "success",
        }
      );
    }
  }, [aircraft?.isArchived, archive.isSuccess, enqueueSnackbar]);

  return (
    <Popover
      open={open}
      id={id}
      anchorEl={dropDownState}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      PaperProps={{ className: "!rounded-lg" }}
    >
      <ul className="rounded-lg bg-white  w-[180px] font-hindBold   border divide-y flex flex-col">
        <li>
          <Link
            to="edit"
            className={classNames(
              "py-3 capitalize flex items-center justify-between text-sm  font-semibold px-4 text-gray-700 cursor-pointer default-transition hover:bg-gray-100 "
            )}
          >
            <span className="flex items-center gap-2">
              <img src={EditIcon} alt="icon" />
              edit
            </span>
            <img src={ArrowRightSmallIcon} alt="icon" />
          </Link>
        </li>
        <li
          onClick={() => {
            archive.mutate();
            handleClose();
          }}
          className={classNames(
            "py-3 capitalize flex items-center justify-between text-sm font-semibold px-4 text-gray-700 cursor-pointer default-transition hover:bg-gray-100 "
          )}
        >
          <>
            <span className="flex items-center gap-2">
              <img src={FolderIcon} alt="icon" />
              {aircraft?.isArchived
                ? "unArchive"
                : !aircraft?.isArchived
                ? "archive"
                : ""}
            </span>

            <img src={ArrowRightSmallIcon} alt="icon" />
          </>
        </li>

        <li
          className={classNames(
            "py-3 capitalize flex items-center justify-between  text-sm font-semibold px-4 text-red-500 cursor-pointer default-transition hover:bg-gray-100 "
          )}
          onClick={() => {
            dispatch(toggleDeleteModal());
            handleClose();
          }}
        >
          <span className="flex items-center gap-2">
            <img src={TrashIcon} alt="icon" />
            delete
          </span>
        </li>
      </ul>
    </Popover>
  );
};

export default AircraftCardDropDown;
