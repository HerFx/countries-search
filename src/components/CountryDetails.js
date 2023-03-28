import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import { useParams} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import {ThemeContext} from '../ThemeProvider';
import {theme} from '../theme';
import {useContext} from 'react';
import {MdKeyboardBackspace} from 'react-icons/md'; 

const getStyle = (mode) => {
    return {
      countryInfo: {
        backgroundColor: mode === "light" ? "#ffffff" : "hsl(208.7,26.44%,17.06%)",
        color: theme[mode].color
      },
      btn:{
        backgroundColor: mode === "light" ? "#ffffff" : "hsl(209, 23%, 22%)",
        color: theme[mode].color,
        border: "none",
        padding: "10px 50px",
        borderRadius: "5px",
        cursor: "pointer",
        outline: "none",

      }
    };
  };



const CountryDetails = (props) => {
    const {id} = useParams()
    const navigate = useNavigate();
    const {mode} = useContext(ThemeContext);
    const styles = getStyle(mode);

    return (
        <div key={id} className="details" style={styles.countryInfo}>
        <Container>
            <Row>
                <Col>
                    <button className="btn" style={styles.btn}onClick={() => navigate(-1)}><MdKeyboardBackspace className='arrow'/>Back</button>
                </Col>
            </Row>
            <Row className='details-box'>
                <Col xs={12} md={6} lg={6} xl={6}>
                    <img src={props.country.flag} alt="flag" />
                </Col>
                <Col xs={12} md={6} lg={6} xl={6} className="details-text">
                    <h1>{props.country.name}</h1>
                    <p>Native Name: <span>{props.country.nativeName}</span></p>
                    <p>Population: <span>{props.country.population}</span></p>
                    <p>Region: <span>{props.country.region}</span></p>
                    <p>Sub Region: <span>{props.country.subregion}</span></p>
                    <p>Capital: <span>{props.country.capital}</span></p>
                    <p>Top Level Domain: <span>{props.country.topLevelDomain}</span></p>
                    <p>Currencies: <span>{props.country.currencies[0].name}</span></p>
                    <p>Languages: <span>{props.country.languages[0].name}</span></p>
                </Col>
            </Row>
           </Container>
        </div>
    )

}

export default CountryDetails
