import { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountry}) => {
  console.log(country)
  const [visited, setVsited] = useState(false);

  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisited = () => {
    setVsited(!visited)
  }
  const {name, flags, population, area, cca3} = country;

  console.log(handleVisitedCountry)

  return (
    <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
      <h3>{name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p><small>Code: {cca3}</small></p>
      <button>Mark Visited</button>
      <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
      {visited ? 'I have visited this country':'I want to visit'}
    </div>
  );
};

export default Country;