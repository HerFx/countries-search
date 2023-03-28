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
import CountryDetails from './components/CountryDetails';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const getStyle = (mode) => {
  return {
    app: {
      backgroundColor: theme[mode].backgroundColor,
      minHeight: "100vh",
    },
    text: {
      color: theme[mode].color
    },
    nav:{
      backgroundColor: mode === "light" ? "#ffffff" : "hsl(209, 23%, 22%)",
      height: "10vh",
    },
    form: {
      backgroundColor: mode === "light" ? "#ffffff" : "hsl(209, 23%, 22%)",
      color: theme[mode].color,
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
            <Col xs={6}>
              <h1 style={styles.text}>Where in the world?</h1>
            </Col>
            <Col xs={6} className='input-box'>
              <ThemeSwitch/>
            </Col>
          </Row>
          </Container>
        </nav>
        <div className="search" >
          <Container>
            <Row>
              <Col>
                <input
                  style={styles.form}
                  type="text"
                  placeholder="Search for a country..."
                  onChange={handleChange}
                />
              </Col>
              <Col className='input-box'>
                <select name="region" id="region" onChange={handleRegion} style={styles.form}>
                  <option style={styles.text} value="">Filter by Region</option>
                  <option style={styles.text} value="Africa">Africa</option>
                  <option style={styles.text} value="Americas">Americas</option>
                  <option style={styles.text} value="Asia">Asia</option>
                  <option style={styles.text} value="Europe">Europe</option>
                  <option style={styles.text} value="Oceania">Oceania</option>
                </select>
              </Col>
            </Row>
          </Container>
          </div>
        <div className="countries">
          <Router>
            <Routes>
              {filtered.map((country) => (
                <Route path={`/country/${country.name}`} element={<CountryDetails country={country}/>}/>
              ))}

              <Route path="/" element={
                <Container>
                  <Row>
                    {filtered.map((country) => (
                      <Col xs={12} md={6} lg={4} xl={3}>
                        <Country
                          key={country.name}
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
              } />
            </Routes>
          </Router> 
          </div>
    </div>
  );
}

export default App;
