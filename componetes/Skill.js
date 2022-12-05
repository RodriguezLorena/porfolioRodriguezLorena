import style from "../styles/Skill.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3,
  faFontAwesome,
  faGithub,
  faGoogle,
  faHtml5,
  faJs,
  faLess,
  faNode,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import Layout from "./Layout";

// import animationData from "../lottie/habilidades.json";
// import Lottie from "react-lottie";

// const defaultOptions = {
//   loop: true,
//   autoplay: true,
//   animationData: animationData,
//   rendererSettings: {
//     preserveAspectRatio: "xMidYMid slice",
//   },
// };

const Skill = ({titleHab}) => {
  return (
    <Layout>
      <div className={style.container} id="Skill">
        <h1>{titleHab}</h1>
       
      
        <div className={style.containerIcons}>
          <FontAwesomeIcon
          className={style.cont}
            icon={faReact}
            style={{
              width: "2rem",
              height: "2rem",
              color: "rgb(201, 47, 60)",
              margin: "0.5rem",
            }}
          />

          <FontAwesomeIcon
          className={style.cont}
            icon={faGithub}
            style={{
              width: "4rem",
              height: "4rem",
              color: "rgb(201, 47, 60)",
              margin: "0.5rem",
            }}
          />
          <FontAwesomeIcon
          className={style.cont}
            icon={faNode}
            style={{
              width: "4rem",
              height: "4rem",
              color: "rgb(201, 47, 60)",
              margin: "0.5rem",
            }}
          />
          <FontAwesomeIcon
          className={style.cont}
            icon={faJs}
            style={{
              width: "4rem",
              height: "4rem",
              color: "rgb(201, 47, 60)",
              margin: "0.5rem",
            }}
          />
          <FontAwesomeIcon
          className={style.cont}
            icon={faCss3}
            style={{
              width: "4rem",
              height: "4rem",
              color: "rgb(201, 47, 60)",
              margin: "0.5rem",
            }}
          />
          <FontAwesomeIcon
          className={style.cont}
            icon={faHtml5}
            style={{
              width: "4rem",
              height: "4rem",
              color: "rgb(201, 47, 60)",
              margin: "0.5rem",
            }}
          />
          <FontAwesomeIcon
          className={style.cont}
            icon={faBootstrap}
            style={{
              width: "4rem",
              height: "4rem",
              color: "rgb(201, 47, 60)",
              margin: "0.5rem",
            }}
          />
          <FontAwesomeIcon
          className={style.cont}
            icon={faSass}
            style={{
              width: "4rem",
              height: "4rem",
              color: "rgb(201, 47, 60)",
              margin: "0.5rem",
            }}
          />
          <FontAwesomeIcon
          className={style.cont}
            icon={faLess}
            style={{
              width: "4rem",
              height: "4rem",
              color: "rgb(201, 47, 60)",
              margin: "0.5rem",
            }}
          />
          <FontAwesomeIcon
          className={style.cont}
            icon={faFontAwesome}
            style={{
              width: "4rem",
              height: "4rem",
              color: "rgb(201, 47, 60)",
              margin: "0.5rem",
            }}
          />
          <FontAwesomeIcon
          className={style.cont}
            icon={faGoogle}
            style={{
              width: "4rem",
              height: "4rem",
              color: "rgb(201, 47, 60)",
              margin: "0.5rem",
            }}
          />
        </div>
      
      </div>
    </Layout>
  );
};

export default Skill;
