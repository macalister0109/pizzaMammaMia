import { useState } from 'react'
import './App.css'
import Producto from './components/Producto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Producto />
    </>
  )
}

export default App
