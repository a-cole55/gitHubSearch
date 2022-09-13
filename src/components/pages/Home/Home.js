import React, { useContext } from 'react';
import './Home.css';
import logo from "../../../assets/github.png";
import SwitchBTN from '../../SwitchBTN';
import SearchContext from "../../../components/SearchContext";
import SearchBar from '../../SearchBar';


function Home(props) {

  //darkMode/LightMode Switch
  const {darkMode} = useContext(SearchContext);
  const {setDarkMode} = useContext(SearchContext);
  const changeLightMode = () => {
    setDarkMode(darkMode => !darkMode);
    console.log("Dark Mode Changed");
    console.log(darkMode)
  }

  return (
    <div className="Home"
    style={{backgroundColor: darkMode ? "" : "#ABABAB"}}>
      <div onClick={changeLightMode}>
        <SwitchBTN />
      </div>
      <div id="header"><img src={logo} alt="github logo" />
      <h1> GitHub Search </h1>
      </div>
      <SearchBar />
  </div>
  )
}

export default Home