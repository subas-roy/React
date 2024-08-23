import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'

function App() {
  
  function handleClick() {
    alert('button clicked')
  }

  const handleClick2 = () => {
    alert('button clicked')
  }

  const addToFive = (num) => {
    alert(num + 5)
  }

  return (
    <>
      <h1>React Core Concepts Part 2</h1>
      <Users></Users>
      <Team></Team>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleClick2}>Click 2</button>
      {/* using arrow function in Jsx */}
      <button onClick={() => {alert('You clicked me')}}>Click 3</button>
      {/* inline event handler in Jsx */}
      <button onClick={function inline() {alert('You clicked me')}}>Click inline</button>
      {/* passing a function */}
      <button onClick={() => addToFive(4)}>Click 4</button>
      <Counter></Counter>
    </>
  )
}

export default App
