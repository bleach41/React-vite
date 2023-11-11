import imagen0 from '../public/rey_atanagildo.png'
import imagen1 from '../public/rey_leogivildo.png'
import { useRef } from 'react'
import './App.css'

function App() {
  let refNum = useRef()

  function incrementar(e) {

    e.target.innerHTML = Number(e.target.innerHTML) + 1
    if (e.target.innerHTML >= 10) {
      e.target.innerHTML = 1
    }
    if (e.target.innerHTML >= 7) {
      e.target.style.backgroundColor = "red"
    } else {
      e.target.style.backgroundColor = ""
    }

  }

  function cambiar(e) {

    if (e.target.src.includes('atanagildo')) {

      e.target.src = imagen1
    } else {
      e.target.src = imagen0
    }

  }

  function lectura(e) {

    refNum.current.innerHTML = Number(e.target.value)

  }


  return (
    <>
      <div className="container">
        <div ref={refNum} className="numero" onClick={incrementar}>1</div>
        <img src={imagen0} onClick={cambiar} alt="" />
        <input type="text" onChange={lectura} />
      </div>
    </>
  )
}

export default App
