import React from "react";
import { useTable, useSortBy, Column } from "react-table";

export const Table : React.FC<ITableProps> =  ({
  reportData,
}) => {
  const data = React.useMemo(() => reportData, [reportData]);

  const columns = React.useMemo(() => {
    const keys = Object.keys(reportData[0]);

    return keys.map((key) => ({
      Header: key.charAt(0).toUpperCase() + key.slice(1),
      accessor: key as keyof IReportData,
      Cell: ({ value} : {value: any}) => {
        if (key === "thumbnail") {
          return (
            <img
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            src={value}
            alt="Thumbnail"
          />
          );
        }
        if (key === 'totalEngagementTime') {
          return "YES"
        }
        return value;
      },
    }));

  }, [reportData]);


  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                {...column.getHeaderProps()}
                style={{
                  borderBottom: "solid 3px white",
                  color: "black",
                }}
              >
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ""}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      // border: "solid 1px",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
