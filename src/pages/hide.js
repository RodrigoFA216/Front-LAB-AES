import Link from 'next/link'
import React, { useState } from 'react'


function Hide() {
    const [file, setFile] = useState();
    return (
        <div className='card bg-secondary mb-3'>
            <div className='card-body'>
                <h4 className='card-title'>
                    Proceso de ocultamiento de color en una imágen
                </h4>
                <p className='card-text'>
                    Puede leer el proceso de ocultamiento de la información de color en el siguiente <Link href="/pdf/SOMET_2021.pdf" target='_blank'>paper</Link>, en el <Link href="/pdf/aes_img_reporte.pdf" target='_blank'>reporte de investigación</Link> o en la página de <Link href="/funcionamiento">funcionamiento</Link>.
                </p>
                <form
                    onSubmit={async (e) => {
                        e.preventDefault();
                        if (!file) return;
                        else console.log(file)
                        // const res = await fetch('/api/upload')
                        // console.log(res)
                    }}
                >
                    <label>
                        Subir archivo
                    </label>
                    <br></br>
                    <input type='file'
                        onChange={(e) => {
                            setFile(e.target.files[0])
                        }}
                    />
                    <br></br>
                    <button>
                        Subir
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Hide