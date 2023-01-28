import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

export const columns = [
  columnHelper.accessor("full_name", {
    header: "სტუდენტის სახელი და გვარი",
    enableSorting: false,
    filterFn: "fuzzy",
    cell: (data) => data.getValue(),
  }),
  columnHelper.accessor("status", {
    header: "სტატუსი",
    enableSorting: false,
    cell: (data) => data.getValue(),
  }),
  columnHelper.accessor("points", {
    header: "ქულები",
    enableSorting: true,
    cell: (data) => data.getValue(),
  }),
  columnHelper.accessor("gender", {
    header: "სქესი",
    enableSorting: false,
    cell: (data) => data.getValue(),
  }),
  columnHelper.accessor("personal_id", {
    header: "პირადი ნომერი",
    enableSorting: false,
    cell: (data) => data.getValue(),
  }),
  columnHelper.accessor("email", {
    header: "უნილაბის მეილი",
    enableSorting: false,
    cell: (data) => data.getValue(),
  }),
  columnHelper.accessor("number", {
    header: "მობილურის ნომერი",
    enableSorting: false,
    cell: (data) => data.getValue(),
  }),
  columnHelper.accessor("address", {
    header: "მისამართი",
    enableSorting: false,
    cell: (data) => data.getValue(),
  }),
];
