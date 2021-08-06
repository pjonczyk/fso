import React from 'react'
import Person from './Person'

const Phonebook = ({ personsToShow }) => {
    return (
        <div>
            {personsToShow.map((person) => { return <Person key={person.name} person={person}></Person> })}
        </div>
    )


}

export default Phonebook