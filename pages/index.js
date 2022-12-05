import Head from "next/head";

import animationData from "../lottie/home.json";
import Lottie from "react-lottie";
import PaginaInicial from "../componetes/PaginaInicial";
import Navbar from "../componetes/Navbar";
import Skill from "../componetes/Skill";
import SobreMi from "../componetes/SobreMi";
import Proyectos from "../componetes/Proyectos";
import Contacto from "../componetes/Contacto";
import Link from "next/link";
import Layout from "../componetes/Layout";
import LenguageSelector from "../componetes/LenguageSelector";


export default function Home(props) {
  const { preText, title, text, titleSm, textSm, titleHab}= props;
  return (
    <Layout>
      <PaginaInicial 
      preText={preText}
      title={title}
      text={text}/>
      <SobreMi 
      titleSm={titleSm}
      textSm={textSm}/>
      <Skill 
      titleHab={titleHab}/>
      <Proyectos />
      <Contacto />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const res = await import(`../lenguajes/${locale}.json`);
  
  return {
    props: {
      preText: res.default.inicial.preText,
      title: res.default.inicial.title,
      text: res.default.inicial.text,

      titleSm: res.default.sobreMi.titleSm,
      textSm: res.default.sobreMi.textSm,

      titleHab: res.default.habilidades.titleHab,
    },
  };
}
