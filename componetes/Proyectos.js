import Layout from "./Layout";
import style from "../styles/Proyectos.module.css";
import Image from "next/image";

const Proyectos = () => {
  return (
    <Layout>
      <div className={style.container} id="Proyectos">
        <h1>Mis Proyectos</h1>
        <div className={style.cardslist}>
          <div className={style.card}>
            <div className={style.cardimage}>
              <Image className={style.img} src="/clima.png" alt="imagen" width={800} height={500} />
            </div>
            <div className={style.cardtitle}>
              <p className={style.titlewhite}>Titulo</p>
            </div>
          </div>
        </div>
        <div className={style.cardslist}>
          <div className={style.card}>
            <div className={style.cardimage}>
              <Image className={style.img} src="/landingMia.png" alt="imagen" width={800} height={500} />
            </div>
            <div className={style.cardtitle}>
              <p className={style.titlewhite}>Titulo</p>
            </div>
          </div>
        </div>
        <div className={style.cardslist}>
          <div className={style.card}>
            <div className={style.cardimage}>
              <Image className={style.img} src="/pokehome.png" alt="imagen" width={800} height={500} />
            </div>
            <div className={style.cardtitle}>
              <p className={style.titlewhite}>Titulo</p>
            </div>
          </div>
        </div>
        <div className={style.cardslist}>
          <div className={style.card}>
            <div className={style.cardimage}>
            <Image className={style.img} src="/proyectojs.png" alt="imagen" width={800} height={500} />
            </div>
            <div className={style.cardtitle}>
              <p className={style.titlewhite}>Titulo</p>
            </div>
          </div>
        </div>
        <div className={style.cardslist}>
          <div className={style.card}>
            <div className={style.cardimage}>
            <Image className={style.img} src="/indexxxxx.png" alt="imagen" width={800} height={500} />
            </div>
            <div className={style.cardtitle}>
              <p className={style.titlewhite}>Titulo</p>
            </div>
          </div>
        </div>
        <div className={style.cardslist}>
          <div className={style.card}>
            <div className={style.cardimage}>
            <Image className={style.img} src="/portadaaaa.png" alt="imagen" width={800} height={500} />
            </div>
            <div className={style.cardtitle}>
              <p className={style.titlewhite}>Titulo</p>
            </div>
          </div>
        </div>        
      </div>
    </Layout>
  );
};

export default Proyectos;
