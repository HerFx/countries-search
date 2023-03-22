import React from 'react'
import './Country.css'

const Country = (props) => {
  return (
    <div className='country-box'>
        <div className='country-img'>
            <img src={props.flag} alt={props.name} />
        </div>
        <div className='country-info'>
            <h1>{props.name}</h1>
            <p>Population: {props.population}</p>
            <p>Region: {props.region}</p>
            <p>Capital: {props.capital}</p>
        </div>
    </div>
  )
}

export default Country
