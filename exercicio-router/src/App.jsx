import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu'
import Rodape from './components/Rodape'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu></Menu>
      <Outlet/>
      <Rodape></Rodape>

    </>
  )
}

export default App
