import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Home.css';
import logo from "../../../assets/github.png";
import { SearchOutlined } from '@ant-design/icons';
import SwitchBTN from '../../SwitchBTN';


function Home(props) {
  //Navigate to Search Page
  const navigate = useNavigate();
  const goToSearchPage = () => navigate('/search')

  // const [query, setQuery] = useState("");
  const query = props.query;
  const setQuery = props.setQuery;

  //darkMode/LightMode Switch
  const darkMode = props.darkMode;
  const setDarkMode = props.setDarkMode;

  const changeLightMode = () => {
    setDarkMode(darkMode => !darkMode);
    console.log("Dark Mode Changed");
    console.log(darkMode)
  }

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
    <div className="Home"
    style={{backgroundColor: darkMode ? "" : "#ABABAB"}}>
      <div onClick={changeLightMode}>
        <SwitchBTN />
      </div>
      <div id="header"><img src={logo} alt="github logo" />
      <h1> GitHub Search </h1>
      </div>
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

  </div>
  )
}

export default Home