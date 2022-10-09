import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lorena Rodriguez Dev</title>
        <meta name="description" content="my porfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <main className={styles.main}>
       Iniciando Porfolio
     </main>
    </div>
  )
}
