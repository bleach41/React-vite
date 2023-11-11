import React, { useContext } from 'react'
import { Context } from './context/Context'


function Colores() {
    const { setColor } = useContext(Context)
    return (
        <div className="colores">
            <div className="color" onClick={() => setColor("rgb(23, 87, 87)")}></div>
            <div className="color" onClick={() => setColor("rgb(178, 20, 26)")}></div>
            <div className="color" onClick={() => setColor("rgb(33, 101, 44)")}></div>
            <div className="color" onClick={() => setColor("rgb(141, 20, 182)")}></div>
        </div>
    )
}

export default Colores