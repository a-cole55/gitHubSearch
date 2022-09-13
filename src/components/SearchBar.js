import React, {useState, useContext} from 'react';
import { Link , useNavigate} from 'react-router-dom';
import SearchContext from "./SearchContext";
import { SearchOutlined } from '@ant-design/icons';


function SearchBar() {
    //Navigate to Search Page
    const navigate = useNavigate();
    const goToSearchPage = () => navigate('/search')
    
  //Query Parameter
  const {query} = useContext(SearchContext);
  const {setQuery} = useContext(SearchContext);

  //Hover Effect for Search Bar
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  }

  const handleQueryInput = (e) => {
    const value = e.target.value;
    setQuery(value);

  }

  //Check for Enter Key Pressed
  function handleKeyDown(e){
    if(e.key === 'Enter') {
      setQuery(e.target.value);
      goToSearchPage();
  }};

  return (
    <div id="search">
        <input id="query" value={query} 
          onChange={handleQueryInput} 
          type="text" 
          placeholder='Search Username'
          onMouseEnter={handleClick}
          onMouseOut={handleClick}
          onKeyDown={handleKeyDown}
          style={{
            borderColor: isActive ? "#38A6FF" : ''}} />
        <Link to="/search">
          <button id="homeSearchBTN">
            <SearchOutlined style={{fontSize:"18px"}} />
          </button>
        </Link>
  </div>
  )
}

export default SearchBar