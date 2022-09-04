import axios from '../../../axios';
import React, { useState } from 'react';
import './Home.css';
import logo from "../../../assets/github.png"

function Home() {

  const [query, setQuery] = useState("");
  //Users fetched from API
  const [users, setUsers] = useState([])

  const handleQueryInput = (e) => {
    const value = e.target.value;
    setQuery(value);

  }


  const fetchUsers = async () => {
    try {
      const response = await axios.get("search/users?q=" + query);
      console.log(response)
    }
    catch(error){
      console.error(error)
    }
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    await fetchUsers();

  }

  return (
    <div className="Home">
      <div id="header"><img src={logo} alt="github logo" />
      <h1> GitHub Search </h1>
      </div>
    <div id="search">
      <input id="query" value={query} onChange={handleQueryInput} type="text" placeholder='Enter Username' />
      <button onClick={handleSearch} id="homeSearchBTN">Search</button>
    </div>

  </div>
  )
}

export default Home