import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./components/pages/Home/Home";
import Search from "./components/pages/SearchResults/Search";

function App() {
  return (
    <Router>
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/search" element={<Search/>} />
          </Routes>

    </Router>
  );
}

export default App;
