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

export default function Home() {
  return (
    <Layout>
      <PaginaInicial />

      <SobreMi />
      <Skill />
      <Proyectos />
      <Contacto />
    </Layout>
  );
}
