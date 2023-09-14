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
    <Part name={props.part1.name} number={props.part1.number}></Part>
    <Part name={props.part2.name} number={props.part2.number}></Part>
    <Part name={props.part2.name} number={props.part3.number}></Part>
  </>
  
}

const Total = (props) => {
  return <p>Number of exercises {props.number1 + props.number2 + props.number3}</p>;
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}></Header>
      <Content part1={part1} part2={part2} part3={part3}></Content>
      <Total number1={part1.exercises} number2={part2.exercise} number3={part3.exercises}></Total>
    </div>
  )
}

export default App