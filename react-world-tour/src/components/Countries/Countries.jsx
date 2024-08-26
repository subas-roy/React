import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
  // state declearation
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  // fetching data and set countries
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])

  // count visited countries and set new visited countries
  const handleVisitedCountry = country => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  }

  const handleVisitedFlags = flag => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  }

  // remove item from an array in a state
  // use filter to select all the elements except the one you want remove

  return (
    <div>
      <h3>Countries {countries.length}</h3>
      <div>
        <h5>Visited Countries {visitedCountries.length}</h5>
        <ul>
          {// executes a specified function for each item in an iterable
            visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
          }
        </ul>
      </div>
      <div className="flags-container">
        {
          visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
        }
      </div>
      <div className="countries-container">
        {// send the 'country' and 'handleVisitedCountry' to the Çountry component 
          countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountry={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags}></Country>)
        }
      </div>
    </div>
  );
};

export default Countries;