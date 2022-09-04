import React, { useState} from 'react';
import Results from "../../Results";
import "./Search.css";
import logo from "../../../assets/github.png";
import { SearchOutlined } from '@ant-design/icons';


function SearchResults() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  }
  return (
    <div id="searchPage">
      <header>
        <nav>
          <img src={logo} alt="github logo" id="logo" />
          <h6>GitHub</h6>
          <div id="navSearch">
            <input type="text" name="userName" id="query" 
              onClick={handleClick}
              style={{
                borderColor: isActive ? "#38A6FF" : ''}} />
            <button id="navSearchBTN"><SearchOutlined style={{fontSize:"18px"}} /></button>
          </div>
            <ul>
                <li><a href="/login"> Login</a></li>
                <li><a href="/signup"> Signup</a></li>
            </ul>
        </nav>
    </header>
    <h1>Search Results</h1>
    <div className='pagination'>
      <div>
          <Results />
      </div>
    </div>
    </div>
  )
}

export default SearchResults