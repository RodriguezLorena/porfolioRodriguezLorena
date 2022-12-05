import Layout from "./Layout";
import style from "../styles/Proyectos.module.css";
import Image from "next/image";

const Proyectos = ({titlePro, title1, text1, title2, text2, title3, text3, title4, text4, title5, text5}) => {
  return (
    <Layout>
      <h1>{titlePro}</h1>
      <div className={style.container} id="Proyectos">
      
        <div className={style.cardslist}>
          <div className={style.card}>
            <div className={style.cardimage}>
              <Image className={style.img} src="/morenaRestoBar.jpeg" alt="imagen" width={800} height={500} />
            </div>
            <div className={style.cardtitle}>
              <p className={style.titlewhite}>{title1}</p>
            </div>
            <p>{text1}</p>
          </div>
        </div>
        <div className={style.cardslist}>
          <div className={style.card}>
            <div className={style.cardimage}>
              <Image className={style.img} src="/piDog.jpeg" alt="imagen" width={800} height={500} />
            </div>
            <div className={style.cardtitle}>
              <p className={style.titlewhite}>{title2}</p>
            </div>
            <p>{text2}</p>
          </div>
        </div>
        <div className={style.cardslist}>
          <div className={style.card}>
            <div className={style.cardimage}>
              <Image className={style.img} src="/pokePi.png" alt="imagen" width={800} height={500} />
            </div>
            <div className={style.cardtitle}>
              <p className={style.titlewhite}>{title3}</p>
            </div>
            <p>{text3}</p>
          </div>
        </div>
        <div className={style.cardslist}>
          <div className={style.card}>
            <div className={style.cardimage}>
            <Image className={style.img} src="/recetasPI.jpeg" alt="imagen" width={800} height={500} />
            </div>
            <div className={style.cardtitle}>
              <p className={style.titlewhite}>{title4}</p>
            </div>
            <p>{text4}</p>
          </div>
        </div>
        <div className={style.cardslist}>
          <div className={style.card}>
            <div className={style.cardimage}>
            <Image className={style.img} src="/proyectoJs.coderHouse.png" alt="imagen" width={800} height={500} />
            </div>
            <div className={style.cardtitle}>
              <p className={style.titlewhite}>{title5}</p>
            </div>
            <p>{text5}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Proyectos;
