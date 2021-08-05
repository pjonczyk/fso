const Header = ({ name }) => {
    return <h2>{name}</h2>
}

const Total = ({ parts }) => {
    const sum = parts.reduce((totalValue, part) => {
        return totalValue + part.exercises
    }, 0)

    return <p style={{ fontWeight: "bold" }}>Number of exercises {sum}</p>
}

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map((part) => (
                <Part key={part.id} part={part} />
            ))}
        </div>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course