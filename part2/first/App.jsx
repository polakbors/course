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
const Part = ({ course }) => {
  return (
      <ul>
        {course.parts.map(part => (
          <li key={part.id}>
            <Course parts={part} />
          </li>
        ))}
      </ul>
  )
}
const Total = ({ x }) => {
  return <p>Number of exercises {x.reduce((s,p) => s + p.exercises, 0)}</p>
}

const Course = ({ parts }) => {
  return (
    <div>
      {parts.name} {parts.exercises}
    </div>
  )
} 

const App = () => {
  let x=0
const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
      <Header course={course.name} />

      <Part course={course} />

      <Total x={course.parts} />
          </li>
        ))}
      </ul>
</div>
  )
}

export default App
