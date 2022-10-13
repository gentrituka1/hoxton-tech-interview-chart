
import { useState } from 'react'
import { Bar, BarChart, XAxis, YAxis } from 'recharts'
import './App.css'

type Student = {
  name: string
  submissions: {
    beavers: number
    stars: number
  }
}

const studentData = [
  {
    name: 'Stephen',
    submissions: {
      beavers: 3,
      stars: 2,
    }
  },
  {
    name: 'Eduardo',
    submissions: {
      beavers: 7,
      stars: 1,
    }
  },
  {
    name: 'Pepe',
    submissions: {
      beavers: 6,
      stars: 9,
    }
  },
  {
    name: 'Gigachad',
    submissions: {
      beavers: 0,
      stars: 10,
    }
  },
]

// Using the Recharted library, create a graph as similar as you can, to the one in the #Classroom

function App() {
  const [students, setStudents] = useState<Student[]>(studentData)

  function barLabel({ x, y, width, height, value }: any) {
    return (
      <text x={x + width / 2} y={y + height / 2} fill="#000" textAnchor="middle" dominantBaseline="middle">
        {value}
      </text>
    )
  }

  return <>
    <form onSubmit={(event) => {
      event.preventDefault()

      const newStudent = {
        name: event.target.name.value,
        submissions: {
          beavers: Number(event.target.beavers.value),
          stars: Number(event.target.stars.value)
        }
      }

      setStudents([...students, newStudent])
    }}>
      <h2>Add a Student to Chart</h2>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="beavers">Beavers</label>
      <input type="number" name="beavers" id="beavers" />
      <label htmlFor="stars">Stars</label>
      <input type="number" name="stars" id="stars" />
      <button type="submit">Add Student</button>
    </form>
    <BarChart width={600} height={300} data={students}>
      <XAxis dataKey="name" /> 
      <YAxis />
      <Bar dataKey="submissions.beavers" barSize={30} fill="#da9249" label={barLabel} />
      <Bar dataKey="submissions.stars" barSize={30} fill="#ffd700" label={barLabel} />
    </BarChart>
    <div>
      Increase Beavers for:
      {students.map((student) => {
        return <button onClick={() => {
          setStudents(students.map((s) => {
              if(s.name === student.name) {
                return {
                  ...s,
                  submissions: {
                    ...s.submissions,
                    beavers: s.submissions.beavers + 1,
                  }
                }
              }
              return s
            }))
        }}>{student.name}</button>
      })}
    </div>
    <div>
      Increase Stars for:
      {students.map((student) => {
        return <button onClick={() => {
          setStudents(students.map((s) => {
              if(s.name === student.name) {
                return {
                  ...s,
                  submissions: {
                    ...s.submissions,
                    stars: s.submissions.stars + 1,
                  }
                }
              }
              return s
            }))
        }}>{student.name}</button>
      })}
    </div>
  </>
}

export default App
