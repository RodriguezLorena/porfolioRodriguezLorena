import Layout from "./Layout";
import style from "../styles/Proyectos.module.css";
import Image from "next/image";

const Proyectos = () => {
  return (
    <Layout>
      <h1>Mis Proyectos</h1>
      <div className={style.container} id="Proyectos">
        
        <div className={style.cardslist}>
          <div className={style.card}>
            <div className={style.cardimage}>
              <Image className={style.img} src="/morenaRestoBar.jpeg" alt="imagen" width={800} height={500} />
            </div>
            <div className={style.cardtitle}>
              <p className={style.titlewhite}>Morena Resto-Bar</p>
            </div>
            <p>Pagina Web estatica- html5, Css3, Bootstrap, Cludinary.</p>
          </div>
        </div>
        <div className={style.cardslist}>
          <div className={style.card}>
            <div className={style.cardimage}>
              <Image className={style.img} src="/piDog.jpeg" alt="imagen" width={800} height={500} />
            </div>
            <div className={style.cardtitle}>
              <p className={style.titlewhite}>App Dogs</p>
            </div>
            <p>Aplicacion- React, Redux, Node y Sequelize.</p>
          </div>
        </div>
        <div className={style.cardslist}>
          <div className={style.card}>
            <div className={style.cardimage}>
              <Image className={style.img} src="/pokePi.png" alt="imagen" width={800} height={500} />
            </div>
            <div className={style.cardtitle}>
              <p className={style.titlewhite}>Pokemon-App</p>
            </div>
            <p>Aplicacion- React, Redux, Node y Sequelize. Api externa- pokeapi</p>
          </div>
        </div>
        <div className={style.cardslist}>
          <div className={style.card}>
            <div className={style.cardimage}>
            <Image className={style.img} src="/recetasPI.jpeg" alt="imagen" width={800} height={500} />
            </div>
            <div className={style.cardtitle}>
              <p className={style.titlewhite}>App Recetas</p>
            </div>
            <p>Aplicacion- React, Redux, Node, Sequelize, Cssmodule. Api externa-  spoonacular </p>
          </div>
        </div>
        <div className={style.cardslist}>
          <div className={style.card}>
            <div className={style.cardimage}>
            <Image className={style.img} src="/proyectoJs.coderHouse.png" alt="imagen" width={800} height={500} />
            </div>
            <div className={style.cardtitle}>
              <p className={style.titlewhite}>Carrito de Compras</p>
            </div>
            <p>Simulador- JavaScript vanilla, jquery ajax, localStorage</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Proyectos;
