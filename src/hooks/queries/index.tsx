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
export const useOverviewTable = ({search}:any) => {
  return useQuery(["overviewTable", search], () => getOverviewTable({ search }), {
    keepPreviousData:true
  });
};
export const useTransactionTable = ({search}:any) => {
  return useQuery(["transactionTable",search], ()=>getTransaction({search}), { keepPreviousData : true });
  
};
export const useAircraft = ({ isArchived, category }: any) => {
  

  return useQuery(
    ["aircraft", isArchived, category],
    () => getVendorAircraft({ isArchived, category }),
    {
      onError(error: any) {},
    }
  );
};

export const useUser = () => {
  

  return useQuery("user", getUser, {
    onError(error: any) {},
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
