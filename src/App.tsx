
import { Bar, BarChart, XAxis, YAxis } from 'recharts'
import './App.css'
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

  function barLabel({ x, y, width, height, value }: any) {
    return (
      <text x={x + width / 2} y={y + height / 2} fill="#000" textAnchor="middle" dominantBaseline="middle">
        {value}
      </text>
    )
  }

  return <>
    <BarChart width={600} height={300} data={studentData}>
      <XAxis dataKey="name" /> 
      <YAxis />
      <Bar dataKey="submissions.beavers" barSize={30} fill="#da9249" label={barLabel} />
      <Bar dataKey="submissions.stars" barSize={30} fill="#ffd700" label={barLabel} />
    </BarChart>
  </>

}

export default App
