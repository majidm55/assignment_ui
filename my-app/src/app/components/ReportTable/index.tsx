import React from "react";
import { useTable, useSortBy } from "react-table";
import { formatTime } from '../../utils/formatTime';
import SortDownIcon from '../../assets/svgs/SortDownIcon.svg';
import SortUpIcon from '../../assets/svgs/SortUpIcon.svg';
import SortIcon from '../../assets/svgs/SortIcon.svg';

export const Table : React.FC<ITableProps> =  ({
  reportData,
}) => {
  const data = React.useMemo(() => reportData, [reportData]);

  const renderIcon = (isSorted: boolean, sortedDesc: boolean) => {
    let src;
    if (!isSorted ) {
      src = SortIcon;
    }

    isSorted && sortedDesc ? src = SortDownIcon : src = SortUpIcon;

    return (
      <img
        src={src}
        height= {20}
        width={20}
        alt="sort icon"
      />
    )
  }

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
          return formatTime(value);
        }
        return value;
      },
    }));

  }, [reportData]);


  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <>
      <div className="my-30 mt-2 flex flex-col max-w-max ">
          <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-200">
                    {headerGroups.map((headerGroup) => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column: any) => (
                          <th
                            {...column.getHeaderProps(column.getSortByToggleProps())}
                            // {...column.getHeaderProps()}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            {column.render("Header")}
                            {console.log("COLUMN", column.id === 'title' ? column : "bleurgh")}
                            {(column.id === 'totalEngagementTime' || column.id === 'title') && (
                              <span>
                                {renderIcon(column.isSorted, column.isSortedDesc)}
                              </span>

                            )}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>

                  <tbody
                    className="bg-white divide-y divide-gray-200"
                    {...getTableBodyProps()}
                  >
                    {rows.map((row) => {
                      prepareRow(row);
                      return (
                        <tr
                          className="font-roboto"
                        {...row.getRowProps()}>
                          {row.cells.map((cell) => {
                            return (
                              <td
                                className="px-6 py-4 whitespace-nowrap break-all max-w-md overflow-auto	"
                                {...cell.getCellProps()}
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
              </div>
            </div>
          </div>
      </div>
    </>
  );
};
