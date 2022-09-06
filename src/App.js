import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./components/pages/Home/Home";
import Search from "./components/pages/SearchResults/Search";
import { SearchProvider } from "./components/SearchContext";

function App() {

  return (
    <Router>
        <SearchProvider>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
        </Routes>
        </SearchProvider>

    </Router>
  );
}

export default App;
