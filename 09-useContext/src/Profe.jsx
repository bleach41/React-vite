import React, { useContext } from 'react'
import { Context2 } from './context/Context2'


function Profe() {
    const { alumno } = useContext(Context2)
    const idioma = alumno[3].idioma
    return (
        <div className=" w-32 m-auto bg-sky-800 rounded-lg my-1">
            <h1>{alumno[idioma].boton1}:</h1>
            <img src={alumno[idioma].foto} alt="" />
            <h2>{alumno[idioma].nombre}</h2>
        </div>
    )
}

export default Profe