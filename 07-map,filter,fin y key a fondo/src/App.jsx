
import Actividad1 from './Actividad1'
import Actividad2 from './Actividad2'
import Actividad3 from './Actividad3'
import Actividad4 from './Actividad4'


import './App.css'

function App() {

  const reyes = [
    {
      nombre: "Atanagildo",
      reinado: 15,
      vacasComidas: 9,

    }, {
      nombre: "Ervigio",
      reinado: 7,
      vacasComidas: 3
    }, {
      nombre: "Ataúlfo",
      reinado: 5,
      vacasComidas: 16
    }, {
      nombre: "Leovigildo",
      reinado: 18,
      vacasComidas: 3
    }, {
      nombre: "Sisebuto",
      reinado: 9,
      vacasComidas: 13
    }, {
      nombre: "Recesvinto",
      reinado: 19,
      vacasComidas: 11
    }, {
      nombre: "Teodorico",
      reinado: 33,
      vacasComidas: 12
    }
  ]


  return (
    <div className="caja">
      <h1>ACTIVIDAD 1: uso del map()</h1>
      <Actividad1 reyes={reyes} />
      <h1>ACTIVIDAD 2: uso del filter()</h1>
      <Actividad2 reyes={reyes} />
      <h1>ACTIVIDAD 3: uso del find()</h1>
      <Actividad3 reyes={reyes} />
      <h1>ACTIVIDAD 4: generica</h1>
      <Actividad4 reyes={reyes} />
    </div>
  )
}

export default App
