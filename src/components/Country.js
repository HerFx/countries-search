import React from 'react'
import './Country.css'
import {ThemeContext} from '../ThemeProvider';
import {theme} from '../theme';
import {useContext} from 'react';
import {Link} from 'react-router-dom';


const getStyle = (mode) => {
  return {
    countryInfo: {
      backgroundColor: mode === "light" ? "#ffffff" : "hsl(209, 23%, 22%)",
      color: theme[mode].color
    },
  };
};

const Country = (props) => {
  const {mode} = useContext(ThemeContext);
  const styles = getStyle(mode);



  return (
    <div className='country-box'>
        <Link to={`/country/${props.name}`}>
        <div className='country-img'>
            <img src={props.flag} alt={props.name} />
        </div>
        <div className='country-info' style={styles.countryInfo}>
            <h1>{props.name}</h1>
            <p>Population: <span>{props.population}</span></p>
            <p>Region: <span>{props.region}</span></p>
            <p>Capital: <span>{props.capital}</span></p>
        </div>
        </Link>
    </div>
  )
  
}

export default Country
