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

const Statistics = ({goodCounter, neutralCounter, badCounter}) => {
  return (
    <>
      <Header text={"statistics"}></Header>
      <Value text={"good"} value={goodCounter}></Value>
      <Value text={"neutral"} value={neutralCounter}></Value>
      <Value text={"bad"} value={goodCounter}></Value>
      <Value text={"all"} value={goodCounter + neutralCounter + goodCounter}></Value>
      <Value text={"average"} value={(goodCounter * 1 + neutralCounter * 0 + badCounter * (-1))/(goodCounter + neutralCounter + badCounter)}></Value>
      <Value text={"positive"} value={(goodCounter)/(goodCounter + neutralCounter + badCounter) * 100}></Value>
    </>
  )

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
      <Statistics goodCounter={goodFeebackCounter} badCounter={badFeebackCounter} neutralCounter={neutralFeebackCounter}></Statistics>
    </div>
  )
}

export default App