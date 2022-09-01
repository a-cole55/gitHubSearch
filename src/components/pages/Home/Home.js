import axios from '../../../axios';
import React, { useState } from 'react';
import './Home.css';

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
  // const getResults = () => {
  //   Axios.get("https://api.github.com/search/users?q=example")
  //   .then((response) => {
  //     console.log(response)
  //   })

  // }

  return (
    <div className="Home">
    <h1> GitHub Search </h1>
    <div id="search">
      <input value={query} onChange={handleQueryInput} type="text" placeholder='Enter Search' />
      <button onClick={handleSearch}>Search</button>
    </div>

  </div>
  )
}

export default Home