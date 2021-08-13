import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'

const App = () => {

  const [currentCountry, setCurrentCountry] = useState('')

  const searchForCountries = (event) => {
    if (event.target.value !== currentCountry) {
      setCurrentCountry(event.target.value)
    }
  }

  const [availableCountries, setAvailableCountries] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get(`https://restcountries.eu/rest/v2/name/${currentCountry}`)
      .then(response => {
        console.log('promise fulfilled')
        setAvailableCountries(response.data)
      })
  })

  return (
    <div>
      <form >
        <div>
          find countries
          <input value={currentCountry} onChange={searchForCountries} />
        </div>
      </form>
      {(availableCountries.length > 1 && availableCountries.length <= 10) &&
        availableCountries.map((country) => { return <p key={country.name}>{country.name}</p> })
      }
      {availableCountries.length > 10 &&
        <p>Too many matches, specify another filter.</p>
      }
      {(availableCountries.length === 1) &&
        <Country country={availableCountries[0]} />
      }
    </div>
  )
}

export default App