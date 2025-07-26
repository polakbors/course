import { useState } from 'react'


const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}
const Input = ({ value, onChange }) => {
  return (
    <input value={value} onChange={onChange} />
  )
}
const Numbers = ({ persons, Phonebook }) => {
  return (
    <ul>
      {persons.map((person, index) => (
        Phonebook.trim() !== '' && person.name.toLowerCase().includes(Phonebook.toLowerCase()) ?
        <li key={index}>{person.name} {person.number}</li>
        : Phonebook.trim() === '' ?    
        <li key={index}>{person.name} {person.number}</li>
        : null
      ))}
    </ul>
  )
}
import React from 'react'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [Phonebook, setPhonebook] = useState('')
  return (
    <div>
      <h1>Phonebook serccz</h1>
      name: <input value={Phonebook} onChange={(e) => setPhonebook(e.target.value)} />
      

      <h2>Phonebook</h2>
      <form>
        <div>
          name: <Input value={newName} onChange={(e) => setNewName(e.target.value)} />
          number: <Input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />


        </div>
        <div>
          <Button handleClick={() => {
            if (newName.trim() === '' || newNumber.trim() === '' ) {
              console.log(`Input is empty, no  added`)
              alert('xd')
              event.preventDefault();
              return
            }
            setPersons(persons.concat({ name: newName, number: newNumber }))
            setNewName('')
            setNewNumber('')
            event.preventDefault();
          }} text="add" />
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        <Numbers persons={persons} Phonebook={Phonebook} />
      </ul>
    </div>
  )
}

export default App
