import './App.css';

import SearchBar from './components/SearchBar';
import bookList from './components/BookList'

function App() {
  const test = "harry potter";

  return (
    <>
      {/* <SearchBar /> */}
      <bookList searchInput={test}  />
    </>
  );
}

export default App;
