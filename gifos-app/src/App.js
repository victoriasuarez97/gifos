import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Search } from './components/search/Search';

import "./index.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Main />
    </div>
  );
}

export default App;
