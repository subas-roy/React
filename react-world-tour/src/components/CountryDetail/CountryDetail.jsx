import CountryData from "../CountryData/CountryData";

// const CountryDetail = ({country, handleVisitedCountry, handleVisitedFlags}) => {
//   return (
//     <div>
//       <h4>Country Detail</h4>
//       <hr />
//       <CountryData
//         country={country} 
//         handleVisitedCountry={handleVisitedCountry}
//         handleVisitedFlags={handleVisitedFlags}
//       ></CountryData>
//     </div>
//   );
// };


// Another way to drilling
const CountryDetail = (props) => {
  // const {country, handleVisitedCountry, handleVisitedFlags} = props;
  return (
    <div>
      <h4>Country Detail</h4>
      <hr />
      <CountryData {...props}></CountryData>
    </div>
  );
};

export default CountryDetail;