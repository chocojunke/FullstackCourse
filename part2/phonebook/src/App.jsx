import { useState } from 'react'

const Person = ({persons, filter}) => {
  return (
    <>
      {persons.filter(element => element.name.toLowerCase().includes(filter.toLowerCase()) ).map(element => <p key={element.id}>{element.name} - {element.number}</p>)}

    </>
  )
}

const Filter = ({ filter, updateFilter }) => {

  return (
    <>
      Filter with: <input
                    value={filter}
                    onChange={updateFilter}
                  />
    </>
  )
}

const PersonForm = ({ newName, newNumber, updateName, updateNumber, saveContact }) => {
  return (
    <form>
      <div>
        name: <input 
                value={newName}
                onChange={updateName}
              />
      </div>
      <div>
        number: <input 
                value={newNumber}
                onChange={updateNumber}
              />
      </div>
      <div>
        <button onClick={saveContact}>add</button>
      </div>
    </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')

  const updateName = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  }

  const updateNumber = (event) => {
    event.preventDefault();
    setNewNumber(event.target.value);
  }

  const updateFilter = (event) => {
    event.preventDefault();
    setNewFilter(event.target.value);
    persons.filter(element => element.name.includes(filter) )
  }

  const saveContact = (event) => {
    event.preventDefault();
    if (persons.findIndex(element => newName === element.name) === -1) {
      setPersons(persons.concat({name: newName, number: newNumber, id: persons.length + 1}));
    } else {
      alert(`${newName} was already added to the phonebook.`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} updateFilter={updateFilter}/>
      <h2>Add a new one</h2>
      <PersonForm newName={newName} newNumber={newNumber} updateName={updateName} updateNumber={updateNumber} saveContact={saveContact}/>
      <h2>Numbers</h2>
      <Person persons={persons} filter={filter}></Person>
    </div>
  )
}

export default App