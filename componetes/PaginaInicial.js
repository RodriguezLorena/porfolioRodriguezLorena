import animationData from "../lottie/home.json";
import Lottie from "react-lottie";
import style from "../styles/PaginaInicial.module.css";
import Sidebar from "./Sidebar";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const PaginaInicial = () => {
  return (
    <div className={style.container}>
      <div className={style.text}>
      <p>Mi nombre es</p>
      <h1>Silvana Lorena Rodriguez</h1>
      <p>
        Te invito a conocer un poquito de mi. <br />
        Como soy, que hago y lo que me motiva
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
