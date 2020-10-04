import React, {useState, useEffect} from 'react';
import { MenuItem, FormControl, Select } from "@material-ui/core";
import './App.css';

const App = ()=> {

  const [countries, setCountries] = useState([])

  const [country, setCountry] = useState('worldwide')

  useEffect(() => {
    const getCountriesData = async ()=>{
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then(response=>response.json())
      .then(
        data =>{
          const countries = data.map(country=>(
            {
              name: country.country,
              value: country.countryInfo.iso2
            }
          ))
          setCountries(countries)
        })
    }

    getCountriesData()//Need to call the function in useEffect
  }, []);

  //Run whenever there is change in countries variable


  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    console.log(countryCode);
    setCountry(countryCode)
  }

  return (
    <div className="app">
      <div className="app__header">
        <h1>Covid Tracker</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {
              countries.map(country=>{
                return(
                  <MenuItem value={country.value}>{country.name}</MenuItem>
                )
              })
            }
          </Select>
        </FormControl>
      </div>

      
    </div>
  );
}

export default App;
