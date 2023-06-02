import { useMemo } from 'react';

export const usePagination = ({ totalCount, pageSize, siblingCount = 1, currentPage }) => {
  const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

  return useMemo(() => {
    if (!pageSize) return [];

    const totalPageCount = Math.ceil(totalCount / pageSize);

    return range(1, totalPageCount).splice(currentPage - 1, 8);
  }, [totalCount, pageSize, siblingCount, currentPage]);
};
