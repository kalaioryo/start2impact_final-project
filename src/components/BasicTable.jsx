import React, { useMemo } from "react";

import { useTable } from "react-table";

const BasicTable = ({ dataTable, columnsData }) => {
  const data = useMemo(() => dataTable, []);
  const columns = useMemo(() => columnsData, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="grid grid-cols-12 col-span-10 col-start-2 lg:col-span-6 lg:col-start-4">
      <div className="col-span-12 bg-quaternary/50">
        <table {...getTableProps()} className="w-full">
          <thead className="border bg-ternary/50">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="border border-primary"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="border border-primary">
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="border border-primary p-2"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BasicTable;
