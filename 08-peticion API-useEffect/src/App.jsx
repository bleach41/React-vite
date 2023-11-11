import './App.css'
import { useEffect, useState } from 'react'


function App() {

  const [nombre, setNombre] = useState('')
  const [imagen, setImagen] = useState('')

  useEffect(() => {
    const url = 'https://randomuser.me/api'
    const peticion = fetch(url)
    peticion
      .then((respuesta) => respuesta.json())
      .then((lectura) => {
        setImagen(`${lectura.results[0].picture.large}`)
        setNombre(`${lectura.results[0].name.first} ${lectura.results[0].name.last}`)
      })
      .catch((e) => alert(e.error))
  }, [])


  return (
    <div className="flex justify-center">
      <div className="mx-15 px-5">
        {nombre}
        <div>
          <img src={imagen} alt="" />
        </div>
      </div>
      <div className="mx-15 px-5">
        {nombre}
        <div>
          <img src={imagen} alt="" />
        </div>
      </div>
    </div>
  )
}

export default App
