import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])

  const handleVisitedCountry = country => {
    console.log('add this country to your visited country')
    console.log(country)
  }

  return (
    <div>
      <h3>Countries {countries.length}</h3>
      <div>
        <h5>Visited Countries</h5>
      </div>
      <div className="countries-container">
      {
        countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountry={handleVisitedCountry}></Country>)
      }
    </div>
    </div>
  );
};

export default Countries;