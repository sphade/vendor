import { useQuery } from "react-query";
import { getOverview, getOverviewTable, getVendorAircraft } from "../../services/api";
export const useOverview = () => {
  const {
    data: overviewData,
    isLoading: overviewLoading,
    isError: overviewError,
  } = useQuery("overview", getOverview);
  return {
    overviewData,
    overviewLoading,
    overviewError,
  };
};
export const useOverviewTable = () => {
  return useQuery("overviewTable", getOverviewTable);
};
export const useAircraft = () => {
  return useQuery("overviewTable", getVendorAircraft);
};
