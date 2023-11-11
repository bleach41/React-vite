import React, { useContext } from 'react'

import { Context } from './context/Context'

function Pagina1() {
    const { color } = useContext(Context)
    return (

        <div className="pagina1" style={{ background: color }}>
            Pagina1
        </div >

    )
}

export default Pagina1