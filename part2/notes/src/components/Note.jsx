const Note = ({ note, toggleImportance  }) => {

    const label = note.important ? 'Make not important' : 'Make important';
    return (
        <>
        <li className='note'>{note.content}</li>
        <button onClick={toggleImportance}>{label}</button>
        </>

    )
}

export default Note