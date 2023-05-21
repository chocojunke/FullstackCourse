import { useState } from 'react';

const Header = (props) => {
  return (
    <h1>{props.text}</h1>
  );
}

const Value = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  );
}

const App = () => {
  const [goodFeebackCounter, setGoodFeebackCounter] = useState(0)
  const [neutralFeebackCounter, setNeutralFeebackCounter] = useState(0)
  const [badFeebackCounter, setBadFeebackCounter] = useState(0)

  const handleGoodFeedback = () =>  {
    setGoodFeebackCounter(goodFeebackCounter + 1);
  }

  const handleNeutralFeedback = () =>  {
    setNeutralFeebackCounter(neutralFeebackCounter + 1);
  }

  const handleBadFeedback = () =>  {
    setBadFeebackCounter(badFeebackCounter + 1);
  }

  return (
    <div>
      <Header text={"give feedback"}></Header>
      <button onClick={handleGoodFeedback}>good</button>
      <button onClick={handleNeutralFeedback}>neutral</button>
      <button onClick={handleBadFeedback}>bad</button>
      <Header text={"statistics"}></Header>
      <Value text={"good"} value={goodFeebackCounter}></Value>
      <Value text={"neutral"} value={neutralFeebackCounter}></Value>
      <Value text={"bad"} value={badFeebackCounter}></Value>

    </div>
  )
}

export default App