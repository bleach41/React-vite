import React from 'react'

function Cena({ nombre, color, precio, setTotal }) {

    const ruta = 'http://html6.es/img/rey_'
    const imagen = `${ruta}${nombre.toLowerCase()}.png`


    function comprar(e) {

        e.target.parentNode.parentNode.style.display = 'none'
        setTotal((total) => total + precio)
    }

    return (
        <>
            <div className='rey' style={{ backgroundColor: color }}>
                <h1>{nombre}</h1>
                <img src={imagen} />
                <div className='titulo'>Precio</div>
                <div className='preciio'>{precio}$</div>
                <div>
                    <button onClick={comprar}>
                        Comprar
                    </button>
                </div>
            </div>
        </>
    )
}

export default Cena