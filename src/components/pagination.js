import {usePagination} from "../hooks/usePagination";
import styles from '../styles/pagination.module.css';

const Pagination = ({onPageChange, totalCount, siblingCount, currentPage, pageSize}) => {
    const paginationRange = usePagination({currentPage, pageSize, siblingCount, totalCount})

    if (currentPage === 0 || paginationRange.length < 2) {
        return  null
    }

    const isFirstPage = currentPage === 1
    const isLastPage = currentPage === paginationRange.length

    const onNextClick = () => {
        if (!isLastPage) {
            onPageChange(currentPage + 1)
        }
    }

    const onPrevClick = () => {
        if (!isFirstPage) {
            onPageChange(currentPage - 1)
        }
    }

    return (
        <ul className={styles.paginationContainer}>
           <li onClick={onPrevClick} className={`${isFirstPage ? styles.paginationDisable : ''} ${styles.paginationCursor}`}>
               Previous
           </li>
            {
                paginationRange.map(pageNum => (
                    <li onClick={() => onPageChange(pageNum)} className={styles.paginationItem} key={pageNum}>
                        {pageNum}
                    </li>
                ))
            }
            <li onClick={onNextClick} className={`${isLastPage ? styles.paginationDisable : ''} ${styles.paginationCursor}`}>
                Next
            </li>
        </ul>
    )
}

export default Pagination