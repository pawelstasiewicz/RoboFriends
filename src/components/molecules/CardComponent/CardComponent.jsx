import React from 'react'
import './CardComponent.css'

function CardComponent({name, email, id} ) {

  return (
    <div className='cardStyle'>
        <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
        <div className='cardTextStyle'>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
  )
}

export default CardComponent