import React from 'react'
import Contenido2 from './Contenido2'
import Banderas from './Banderas'



function Pagina2() {
    return (
        <>

            <div className="mt-20 pt-10 bg-gray-400">
                <div className="Banderas">
                    <Banderas />

                </div>
                <div className="Contenido">
                    <Contenido2 />

                </div>
            </div >

        </>
    )
}

export default Pagina2