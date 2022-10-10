import Layout from "./Layout";
import style from "../styles/Proyectos.module.css";
import Image from "next/image";

const Proyectos = () => {
  return (
    <Layout>
      <div className={style.container} id="Proyectos">
        <h1>Mis Proyectos</h1>
        <Image src="/clima.png" alt="imagen" width={800} height={500} />

        <Image src="/landingMia.png" alt="imagen" width={800} height={500} />

        <Image src="/pokehome.png" alt="imagen" width={800} height={500} />

        <Image src="/proyectoJsImg.png" alt="imagen" width={800} height={500} />
        <Image src="/indexxxxx.png" alt="imagen" width={800} height={500} />
        <Image src="/portadaaaa.png" alt="imagen" width={800} height={500} />
      </div>
    </Layout>
  );
};

export default Proyectos;
