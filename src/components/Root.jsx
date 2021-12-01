import React from "react";
import { format, parse } from "date-fns";

import { mockData } from "../mockData";
import { useTable } from "../hooks/useTable";

const COLUMN = [
  {
    accessor: "id",
    label: "ID",
  },
  {
    accessor: "name",
    label: "Name",
  },
  {
    accessor: ({ dateOfBirth }) =>
      format(parse(dateOfBirth, "yyyy-MM-dd", new Date()), "do MMMM yyyy"),
    label: "Date Of Birth",
  },
  {
    accessor: "favouriteFood",
    label: "Favourite Food",
  },
];

export const Root = () => {
  const { headers, rows, nextPage, previousPage, pageNumber } = useTable({
    columns: COLUMN,
    data: mockData,
    pagination: { pageSize: 2 },
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map((item, id) => {
              return <th key={id}>{item.label}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.cells.map((cell, index) => (
                <td
                  key={index}
                  className={
                    typeof cell.renderedValue === "number" ? "status" : ""
                  }
                >
                  {cell.renderedValue}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="btn__container">
        <button className="btn__item" onClick={previousPage}>
          {" "}
          &lt;{" "}
        </button>
        Page {pageNumber} of 4{" "}
        <button className="btn__item" onClick={nextPage}>
          {" "}
          &gt;{" "}
        </button>
      </div>
    </div>
  );
};
