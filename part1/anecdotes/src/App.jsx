import { useState } from 'react'

const Header = (props) => {
  return (
    <h1>{props.text}</h1>
  );
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0});
  const [currentVotes, setCurrentVotes] = useState(0);

  let currentBestAnecdote = parseInt(Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b));
  const [bestAnecdote, setBestAnecdote] = useState(currentBestAnecdote)


  const changeAnecdotes = () => {
    let next = Math.floor(Math.random() * anecdotes.length);
    setCurrentVotes(votes[next]);
    setSelected(next);
  }

  const voteAnecdote = () => {
    let nextVotes = votes;
    nextVotes[selected] += 1;
    let currentBestAnecdote = parseInt(Object.keys(nextVotes).reduce((a, b) => nextVotes[a] > nextVotes[b] ? a : b));
    setBestAnecdote(currentBestAnecdote);
    setVotes(nextVotes);
    setCurrentVotes(nextVotes[selected]);
  }

  return (
    <>
      <Header text={"Anecdote of the day"}></Header>
      <div>{anecdotes[selected]}</div> 
      <p>This anecdote has {currentVotes} votes.</p>
      <button onClick={voteAnecdote}>Vote</button>
      <button onClick={changeAnecdotes}>Random</button>
      <Header text={"Anecdote with most votes"}></Header>
      <p>{anecdotes[bestAnecdote]}</p>
      <p>This anecdote has {votes[bestAnecdote]} votes.</p>

    </>

  )
}

export default App