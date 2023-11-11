import React, { useContext } from 'react'
import { Context2 } from './context/Context2'

function Ubicacion() {
    const { alumno } = useContext(Context2)
    const idioma = alumno[3].idioma
    return (
        <div className=" w-32 m-auto bg-sky-800 rounded-lg my-1">
            {alumno[idioma].direccion}
        </div>
    )
}

export default Ubicacion