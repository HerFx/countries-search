import React from 'react'
import { useParams} from 'react-router-dom';


const CountryDetails = (props) => {
    const {id} = useParams();
    return (
        <div key={id}>
           <img src={props.country.flag} alt="flag" />
            <h1>{props.country.name}</h1>
            <p>Native Name: <span>{props.country.nativeName}</span></p>
            <p>Population: <span>{props.country.population}</span></p>
            <p>Region: <span>{props.country.region}</span></p>
            <p>Sub Region: <span>{props.country.subregion}</span></p>
            <p>Capital: <span>{props.country.capital}</span></p>
            <p>Top Level Domain: <span>{props.country.topLevelDomain}</span></p>
            <p>Currencies: <span>{props.country.currencies[0].name}</span></p>
            <p>Languages: <span>{props.country.languages[0].name}</span></p>
        </div>
    )

}

export default CountryDetails
