import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='card bg-secondary mb-3'>
        <div className='card-body'>
          <h4 className='card-title'>
            Bienvenido
          </h4>
          <p className='card-text'>
            Puede leer más acerca de los procesos de la aplicación en el siguiente <Link href="/pdf/SOMET_2021.pdf" target='_blank'>paper</Link>, en el <Link href="/pdf/aes_img_reporte.pdf" target='_blank'>reporte de investigación</Link> o en la página de <Link href="/funcionamiento">funcionamiento</Link>.
          </p>
        </div>
      </div>
    </>
  )
}
