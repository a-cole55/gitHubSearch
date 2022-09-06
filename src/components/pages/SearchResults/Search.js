import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Results from "../../Results";
import "./Search.css";
import logo from "../../../assets/github.png";
import { SearchOutlined } from '@ant-design/icons';
// import PaginationBTN from "../../PaginationBTN";
// import axios from '../../../axios';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import axios from 'axios';

function SearchResults(props) {
   //Individual User Info
   const [userInfo, setUserInfo] = useState([]);
   const [bio, setBio] = useState("");
   const [followers, setFollowers] = useState(0);
   const [repos, setRepos] = useState(0)

  //darkMode/LightMode Switch
  const darkMode = props.darkMode;

  //Users Fetched from API
  const [users, setUsers] = useState([]);

  //Query Parameter
  const query = props.query;

  //Pagination
  const [page, setPage] = useState(1);

  //Total Count
  const [totalCount, setTotalCount] = useState(0)

  //Hover Effect for Search Bar
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(current => !current);
  }

  useEffect(() => {
    axios.get(`https://api.github.com/search/users?q=${query}&per_page=10&page=${page}`, {
    }).then((response)=> {
      console.log(response.data);
      setUsers(response.data.items)
      setTotalCount(response.data.total_count)
    })
    .catch(() => {
      console.error()
    });
}, [page, query]);


// useEffect(() => {
//   axios.get(`https://api.github.com/search/users?q=${query}&per_page=10&page=${page}`, {
//   }).then((response)=> {
//     console.log(response.data);
//     setUsers(response.data.items)
//     setTotalCount(response.data.total_count)
//   })
//   .catch(() => {
//     console.error()
//   });
// }, [page, query]);


function getUser(user) {
  return fetch(`https://api.github.com/users/${user.login}`)
  .then(response => response.json())
  .then(response => {
      console.log(response);
      // setUserInfo(response);
      return response;
  })
}

// then(data => {
//   this.setState({
//     name: data.name,
//     avatar_url: data.avatar_url,
//     company: data.company,
//     location: data.location,
//     public_repos: data.public_repos,
//     gists: data.public_gists,
//     followers: data.followers,
//     isLoading: false
//   });


// async handleSubmit(e) {
//   e.preventDefault();
//   let user = await this.getUser(this.refs.username.value);
//   this.setState({username: user.login,
//       id: user.id,
//       url: user.url,
//       avatar_url: user.avatar_url,
//   });
// }

  // useEffect(() => {
  // users.map((user) => {
  //   axios.get(`user/${user.login}`, {
  //   }).then((res)=> {
  //     console.log(res.data)
  //   })
  //   .catch(() => {
  //     console.error()
  //   });
  // });
  // }, [users]);

  const fetchUserInfo = async (user) => {
    try {
      const { userData } = await axios.get(`https://api.github.com/users/${user.login}`);
      console.log(userData)
      return userData;

    }
    catch(error){
      console.error(error);
      return null;
    }
  }

//Pagination
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
            <input type="text" name="userName" id="query" 
              onMouseEnter={handleClick}
              onMouseOut={handleClick}
              style={{
                borderColor: isActive ? "#ABABAB" : ''}} />
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
      <span>Total Results: {totalCount}</span>
      <PaginationBTN className="paginationBTN" />
      <div className='totalResults'>
        {users.length > 0 ? users.map((user) =>{
          getUser(user)
          return (
            <div className='results' key={user.id}>
            <Results 
            user= {user}
            img={user.avatar_url} 
            name={user.login}


            description={user.bio}
            followers={user.followers}
            repos={user.public_repos}
            // location={user.location}


            url={user.html_url}
            /> </div>
        )}) : <h2>No user found. Please try again.</h2>}
      </div>
    </div>
    </div>
  )
}

export default SearchResults