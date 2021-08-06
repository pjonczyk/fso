import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Phonebook from './components/Phonebook'
import PersonForm from './components/PersonForm'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const [currentFilter, setCurrentFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'notes')

  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const newPerson = {
      name: newName,
      number: newNumber
    }

    if (persons.filter((currentPerson) => {
      return currentPerson.name === newPerson.name
    }).length > 0) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(newPerson))
    }

    setNewName('')
    setNewNumber('')
  }

  const personsToShow = persons.filter(person => {
    return person.name.toLowerCase().includes(currentFilter.toLowerCase())
  })

  return (
    <div>
      <h2>Phonebook</h2>
      <form >
        <Filter currentFilter={currentFilter} setCurrentFilter={setCurrentFilter}></Filter>
      </form>
      <h2>Add a new entry</h2>
      <PersonForm addPerson={addPerson} handleNewName={handleNewName} handleNewNumber={handleNewNumber} newName={newName} newNumber={newNumber}></PersonForm>
      <h2>Numbers</h2>
      <Phonebook personsToShow={personsToShow}></Phonebook>
    </div>
  )
}

export default App