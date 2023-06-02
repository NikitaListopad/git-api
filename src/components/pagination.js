import {usePagination} from "../hooks/usePagination";

const Pagination = ({onPageChange, totalCount, minNums, currentPage, pageSize, className}) => {
    const paginationRange = usePagination({currentPage, pageSize, minNums, totalCount})

    if (currentPage === 0 || paginationRange.length < 2) {
        return  null
    }

    const onNextClick = () => {
        onPageChange(currentPage + 1)
    }

    const onPrevClick = () => {
        onPageChange(currentPage - 1)
    }

    return (
        <ul>
           <li onClick={onPrevClick}>
               Previous
           </li>
            {
                paginationRange.map(pageNum => (
                    <li onClick={() => onPageChange(pageNum)}>
                        {pageNum}
                    </li>
                ))
            }
            <li onClick={onNextClick}>
                Next
            </li>
        </ul>
    )
}

export default Pagination