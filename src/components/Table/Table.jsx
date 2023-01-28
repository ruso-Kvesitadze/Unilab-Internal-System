import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import React from "react";
import {
  STable,
  SPagination,
  SHeaderContent,
  SPaddingRow,
  SRow,
  SHeadCell,
  SBodyCell,
  SHead,
  SBody,
} from "./Table.styled";
import { useState, useMemo } from "react";
import { SortArrows } from "../SortArrows";

const itemsPerPage = 7;

export const Table = ({ columns, data }) => {
  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 0,
    pageSize: itemsPerPage,
  });

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const table = useReactTable({
    columns,
    data,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      <STable>
        <SHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <SRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <SBodyCell key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : (
                    <SHeaderContent
                      {...{
                        className: header.column.getCanSort()
                          ? "cursor-pointer select-none"
                          : "",
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}

                      {header.column.getCanSort() && (
                        <SortArrows sorting={header.column.getIsSorted()} />
                      )}
                    </SHeaderContent>
                  )}
                </SBodyCell>
              ))}
            </SRow>
          ))}
        </SHead>
        <SBody>
          {table.getRowModel().rows.map((row) => (
            <SRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <SBodyCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </SBodyCell>
              ))}
            </SRow>
          ))}
          {Math.floor(data.length / itemsPerPage) === pageIndex &&
            Array.from(
              { length: itemsPerPage - Math.floor(data.length % itemsPerPage) },
              (_, i) => (
                <SPaddingRow key={"table-padding-" + i}>
                  <SBodyCell>_</SBodyCell>
                </SPaddingRow>
              )
            )}
        </SBody>
      </STable>
      <SPagination
        breakLabel="..."
        pageRangeDisplayed={5}
        pageCount={Math.ceil(data.length / itemsPerPage)}
        nextLabel={<img src="assets/svg/chevronRight.svg" />}
        previousLabel={<img src="assets/svg/chevronLeft.svg" />}
        onPageChange={({ selected }) => table.setPageIndex(selected)}
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
};
