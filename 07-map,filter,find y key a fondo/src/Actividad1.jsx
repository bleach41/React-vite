import React from 'react'

function Actividad1({ reyes }) {
    const url = "https://html6.es/img/rey_"

    const resultado = reyes.map(e =>
        <div key={e.nombre} className='reyes'>
            <span className="rojo">
                {e.nombre.toUpperCase()} </span>
            ha comido {e.reinado * e.vacasComidas * 30} vacas en sus {e.reinado} meses en su reinado.
            <img src={url + e.nombre.toLowerCase() + '.png'} alt="" />

        </div>)


    return (
        <div className="contenedor">
            {resultado}
        </div>
    )
}

export default Actividad1