import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Funcionamiento() {
    return (
        <div className='card bg-secondary mb-3'>
            <div className='card-body'>
                <h2 className='card-title'>
                    aplicación para la Protección de Imágenes de Color mediante Técnicas de Esteganografía y Cifrado
                </h2>
                <br></br>
                <h4>
                    Proceso de ocultación de la información:
                </h4>
                <p className='card-text'>
                    El método de ocultamiento de datos LSB (Least Significant Bit) es una técnica común de esteganografía que consiste en ocultar datos en los bits menos significativos de una imagen sin alterar significativamente su apariencia visual.
                    <br></br>
                    En comparación con otras técnicas de esteganografía, también permite ocultar una cantidad relativamente grande de datos sin afectar la calidad visual de la imagen, lo que es importante para evitar que terceros detecten la presencia de información oculta en la imagen ya que esta técnica aprovecha el hecho de que los datos digitales se almacenan en una imagen en forma de bits, y que los bits menos significativos de los valores de píxel tienen menos impacto en la calidad de la imagen.
                    <br></br>
                    <image
                        src="/images/Desarrollo_LSB_GO.png"
                        alt='If you can see this, something was wrong'
                    />
                    <br></br>
                    Al ocultar los datos en los bits menos significativos de los valores de píxel, el cambio en la calidad de la imagen es mínimo y difícil de detectar visualmente lo que la hace atractiva para aplicaciones prácticas como la protección de información en imágenes. Aunque existen técnicas más sofisticadas que pueden ser más efectivas en la ocultación de datos, estas pueden ser más complejas y requerir más tiempo y recursos para implementar, lo que las hace menos adecuadas para aplicaciones prácticas.
                </p>
                <br></br>
                <div class="card-footer text-body-secondary">
                    Puede leer más a detalle sobre el proceso y funcionamiento de la aplicación en el siguiente <Link href="/pdf/SOMET_2021.pdf" target='_blank'>paper</Link>, o en el <Link href="/pdf/aes_img_reporte.pdf" target='_blank'>reporte de investigación</Link>.
                </div>
            </div>
        </div>
    )
}

export default Funcionamiento