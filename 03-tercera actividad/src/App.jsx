import imagen0 from "../public/rey_ataulfo.png"
import imagen1 from "../public/rey_ervigio.png"
import imagen2 from "../public/rey_leogivildo.png"
import incognito from '../public/rey_incognito.png'
import './App.css'

function App() {


  let nombre = ["Rey 1", 'Rey 2', 'Rey 3']

  function cambiar(e) {

    if (e.target.src.includes('incognito')) {
      e.target.style.visibility = 'hidden'
    }
    else {
      e.target.parentNode.style.backgroundColor = "transparent"
      e.target.src = incognito

    }

  }

  function cambiarTexto(e) {
    if (e.target.innerHTML == 'visto') {
      e.target.innerHTML = ""
    } else {
      e.target.innerHTML = "visto"
    }
  }
  return (
    <>
      <main>
        <div className='card'>
          <img src={imagen0} onClick={cambiar} />
          <div onClick={cambiarTexto}>
            <h1>{nombre[0]}</h1>
          </div>
        </div>
        <div className='card'>
          <img src={imagen1} onClick={cambiar} />
          <div onClick={cambiarTexto}>
            <h1>{nombre[1]}</h1>
          </div>
        </div>
        <div className='card'>
          <img src={imagen2} onClick={cambiar} />
          <div onClick={cambiarTexto}>
            <h1>{nombre[2]}</h1>
          </div>
        </div>

      </main>
    </>
  )
}

export default App
