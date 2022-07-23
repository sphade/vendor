export const formatNumberToCurrency = ({
  number,
  currencyCode = "NGN",
  precision = 0,
}: {
  number: string | number;
  currencyCode?: string;
  precision?: number;
}): string => {
  const formatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: precision,
  });

  return formatter.format(Number(number));
};