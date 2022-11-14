import Layout from "./Layout";
import style from "../styles/Contacto.module.css";

const Contacto = () => {
  return (
    <Layout>
      <div className={style.container} id="Contacto">
        <h1>Contactame</h1>
        <p>
          Actualmente estoy buscando nuevos retos, motivada por desempeñarme de
          forma optima, conjunta, eficiente y creativa, asumiendo riesgos que
          nos lleven a cumplir nuestros objetivos
        </p>

        <button>
          <a
            href="mailto:lorenarodriguezdev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            CONTACTAME: lorenarodriguezdev@gmail.com
          </a>
        </button>
        <span className={style.spam}>
        Un proyecto hecho con mucho mate 🧉 y amor 💖​
      </span>
      </div>
    </Layout>
  );
};

export default Contacto;
