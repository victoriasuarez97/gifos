import { Header } from './components/header/Header';
import { Search } from './components/search/Search';
import { Footer } from "./components/footer/Footer";
import { ThemeContextProvider } from "./contexts/ThemeContext";

import "./index.scss";

function App() {
  return (
    <ThemeContextProvider>
      <Header />
      <Search />
      <Footer />
    </ThemeContextProvider>
  );
}

export default App;
