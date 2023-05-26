import React from 'react'
import Link from 'next/link'

function Encrypt() {
    return (
        <div className='card bg-secondary mb-3'>
            <div className='card-body'>
                <h4 className='card-title'>
                    Proceso de encriptación de una imágen
                </h4>
                <p className='card-text'>
                    Puede leer el proceso de encriptación en el siguiente <Link href="/pdf/SOMET_2021.pdf" target='_blank'>paper</Link>, en el <Link href="/pdf/aes_img_reporte.pdf" target='_blank'>reporte de investigación</Link> o en la página de <Link href="/funcionamiento">funcionamiento</Link>.
                </p>
            </div>
        </div>
    )
}

export default Encrypt