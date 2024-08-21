import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'

function App() {
  const [count, setCount] = useState(0)

  const actors = ["Asif", "Noor", "Nakib", "Dakib"];
  const singers  = [
    {id:1, name:'Dr. Mahfuzur', age:68},
    {id:2, name:'Eva Rahman', age:38},
    {id:3, name:'Shuvo Dev', age:25},
    {id:4, name:'Pritom', age:40}
  ];
  return (
    <>
      <h1>Vite + React</h1>
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      <Actor name="Noor Mohammad"></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      <Todo task="learn react" isDone={true}></Todo>
      <Todo task="explore core concepts" isDone={false}></Todo>
      <Todo task="explore JSX" isDone={true}></Todo>
    </>
  )
}

export default App
