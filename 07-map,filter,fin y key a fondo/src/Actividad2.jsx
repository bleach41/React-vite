import React from 'react'

function Actividad2({ reyes }) {

    function borrar(e) {

        e.target.parentNode.remove()
    }

    return (<>
        {reyes.filter(e => !e.nombre.includes('g')).map(e =>
            <div key={e.nombre}>
                {e.nombre}
                <button onClick={borrar}>Borrar</button>
            </div>)}
    </>
    )
}

export default Actividad2