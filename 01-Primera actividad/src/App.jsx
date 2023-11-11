import imagen0 from "../public/rey_ataulfo.png"
import imagen1 from "../public/rey_ervigio.png"
import imagen2 from "../public/rey_leogivildo.png"
import './App.css'

function App() {
  let nombre = ["Rey 1", 'Rey 2', 'Rey 3']
  return (
    <>
      <main>
        <div className='card'>
          <img src={imagen0} />
          <h1>{nombre[0]}</h1>
        </div>
        <div className='card'>
          <img src={imagen1} />
          <h1>{nombre[1]}</h1>
        </div>
        <div className='card'>
          <img src={imagen2} />
          <h1>{nombre[2]}</h1>
        </div>

      </main>
    </>
  )
}

export default App
