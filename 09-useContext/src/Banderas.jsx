import React, { useContext } from 'react'
import { Context2 } from './context/Context2'


function Banderas() {

    const { alumno } = useContext(Context2)
    const { setAlumno } = useContext(Context2)

    const cambio = () => {
        setAlumno(
            alumno.map((dato, index) => index == 3 ? { ...dato, idioma: 0 } : { ...dato })
        )
    }
    const cambio1 = () => {
        setAlumno(
            alumno.map((dato, index) => index == 3 ? { ...dato, idioma: 1 } : { ...dato })
        )
    }
    const cambio2 = () => {
        setAlumno(
            alumno.map((dato, index) => index == 3 ? { ...dato, idioma: 2 } : { ...dato })
        )
    }
    return (
        <>
            <div className="flex justify-center gap-2">
                <div className="Spanish" onClick={cambio} >
                    <img src="../public/spain.jpg" className="cursor-pointer" alt="" />
                </div>
                <div className="English" onClick={cambio1}>
                    <img src="../public/uk.png" className="cursor-pointer" alt="" />
                </div>
                <div className="France" onClick={cambio2}>
                    <img src="../public/francia.png" className="cursor-pointer" alt="" />
                </div>
            </div>

        </>
    )
}

export default Banderas