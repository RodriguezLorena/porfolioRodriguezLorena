import Layout from "./Layout";
import style from "../styles/Contacto.module.css";

const Contacto = ({titleCon, textCon, btnCallToAction ,spamContact}) => {
  return (
    <Layout>
      <div className={style.container} id="Contacto">
        <h1>{titleCon}</h1>
        <p>
         {textCon}
        </p>

        <button>
          <a
            href="mailto:lorenarodriguezdev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {btnCallToAction}
          </a>
        </button>
        <span className={style.spam}>
        {spamContact}
      </span>
      </div>
    </Layout>
  );
};

export default Contacto;
