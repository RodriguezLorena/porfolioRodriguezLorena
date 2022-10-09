import Head from 'next/head'
import styles from '../styles/Home.module.css'
import animationData from "../lottie/home.json";
import Lottie from "react-lottie";
import PaginaInicial from '../componetes/PaginaInicial';
import Navbar from '../componetes/Navbar';
import Skill from '../componetes/Skill';
import SobreMi from '../componetes/SobreMi';
import Proyectos from '../componetes/Proyectos';
import Contacto from '../componetes/Contacto';




export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lorena Rodriguez Dev</title>
        <meta name="description" content="my porfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <PaginaInicial/>
      <SobreMi/>
      <Skill/>
      <Proyectos/>
      <Contacto/>
     
      
   
    </div>
  )
}
