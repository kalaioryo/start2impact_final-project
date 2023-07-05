import React, {useMemo} from 'react'

import { useTable } from 'react-table'

const BasicTable = ({dataTable}) => {

  // const fakeData = [
  //   {
  //     denominazione_provincia: "Vercelli",
  //     totale_casi: 23000
  //   },
  //   {
  //     denominazione_provincia: "Biella",
  //     totale_casi: 16000
  //   },
  // ]
  

  const data = useMemo(() => dataTable, [])
  const columns = useMemo(() => [
    {
      Header: "Name",
      accessor: "denominazione_provincia"
    },
    {
      Header: "Tot case",
      accessor: "totale_casi"
    },
  ], [])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({columns, data})

  

  return (
    <div className=' mt-14 border border-red-500'>
        <div className='col-span-10 col-start-2'>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row)
                return(
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td{ ...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                )
              })}            
            </tbody>
          </table>
        </div>
      </div>
  )
}

export default BasicTable