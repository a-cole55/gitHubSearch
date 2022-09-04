import React, { useState} from 'react';
import Results from "../../Results";
import "./Search.css";
import logo from "../../../assets/github.png";
import { SearchOutlined } from '@ant-design/icons';
import profImg from "../../../assets/profile9.jpg"


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
              onMouseEnter={handleClick}
              onMouseOut={handleClick}
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
    <h2 id="searchHeader">Search Results</h2>
    <div className='pagination'>
      <div className='results'>
          <Results img={profImg} 
            name="Justin" 
            description="Fullstack Software Developer based in Austin. I enjoy hiking, working out, and learning new skills to add to my coding tool belt" 
            followers={"8"+" followers"}
            repos={"30"+" repositories"}
            location={"Location: "+ "Austin" }/>
      </div>
    </div>
    </div>
  )
}

export default SearchResults