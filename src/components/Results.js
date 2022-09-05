import React from 'react';

function Results(props, {user}) {

  return (
    <div className='queryResult'>
        <img src={props.img} alt="profile" className='searchImg' />
        <div id="userInfo">
          <h2>{props.name}</h2>
          <p>{props.description}</p>
          <div className='additionalInfo'>
            <span>{props.followers} followers</span>
            <span>{props.repos} repositories</span>
            <span>Location: {props.location}</span>
          </div>
          <a href={props.url} target="_blank" rel="noreferrer" >View Profile</a>
        </div>

    </div>
  )
}

export default Results