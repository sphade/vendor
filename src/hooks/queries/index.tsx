import { useQuery } from "react-query";
import {
  getOverview,
  getOverviewTable,
  getTransaction,
  getVendorAircraft,
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
export const useAircraft = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useQuery("aircraft", getVendorAircraft, {
    onError(error: any) {
      enqueueSnackbar(error.response?.data?.error || error.message, {
        variant: "error",
      });
    },
  });
};
