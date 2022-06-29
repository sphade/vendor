import { useQuery } from "react-query";
import {
  getOverview,
  getOverviewTable,
  getTransaction,
  getUser,
  getVendorAircraft,
  getVendorOrder,
} from "../../services/api";
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
export const useOverviewTable = () => {
  return useQuery("overviewTable", getOverviewTable);
};
export const useTransactionTable = () => {
  return useQuery("transactionTable", getTransaction);
};
export const useAircraft = ({ isArchived, category }: any) => {
  const { enqueueSnackbar } = useSnackbar();

  return useQuery(
    ["aircraft", isArchived, category],
    () => getVendorAircraft({ isArchived, category }),
    {
      onError(error: any) {
        enqueueSnackbar(error.response?.data?.error || error.message, {
          variant: "error",
        });
      },
    }
  );
};
export const useAircraftIsArchive = ({ isArchived, category }: any) => {
  const { enqueueSnackbar } = useSnackbar();

  return useQuery(
    ["aircraftArchive", isArchived, category],
    () => getVendorAircraft({ isArchived, category }),
    {
      onError(error: any) {
        enqueueSnackbar(error.response?.data?.error || error.message, {
          variant: "error",
        });
      },
    }
  );
};
export const useUser = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useQuery("user", getUser, {
    onError(error: any) {
      enqueueSnackbar(error.response?.data?.error || error.message, {
        variant: "error",
      });
    },
  });
};
export const useOrder = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useQuery("order", getVendorOrder, {
    onError(error: any) {
      enqueueSnackbar(error.response?.data?.error || error.message, {
        variant: "error",
      });
    },
  });
};
