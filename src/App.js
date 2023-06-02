import Main from "./layouts/main";
import Search from "./components/search";
import ResultList from "./components/result-list";
import Pagination from "./components/pagination";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getSearchResult} from "./store/actions/searchActions";
import {ModifySearchItems} from "./helpers/modifySearchItems";

const App = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const {items, loading, totalCount } = useSelector((state) => state.search)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSearchResult('react', currentPage))
    }, [])

    if (loading) {
        return <div>waiting</div>
    }

    const modifiedItems = items.map(item => ModifySearchItems(item));

  return (
      <Main>
        <Search />
        <ResultList items={modifiedItems}/>
        <Pagination
            totalCount={totalCount}
            currentPage={currentPage}
            siblingCount={1}
            pageSize={20}
            onPageChange={(page) => setCurrentPage(page)}
        />
      </Main>
  )
}

export default App;
