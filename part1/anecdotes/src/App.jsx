const Header = (props) => {
  return <h1>{props.course}</h1>;
}

const Part = (props) => {
  return <p>
    {props.name} {props.number}
  </p>
}

const Content = (props) => {
  return <>
    <Part name={props.name1} number={props.number1}></Part>
    <Part name={props.name2} number={props.number2}></Part>
    <Part name={props.name3} number={props.number3}></Part>
  </>
  
}

const Total = (props) => {
  return <p>Number of exercises {props.number1 + props.number2 + props.number3}</p>;
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}></Header>
      <Content name1={part1} number1={exercises1} name2={part2} number2={exercises2} name3={part3} number3={exercises3}></Content>
      <Total number1={exercises1} number2={exercises2} number3={exercises3}></Total>
    </div>
  )
}

export default App