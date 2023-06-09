import Main from './layouts/main';
import Search from './components/search';
import ResultList from './components/result-list';
import Pagination from './components/pagination';
import { useEffect, useState } from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import { getSearchResult } from './store/actions/searchActions';
import { ModifySearchItems } from './helpers/modifySearchItems';
import DisplayError from './components/display-error';
import useDebounce from './hooks/useDebounce';

const hardcodedMessage = 'No repository was found for your request';

const getSearch = state => state.search;

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState(null);

  const searchSelector = useSelector(getSearch, shallowEqual);

  const dispatch = useDispatch();
  const debouncedValue = useDebounce(searchText, 500);

  useEffect(() => {
    dispatch(getSearchResult({ value: searchText, page: 1 }));
  }, [debouncedValue]);

  useEffect(() => {
    dispatch(getSearchResult({ value: searchText, page: currentPage }));
  }, [currentPage]);

  const onSearchChange = (e) => {
    const toSearchText = e.target.value.replace(/\s/g, '');

    setSearchText(toSearchText);
  };

  const modifiedItems = searchSelector.items.map((item) => ModifySearchItems(item));

  return (
    <Main>
      <Search value={searchText} onChange={onSearchChange} />
      <>
        {!searchSelector.items.length ? (
          <DisplayError errorMessage={hardcodedMessage} />
        ) : (
          <>
            {!searchSelector.loading ? (
              <>
                <ResultList items={modifiedItems} />
                <Pagination
                  totalCount={searchSelector.totalCount}
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
