import React from 'react'
import { useHistory} from 'react-router-dom';


const CountryDetails = (props) => {

    const history = useHistory();
  return (
    <div>
        <button onClick={() => history.goBack()}>Back</button>
        <h1>{props.location.state.name}</h1>
        <img src={props.location.state.flag} alt={props.location.state.name} />
        <p>Population: <span>{props.location.state.population}</span></p>
        <p>Region: <span>{props.location.state.region}</span></p>
        <p>Capital: <span>{props.location.state.capital}</span></p>
        <p>Top Level Domain: <span>{props.location.state.topLevelDomain}</span></p>
        <p>Currencies: <span>{props.location.state.currencies[0].name}</span></p>
        <p>Languages: <span>{props.location.state.languages[0].name}</span></p>
        <p>Border Countries: <span>{props.location.state.borders}</span></p>

    </div>
  )
}

export default CountryDetails
