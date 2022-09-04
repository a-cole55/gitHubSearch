import React from 'react';
import Results from "../../Results";
import "./Search.css";
import logo from "../../../assets/github.png";
import { SearchOutlined } from '@ant-design/icons';


function SearchResults() {
  return (
    <div>
      <header>
        <nav>
          <img src={logo} alt="github logo" id="logo" />
          <input type="text" name="userName" id="name" />
          <button><SearchOutlined style={{fontSize:"16px"}} /></button>
            <ul>
                <li><a href="/login"> Login</a></li>
                <li><a href="/signup"> Signup</a></li>
            </ul>
        </nav>
    </header>

        <h1>Search Results</h1>
        <div>
            <Results />
        </div>
    </div>
  )
}

export default SearchResults