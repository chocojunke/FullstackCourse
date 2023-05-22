const Header = (props) => {
    return (
        <h1>{props.text}</h1>
    );
}

const Part = (props) => {
    return (
        <>
            <p>
                {props.part} - {props.exercises}
            </p>
        </>
    );
}

const Content = (props) => {
    return (
        <>
            {props.parts.map(
                element =>
                    <Part key={element.id} part={element.name} exercises={element.exercises}></Part>
            )
            }
        </>
    );
}

const Total = (props) => {
    return (
        <>
            <p>Number of exercises - {props.parts.reduce((accumulator, part) => accumulator + part.exercises, 0)}</p>
        </>
    );
}

const Course = ({ course }) => {
    return (
        <>
            <Header text={course.name}></Header>
            <Content parts={course.parts}></Content>
            <Total parts={course.parts}></Total>
        </>
    )
}

export default Course