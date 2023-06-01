import Main from "./layouts/main";
import Search from "./components/search";
import ResultList from "./components/result-list";

const App = () => {
  return (
      <Main>
        <Search />
        <ResultList />
        {/*<Pagination />*/}
      </Main>
  )
}

export default App;
