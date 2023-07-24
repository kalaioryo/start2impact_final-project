import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { useTable } from "react-table";

const BasicTable = ({ dataTable, columnsData }) => {
  const data = useMemo(() => dataTable, []);
  const columns = useMemo(() => columnsData, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="grid grid-cols-12 col-span-10 col-start-2 md:col-span-9 md:col-start-3 lg:col-span-6 lg:col-start-4">
      <div className="col-span-12 bg-quaternary/50 dark:bg-dark-primary/50 dark:text-dark-quaternary">
        <table {...getTableProps()} className="w-full">
          <thead className="border bg-ternary/50 dark:bg-dark-secondary/70">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="border border-primary dark:border-dark-ternary/30"
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
                      className="border border-primary dark:border-dark-ternary/30 p-2"
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

BasicTable.propTypes = {
  columnsData: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
    })
  ),
  dataTable: PropTypes.arrayOf(
    PropTypes.shape({
      denominazione_provincia: PropTypes.string.isRequired,
      totale_casi: PropTypes.string.isRequired,
    })
  ),
};

export default BasicTable;
