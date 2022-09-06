import React from 'react';

function Results(props, {user}) {

  return (
    <div className='queryResult'>
        <img src={props.img} alt="profile" className='searchImg' />
        <div id="userInfo">
          <h2 className="username">{props.name}</h2>
          <p>{props.description}</p>
          <div className='additionalInfo'>
            <span>{props.followers} Followers</span>
            <span>{props.repos} Repositories</span>
            <span>{props.location}</span>
          </div>
        </div>
        <a href={props.url} target="_blank" rel="noreferrer" >View Profile</a>
    </div>
  )
}

export default Results