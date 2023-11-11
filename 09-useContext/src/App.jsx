
import './App.css'
import Pagina1 from './Pagina1'
import Pagina2 from './Pagina2'
import Colores from './Colores'
import { Datos } from './context/Context'
import { Datos2 } from './context/Context2'

function App() {


  return (
    <>
      <Datos>
        <div className="app">
          <Pagina1 />
          <Pagina1 />
          <Pagina1 />

        </div>
        <Colores />
      </Datos>
      <Datos2>
        <div className="actividad2">
          <Pagina2 />
        </div>
      </Datos2>
    </>
  )
}

export default App
