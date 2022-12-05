import style from "../styles/SobreMi.module.css";
import Layout from "./Layout";
import animationData from "../lottie/habilidades.json";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};


const SobreMi = ({titleSm, textSm}) => {
  return (
    <Layout>
      <div className={style.container} id="SobreMi">
        <h1>{titleSm}</h1>
        <div>
        <Lottie
          options={defaultOptions}
          style={{ height: "30%", width: "30%" }}
        />
        <p>
          {textSm}
        </p>
        </div>
      </div>
    </Layout>
  );
};

export default SobreMi;
