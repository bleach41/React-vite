import React, { useContext, useState } from 'react'
import Profe from './Profe'
import Ubicacion from './Ubicacion'
import { Context2 } from './context/Context2'

function Contenido2() {
    const { alumno } = useContext(Context2)
    const idioma = alumno[3].idioma
    const [oculatar1, setOculatar1] = useState(false)
    const [oculatar2, setOculatar2] = useState(false)

    const mostrar1 = () => {
        setOculatar1(!oculatar1)
        setOculatar2(false)
    }
    const mostrar2 = () => {
        setOculatar2(!oculatar2)
        setOculatar1(false)
    }

    return (
        <>
            <div className="flex flex-col text-center">
                <h1>{alumno[idioma].titulo}</h1>
                <h2>{alumno[idioma].texto}</h2>
                <div className="botones">
                    <button className="bg-sky-900 mx-1 p-2 text-cyan-50 rounded-lg hover:bg-sky-400" onClick={mostrar1}>{alumno[idioma].boton1}</button>
                    <button className="bg-sky-900 mx-1 p-2 text-cyan-50 rounded-lg hover:bg-sky-400" onClick={mostrar2}>{alumno[idioma].boton2}</button>
                </div>
                {oculatar1
                    ? <Profe />
                    : null
                }
                {oculatar2
                    ? <Ubicacion />
                    : null
                }

            </div>
        </>
    )
}

export default Contenido2