const Header = (props) => {
  console.log(props);
  return (
    <h1>{props.course}</h1>
  );
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  );
}

const Content = (props) => {
  return (
    <>
      <Part part={props.exercise1.name} exercises={props.exercise1.exercises}></Part>
      <Part part={props.exercise2.name} exercises={props.exercise2.exercises}></Part>
      <Part part={props.exercise2.name} exercises={props.exercise2.exercises}></Part>
    </>
  );
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.exercise1.exercises + props.exercise2.exercises + props.exercise3.exercises}</p>
    </>
  );
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
      <Content exercise1={part1} exercise2={part2} exercise3={part3}></Content>
      <Total exercise1={part1} exercise2={part2} exercise3={part3}></Total>
    </div>
  )
}

export default App