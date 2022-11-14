import style from "../styles/SobreMi.module.css";
import Layout from "./Layout";

const SobreMi = () => {
  return (
    <Layout>
      <div className={style.container} id="SobreMi">
        <h1>Sobre Mi</h1>
        <p>
        Soy una apasionada por el aprendisaje y me gusta trasmitir a otras personas los conocimientos que voy adquiriendo día tras día.
        Me inicie en el mundo de la programacion en el año 2021, y fue ahi cuando descubri que atraves de la tecnologia, no solo podia crear cosas increibles, sino tambien ayudar a otros. 
        Descubri mi pasion por los retos y la resolucion de problemas, y desde entonces no he parado de aprender. 
        Actualmente estoy en busca de mi primer trabajo IT, 
        me desenvuelvo como Full Stack Developer con orientación al desarrollo FronEnd.
        Tengo experiencia en el desarrollo de aplicaciones web con JavaScript junto con tecnologías como React, Redux, NodeJs, Express.js, PostgreSQL y Sequelize.js. Las cuales he puesto en práctica en algunos proyectos individuales y grupales donde fortalecí habilidades como el trabajo en equipo, la comunicación y adaptabilidad.
        </p>
      </div>
    </Layout>
  );
};

export default SobreMi;
