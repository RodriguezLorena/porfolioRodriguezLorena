import animationData from "../lottie/home.json";
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

const PaginaInicial = ({preText, title, text}) => {
  return (
    <div className={style.container}>
      <div className={style.text}>
      <p>{preText}</p>
      <h1>{title}</h1>
      <p>
        {text}
      </p>
      </div>
    
      <Lottie
        options={defaultOptions}
        style={{ height: "100", width:"100" }}
      /> 
    </div>
  );
};

export default PaginaInicial;
