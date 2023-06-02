import Main from './layouts/main';
import Search from './components/search';
import ResultList from './components/result-list';
import Pagination from './components/pagination';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchResult } from './store/actions/searchActions';
import { ModifySearchItems } from './helpers/modifySearchItems';
import DisplayError from './components/display-error';
import useDebounce from './hooks/useDebounce';

const hardcodedMessage = 'No repository was found for your request';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState(null);

  const { items, loading, totalCount } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const debouncedValue = useDebounce(searchText, 500);

  useEffect(() => {
    dispatch(getSearchResult({ value: searchText, page: currentPage }));
  }, [debouncedValue, currentPage]);

  const onSearchChange = (e) => {
    const toSearchText = e.target.value.replace(/\s/g, '');

    setSearchText(toSearchText);
  };

  const modifiedItems = items.map((item) => ModifySearchItems(item));

  return (
    <Main>
      <Search value={searchText} onChange={onSearchChange} />
      <>
        {!items.length ? (
          <DisplayError errorMessage={hardcodedMessage} />
        ) : (
          <>
            {!loading ? (
              <>
                <ResultList items={modifiedItems} />
                <Pagination
                  totalCount={totalCount}
                  currentPage={currentPage}
                  siblingCount={1}
                  pageSize={20}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              </>
            ) : (
              <h1>Waiting please</h1>
            )}
          </>
        )}
      </>
    </Main>
  );
};

export default App;
