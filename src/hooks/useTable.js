import { useMemo, useState } from "react";

export const useTable = ({ columns, data, pagination }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const headers = useMemo(
    () =>
      columns.map((column) => ({
        label: column.label,
      })),
    [columns]
  );

  const rows = useMemo(
    () =>
      data.map((dataRow) => {
        const cells = columns.map(({ accessor }) => {
          const renderedValue =
            typeof accessor === "function"
              ? accessor(dataRow)
              : dataRow[accessor];

          return { renderedValue };
        });

        return { cells };
      }),
    [columns, data]
  );

  const paginate = (data) => {
    const itemPerPages = 2;
    const pages = Math.ceil(data.length / itemPerPages);

    const paginatedData = Array.from({ length: pages }, (_, index) => {
      const start = index * itemPerPages;
      return data.slice(start, start + itemPerPages);
    });

    return paginatedData;
  };

  const newPaginatedData = pagination ? paginate(rows) : rows;

  const nextPage = () =>
    setPageNumber((pageNumber) => {
      let tempIndex = pageNumber + 1;

      if (pageNumber === newPaginatedData.length - 1) {
        tempIndex = newPaginatedData.length - 1;
      }

      return tempIndex;
    });

  const previousPage = () =>
    //* works perfectly
    setPageNumber((pageNumber) => {
      let tempIndex = pageNumber - 1;

      if (tempIndex < 1) {
        tempIndex = 0;
      }

      return tempIndex;
    });

  return {
    headers,
    rows: newPaginatedData[pageNumber],
    nextPage,
    previousPage,
    pageNumber: pageNumber + 1,
  };
};
