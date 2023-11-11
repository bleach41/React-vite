import React from 'react'

function Actividad4({ reyes }) {

    const resultado = reyes.filter(e => e.reinado > 10 && e.vacasComidas > 10).map(e =>
        <div key={e.nombre}>
            {e.nombre}
            <div className='votos' onClick={sumar}>0</div>
        </div>
    )

    function sumar(e) {

        ++e.target.innerHTML
    }


    return (
        <>
            {resultado}
        </>
    )
}

export default Actividad4