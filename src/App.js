import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import Home from "./components/pages/Home/Home";
import Search from "./components/pages/SearchResults/Search";

function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  return (
    <Router>
      <Routes>
            <Route path="/" element={<Home query={query} setQuery={setQuery}/>} />
            <Route path="/search" element={<Search users={users} setUsers={setUsers} query={query}/>} />
          </Routes>

    </Router>
  );
}

export default App;
