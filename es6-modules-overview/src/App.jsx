import { useEffect, useState } from 'react'
import './App.css'
import Watch from './Components/Watch/Watch'

function App() {
  // way 3: load data from GitHub
  // declare state
  const [watches, setWatches] = useState([])
  // load data
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/subas-roy/watches-data/main/watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  }, [])

  // way 2: load data from '../public/watches.json'
  // declare state
  // const [watches, setWatches] = useState([])
  // load data
  // useEffect(() => {
  //   fetch('watches.json')
  //   .then(res => res.json())
  //   .then(data => setWatches(data))
  // }, [])

  // way 1: creating fake data
  // const watches = [
  //   { id: 1, name: "Omega Speedmaster", price: 5500 },
  //   { id: 2, name: "Rolex Submariner", price: 8500 },
  //   { id: 3, name: "Tag Heuer Carrera", price: 3000 },
  //   { id: 4, name: "Breitling Navitimer", price: 7200 },
  //   { id: 5, name: "Seiko Prospex", price: 1200 }
  // ]

  return (
    <>
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
