import axios from '../../../axios';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import logo from "../../../assets/github.png";
import { SearchOutlined } from '@ant-design/icons';
import SwitchBTN from '../../SwitchBTN';


function Home(props) {


  // const [query, setQuery] = useState("");
  const query = props.query;
  const setQuery = props.setQuery;

  //darkMode/LightMode Switch
  const [darkMode, setDarkMode] = useState(true)

  const changeLightMode = () => {
    setDarkMode(darkMode => !darkMode);
    console.log("Dark Mode Changed")
  }
  //Users fetched from API
  const users = props.users;
  const setUsers = props.setUsers;

  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  }

  const handleQueryInput = (e) => {
    const value = e.target.value;
    setQuery(value);

  }


  const fetchUsers = async () => {
    try {
      const { data } = await axios.get("search/users?q=" + query);
      // setUsers(users => data?.items)
      console.log(data)
      return data?.items;

    }
    catch(error){
      console.error(error);
      return null;
    }
  }

  const handleSearch = async (e) => {
    // e.preventDefault();
    if(query){
      const items = await fetchUsers();
      setUsers(items);
    }else{
      console.log("No user found. Please try again.")
    }

  }

  return (
    <div className="Home"
    style={{backgroundColor: darkMode ? "" : "white"}}>
      <SwitchBTN onclick={changeLightMode} />
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
        style={{
          borderColor: isActive ? "#38A6FF" : ''}} />
      <Link to="/search">
        <button onClick={handleSearch} id="homeSearchBTN">
          <SearchOutlined style={{fontSize:"18px"}} />
        </button>
      </Link>
    </div>

  </div>
  )
}

export default Home