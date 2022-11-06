import { useQuery } from "react-query";
import {
  getAircraftDetails,
  getAirCraftType,
  getAirport,
  getOverview,
  getOverviewTable,
  getPhoneNumber,
  getTransaction,
  getUser,
  getVendorAircraft,
  getVendorOrder,
} from "../../services/api";
import localforage from "localforage";
import { useSnackbar } from "notistack";

export const useOverview = () => {
  const { enqueueSnackbar } = useSnackbar();

  const {
    data: overviewData,
    isLoading: overviewLoading,
    isError: overviewError,
  } = useQuery("overview", getOverview, {
    onError(error: any) {
      enqueueSnackbar(error.response?.data?.error || error.message, {
        variant: "error",
      });
    },
  });
  return {
    overviewData,
    overviewLoading,
    overviewError,
  };
};
export const useOverviewTable = ({ search }: any) => {
  return useQuery(
    ["overviewTable", search],
    () => getOverviewTable({ search }),
    {
      keepPreviousData: true,
    }
  );
};
export const useTransactionTable = ({ search,page }: any) => {
  return useQuery(
    ["transactionTable", search,page],
    () => getTransaction({ search,page }),
    { keepPreviousData: true }
  );
};
export const useAircraft = ({ isArchived, category, search }: any) => {
  return useQuery(
    ["aircraft", isArchived, category, search],
    () => getVendorAircraft({ isArchived, category, search }),
    {
      keepPreviousData: true,
      onError(error: any) {},
    }
  );
};

export const useUser = () => {
  return useQuery("user", getUser, {
    onError(error: any) {
      if (error?.response?.status=== 401) {
        localforage.clear()
      }
    },
  });
};
export const useOrder = (status: any) => {
  const { enqueueSnackbar } = useSnackbar();

  return useQuery(["order", status], () => getVendorOrder(status), {
    onError(error: any) {
      enqueueSnackbar(error.response?.data?.error || error.message, {
        variant: "error",
      });
    },
  });
};
export const useAirport = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useQuery("airport", getAirport, {
    onError(error: any) {
      enqueueSnackbar(error.response?.data?.error || error.message, {
        variant: "error",
      });
    },
  });
};
export const useAirCraftDetails = ({id}:any) => {
  const { enqueueSnackbar } = useSnackbar();

  return useQuery(["aircraftDetails",id], ()=> getAircraftDetails({id}), {
    onError(error: any) {
      enqueueSnackbar(error.response?.data?.error || error.message, {
        variant: "error",
      });
    },
  });
};
export const useAirCraftType = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useQuery("aircraftType", getAirCraftType, {
    onError(error: any) {
      enqueueSnackbar(error.response?.data?.error || error.message, {
        variant: "error",
      });
    },
  });
};
export const usePhoneNumber = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useQuery("phoneNumber", getPhoneNumber, {
    onError(error: any) {
      enqueueSnackbar(error.response?.data?.error || error.message, {
        variant: "error",
      });
    },
  });
};
