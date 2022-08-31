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
import { useEffect } from "react";
import { useArchiveAircraft } from "../../hooks/mutations";
import { useSnackbar } from "notistack";
import localforage from "localforage";

const AircraftCardDropDown = ({
  dropDownState,
  setDropDownState,
  aircraft,
}: {
  dropDownState: any;
  setDropDownState: any;
  aircraft: any;
}) => {
  const handleClose = () => {
    setDropDownState(null);
  };
  const dispatch = useDispatch();

  const open = Boolean(dropDownState);
  const id = open ? "simple-popover" : undefined;
  const { enqueueSnackbar } = useSnackbar();
  const archive = useArchiveAircraft(aircraft?.id);
 
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
      <ul className="rounded-lg bg-white  w-[180px]      border divide-y flex flex-col">
        <li>
          <Link
            to={`/aircraft/edit/${aircraft.id}`}
            className={classNames(
              "py-3 capitalize flex items-center justify-between text-sm  font-semibold px-4 text-gray-700 cursor-pointer default-transition hover:bg-gray-100 "
            )}
          >
            <span className="flex items-center gap-2">
              <EditIcon />
              edit
            </span>
            <ArrowRightSmallIcon />
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
              <FolderIcon />
              {aircraft?.isArchived
                ? "unArchive"
                : !aircraft?.isArchived
                ? "archive"
                : ""}
            </span>

            <ArrowRightSmallIcon />
          </>
        </li>

        <li
          className={classNames(
            "py-3 capitalize flex items-center justify-between  text-sm font-semibold px-4 text-red-500 cursor-pointer default-transition hover:bg-gray-100 "
          )}
          onClick={() => {
            dispatch(toggleDeleteModal());
            localforage.setItem("selectedAircraftDetails", aircraft);
            handleClose();
          }}
        >
          <span className="flex items-center gap-2">
            <TrashIcon />
            delete
          </span>
        </li>
      </ul>
    </Popover>
  );
};

export default AircraftCardDropDown;
