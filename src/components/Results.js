import React from 'react'

function Results(props) {
  return (
    <div className='queryResult'>
        <img src={props.img} alt="profile" className='searchImg' />
        <div id="userInfo">
          <h2>{props.name}</h2>
          <p>{props.description}</p>
          <div className='additionalInfo'>
            <span>{props.followers}</span>
            <span>{props.repos}</span>
            <span>{props.location}</span>
          </div>
        </div>

    </div>
  )
}

export default Results