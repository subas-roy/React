import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <Todo task="learn react" isDone={true}></Todo>
      <Todo task="explore core concepts" isDone={true}></Todo>
      <Todo task="explore JSX" isDone={false}></Todo>
    </>
  )
}

export default App
