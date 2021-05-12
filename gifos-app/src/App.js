import { useState } from 'react';
import { Header } from './components/header/Header';
import { Search } from './components/search/Search';

import "./index.scss";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`App ${theme==="dark" ? "dark-mode" : ""}`}>
      <Header theme={theme} setTheme={setTheme} />
      <Search theme={theme} />
    </div>
  );
}

export default App;
