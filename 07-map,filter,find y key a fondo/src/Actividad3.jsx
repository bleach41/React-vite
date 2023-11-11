import React from 'react'

function Actividad3({ reyes }) {

    const resultado = reyes.find(e => e.nombre.substring(0, 1) == 'e' || e.nombre.substring(0, 1) == 'E')

    return (
        <>
            {!resultado ? "no se ha encontrado" : resultado.nombre}
        </>
    )
}

export default Actividad3