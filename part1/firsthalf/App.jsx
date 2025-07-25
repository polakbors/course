import { useState } from 'react'

const Header = ({ course }) => <h1>{course}</h1>

const Content = ({ parts }) => {
  return (
 
    console.log(parts[0].name),   
    <div>
      <Course parts={parts[0]} />
      <Course parts={parts[1]} />
      <Course parts={parts[2]} />

    </div>
  )
}
const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}
const Total = ({ parts }) => {
  console.log(parts)
  return <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
}

const Course = ({ parts }) => {
  return (
    <div>
      {parts.name} {parts.exercises}
    </div>
  )
} 

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
