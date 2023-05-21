import Note from './components/Note'

const App = ({ notes }) => {

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(element =>
          <Note key={element.id} note={element}></Note>
        )}
      </ul>
    </div>
  )
}

export default App