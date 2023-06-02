import {useMemo} from "react";

export const usePagination = ({
    totalCount,
    pageSize,
    minNums = 8,
    currentPage
}) => {

    const range = (start,end) => {
        let length = end - start + 1;
        return Array.from({ length }, (_, idx) => idx+ start)
    }

    return useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize);

        if (minNums >= totalPageCount) {
            return range(1, totalPageCount)
        }

    }, [totalCount, pageSize, minNums, currentPage]);
}