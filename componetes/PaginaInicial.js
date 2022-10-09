import animationData from "../lottie/home.json";
import animationDataMate from "../lottie/mate.json";
import Lottie from "react-lottie";
import style from "../styles/PaginaInicial.module.css";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultOptionsMate = {
  loop: true,
  autoplay: true,
  animationData: animationDataMate,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const PaginaInicial = () => {
  return (
    <div className={style.container}>
      <p>Mi nombre es</p>
      <h1>Silvana Lorena Rodriguez</h1>
      <p>
        Te invito a conocer un poquito de mi. <br />
        Como soy, que hago y lo que me motiva
      </p>

      <Lottie
        options={defaultOptions}
        style={{ height: "40%", width: "40%" }}
      />
      <span className={style.spam}>
        Un proyecto hecho con mucho mate 🧉 y amor 💖​
      </span>
    </div>
  );
};

export default PaginaInicial;
