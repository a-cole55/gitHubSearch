import React, { useState, useEffect, useContext} from 'react';
import { Link } from "react-router-dom";
import Results from "../../Results";
import "./Search.css";
import logo from "../../../assets/github.png";
import { SearchOutlined } from '@ant-design/icons';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import axios from 'axios';
import SearchContext from "../../../components/SearchContext";

function SearchResults(props) {
   //darkMode/LightMode Switch
  const {darkMode} = useContext(SearchContext);

    //Query Parameter
  const {query} = useContext(SearchContext);
  const {setQuery} = useContext(SearchContext);
 

   //Individual User Info
   const [userInfo, setUserInfo] = useState([]);

  //Pagination
  const [page, setPage] = useState(1);

  //Total Count
  const [totalCount, setTotalCount] = useState(0)

  //Hover Effect for Search Bar
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(current => !current);
  }

  // const handleQueryInput = (e) => {
  //   const value = e.target.value;
  //   setQuery(value);

  // }
  //Check for Enter Key Pressed
  function handleKeyDown(e){
    if(e.key === 'Enter') {
      setQuery(e.target.value);
   }};

  //Fetch Search Results from GitHub User Search API
  useEffect(() => {
    axios.get(`https://api.github.com/search/users?q=${query}&per_page=10&page=${page}`, {
    }).then((response)=> {
      // console.log(response.data);
      setTotalCount(response.data.total_count);
		  const profileUrls = response.data.items;

		const getUrls = profileUrls.map((userProfile) => {
      return userProfile.url
    });
      console.log(getUrls);
      getUserData(getUrls)
    })
    .catch(() => {
      console.error()
    });
  }, [page, query]);

//Fetch individual user info from GitHub User Profile API
const getUserData = (getUrls) => {
  Promise.all(getUrls.map((url) => axios.get(url))).then(
      axios.spread((...allData) => {
      console.log({ allData });
      let userData = allData.map((data) =>{
        return data.data
      });
      console.log(userData);
      setUserInfo(userData)
  })
  )
}

//Pagination Buttons
  function PaginationBTN() {

    const prevPage = () => {
      setPage(page => {
        if (page === 1){
          return page
        }else{
          return page - 1;
        }})
      };
    
    const nextPage = () => {
      setPage(page => page + 1);
      }
    return (
        //Bootstrap Buttons
      <ButtonGroup aria-label="Basic example" id="pageBTNS">
        <Button variant="primary" style={{color: "black"}} onClick={prevPage}>&#8592;</Button>
        <input className="currentPage" disabled value={page} id="paginationDisplay" />
        <Button variant="secondary" style={{color: "black"}} onClick={nextPage}>&#8594;</Button>
      </ButtonGroup>
    );
  }
  return (
    <div id="searchPage"     
      style={{backgroundColor: darkMode ? "" : "#C3C1C1"}}>
      <header>
        <nav>
        <Link to="/">
          <div id="homeLogo">
              <img src={logo} alt="github logo" id="logo" />
              <h6>GitHub</h6>
          </div>
        </Link>
          <div id="navSearch">
            <input type="text" value={query} name="userName" id="query" 
              // onChange={handleQueryInput} 
              onKeyDown={handleKeyDown}
              onMouseEnter={handleClick}
              onMouseOut={handleClick}
              style={{
                borderColor: isActive ? "#38A6FF" : ''}} />
            <button id="navSearchBTN"><SearchOutlined style={{fontSize:"18px"}} /></button>
          </div>
            <ul>
                <li><a href="https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fsignup%3Fref_cta%3DSign%2Bup%26ref_loc%3Dheader%2Blogged%2Bout%26ref_page%3D%252F%26source%3Dheader-home"> Login</a></li>
                <li><a href="https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"> Signup</a></li>
            </ul>
        </nav>
    </header>
    <h2 id="searchHeader">Search Results</h2>
    <div className='pagination'>
      <span>Total Results: {totalCount}</span>
      <PaginationBTN className="paginationBTN" />
      <div className='totalResults'>
        {userInfo.length > 0 ? userInfo.map((user, index) =>{
          return (
            <div className='results' key={user.id}>
            <Results 
            user= {user}
            img={user.avatar_url} 
            name={user.login}
            description={user.bio}
            followers={user.followers}
            repos={user.public_repos}
            location={user.location}
            url={user.html_url}
            /> </div>
        )}) : <h2>No user found. Please try again.</h2>}
      </div>
    </div>
    </div>
  )
}

export default SearchResults