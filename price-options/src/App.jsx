import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <DaisyNav></DaisyNav>
      <h1 className='text-7xl'>Vite + React</h1>
      <img
      className="mask mask-heart"
      src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
    </>
  )
}

export default App
