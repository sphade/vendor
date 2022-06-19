import { TableCell } from "@mui/material";

export const HeadCell = ({ children }: { children: string }) => {
  return (
    <TableCell
      scope="row"
      padding="none"
      component="th"
      className="!text-gray-500 !capitalize "
    >
      {children}
    </TableCell>
  );
};
export const BodyCell = ({ children }: { children: any }) => {
  return (
    <TableCell
      scope="row"
      padding="none"
      component="th"
      className="!capitalize !text-[#1E1E1E]"
    >
      {children}
    </TableCell>
  );
};
