import { useState } from 'react';

const Header = (props) => {
  return (
    <h1>{props.text}</h1>
  );
}

const StatisticLine = (props) => {
  return (
    <tr>
      <th>{props.text}</th>
      <th>{props.value}</th>
    </tr>
  );
}

const Statistics = ({goodCounter, neutralCounter, badCounter}) => {
  if ((goodCounter + neutralCounter + badCounter) !== 0) {
    return (
      <>
        <Header text={"statistics"}></Header>
        <table>
          <tbody>
            <StatisticLine text={"good"} value={goodCounter}></StatisticLine>
            <StatisticLine text={"neutral"} value={neutralCounter}></StatisticLine>
            <StatisticLine text={"bad"} value={goodCounter}></StatisticLine>
            <StatisticLine text={"all"} value={goodCounter + neutralCounter + goodCounter}></StatisticLine>
            <StatisticLine text={"average"} value={(goodCounter * 1 + neutralCounter * 0 + badCounter * (-1))/(goodCounter + neutralCounter + badCounter)}></StatisticLine>
            <StatisticLine text={"positive"} value={(goodCounter)/(goodCounter + neutralCounter + badCounter) * 100}></StatisticLine>
          </tbody>
        </table>
      </>
    )
  } else {
    return (
      <p>No feedback given.</p>
    )
  }


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