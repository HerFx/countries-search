import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {theme} from './theme';
import {ThemeContext} from './ThemeProvider';
import React, {useContext} from 'react';
import ThemeSwitch from './ThemeSwitch';
import { useEffect, useState } from 'react';
import Country from './components/Country';
import data from './data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const getStyle = (mode) => {
  return {
    app: {
      backgroundColor: theme[mode].backgroundColor
    },
    text: {
      color: theme[mode].color
    },
    nav:{
      backgroundColor: mode === "light" ? "#ffffff" : "hsl(209, 23%, 22%)",
      height: "10vh",
    }
  };
};


function App() {
  const {mode} = useContext(ThemeContext);
  const styles = getStyle(mode);

  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setCountries(data);
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleRegion = (e) => {
    setRegion(e.target.value);
  };

  useEffect(() => {
    setFiltered(
      countries.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, countries]);

  useEffect(() => {
    setFiltered(
      countries.filter((country) =>
        country.region.toLowerCase().includes(region.toLowerCase())
      )
    );
  }, [region, countries]);


  return (
    <div style={styles.app}>
        <nav style={styles.nav}>
        <Container>
          <Row>
            <Col>
              <h1 style={styles.text}>Where in the world?</h1>
            </Col>
            <Col className='input-box'>
              <ThemeSwitch />
            </Col>
          </Row>
          </Container>
        </nav>
        <div className="countries">
          <div className="search">
          <Container>
            <Row>
              <Col>
                <input
                  type="text"
                  placeholder="Search for a country..."
                  onChange={handleChange}
                />
              </Col>
              <Col className='input-box'>
                <select name="region" id="region" onChange={handleRegion}>
                  <option value="">Filter by Region</option>
                  <option value="Africa">Africa</option>
                  <option value="Americas">Americas</option>
                  <option value="Asia">Asia</option>
                  <option value="Europe">Europe</option>
                  <option value="Oceania">Oceania</option>
                </select>
              </Col>
            </Row>
          </Container>
          </div>
          <Container>
            <Row>
              {filtered.map((country) => (
                <Col key={country.name} xs={12} sm={6} md={4} lg={3} >
                  <Country
                    name={country.name}
                    flag={country.flag}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                  />
                </Col>
              ))}
            </Row>
          </Container>
          </div>
    </div>
  );
}

export default App;
