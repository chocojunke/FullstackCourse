import { useState, useEffect } from 'react'
import axios from 'axios'

const Countries = ({countries}) => {
  if (countries.length > 10) {
    return (
      <p>Too many entries. Specify another filter.</p>
    )
  } else if (countries.length > 1) {
    return (
      <>
        {countries.map((element, i) => <p key={i}>{element.name.common}</p>)}
      </>
    )
  } else if (countries.length === 1) {
    return (
      <>
        <h2>{countries[0].name.common}</h2>
        <p>Capital: {countries[0].capital[0]}</p>
        <p>Area: {countries[0].area}</p>
        <h3>Languages</h3>
        <ul>
          {
            Object.keys(countries[0].languages).map((keyName, i) => <li key={i}>{countries[0].languages[keyName]}</li>)
          }
        </ul>
      </>
    )
  } else {

  }
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [showCountries, setShowCountries] = useState([])
  const [filter, setNewFilter] = useState('')

  useEffect(() => {
    const url = 'https://studies.cs.helsinki.fi/restcountries/api/all';
    axios
      .get(url)
      .then(response => {
        setCountries(response.data);
        setShowCountries(response.data);
      })
  }, []);

  const filterChanged = (event) => {
    event.preventDefault();
    setNewFilter(event.target.value);
    setShowCountries(countries.filter(element => element.name.common.toLowerCase().includes(event.target.value.toLowerCase())) );
  }

  return (
    <div>
      <h1>Countries</h1>
      <input onChange={filterChanged} value={filter}/>
      <Countries countries={showCountries}></Countries>

    </div>
  )
}

export default App