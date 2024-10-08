import { useState } from 'react';
import './Country.css'
import CountryDetail from "../CountryDetail/CountryDetail";

// Component
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
  // state declearation
  const [visited, setVsited] = useState(false);
  
  const handleVisited = () => {
    setVsited(!visited)
  }
  const {name, flags, population, area, cca3} = country;

  // console.log(handleVisitedCountry)

  return (
    <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
      <h3>{name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p><small>Code: {cca3}</small></p>
      <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
      <br />
      <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
      <br />
      <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
      {visited ? 'I have visited this country':'I want to visit'}
      <hr />
      <CountryDetail
       country={country} 
       handleVisitedCountry={handleVisitedCountry}
       handleVisitedFlags={handleVisitedFlags}
       ></CountryDetail>
    </div>
  );
};

export default Country;