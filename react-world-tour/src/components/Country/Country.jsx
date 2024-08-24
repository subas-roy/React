import { useState } from 'react';
import './Country.css'

const Country = ({country}) => {
  console.log(country)
  const [visited, setVsited] = useState(false);
  const handleVisited = () => {
    setVsited(!visited)
  }
  const {name, flags, population, area, cca3} = country;

  return (
    <div className='country'>
      <h3>{name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p><small>Code: {cca3}</small></p>
      <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
      {visited ? 'I have visited this country':'I want to visit'}
    </div>
  );
};

export default Country;