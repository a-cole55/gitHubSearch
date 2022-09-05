import React, { useState} from 'react';
import { Link } from "react-router-dom";
import Results from "../../Results";
import "./Search.css";
import logo from "../../../assets/github.png";
import { SearchOutlined } from '@ant-design/icons';



function SearchResults(props) {
  let users = props.users;

  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  }
  return (
    <div id="searchPage">
      <header>
        <nav>
        <Link to="/">
          <div id="homeLogo">
              <img src={logo} alt="github logo" id="logo" />
              <h6>GitHub</h6>
          </div>
        </Link>
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
      <span>Total Results </span>
      <div className='totalResults'>
        {users.length > 0 ? users.map((user) =>{
          return (
            <div className='results'>
            <Results 
            img={user.avatar_url} 
            name={user.login}
            description={user.url.bio}
            followers={user.url.followers}
            repos={user.url.public_repos}
            location={user.url.location}
            url={user.url}
            user={user} 
            key={user.id}/> </div>
        )}) : <h2>No user found. Please try again.</h2>}
          {/* <Results img={profImg} 
            name="Justin" 
            description="Fullstack Software Developer based in Austin. I enjoy hiking, working out, and learning new skills to add to my coding tool belt" 
            followers="8"
            repos="30"
            location="Austin" /> */}
      </div>
    </div>
    </div>
  )
}

export default SearchResults