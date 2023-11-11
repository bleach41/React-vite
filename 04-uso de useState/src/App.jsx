import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function aumentar() {
    setCount(count + 1)
  }
  function retroceder() {
    setCount(count - 1)
  }
  function reset() {
    setCount(0)
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={retroceder}>Retroceder</button>
      <button onClick={reset}>Reiniciar</button>
    </>
  )
}

export default App
