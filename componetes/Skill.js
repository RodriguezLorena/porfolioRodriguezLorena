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
import {
  faCake,
  faHardDrive,
  faInbox,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";
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

const Skill = () => {
  return (
    <Layout>
      <div className={style.container} id="Skill">
        <h1>Mis Habilidades</h1>

        <Lottie
          options={defaultOptions}
          style={{ height: "40%", width: "40%" }}
        />
        <div className={style.containerIcons}>
          <FontAwesomeIcon
            icon={faReact}
            style={{
              width: "2rem",
              height: "2rem",
              color: "#9fb0bd",
              margin: "0.5rem",
            }}
          />

          <FontAwesomeIcon
            icon={faGithub}
            style={{
              width: "4rem",
              height: "4rem",
              color: "#9fb0bd",
              margin: "0.5rem",
            }}
          />
          <FontAwesomeIcon
            icon={faNode}
            style={{
              width: "4rem",
              height: "4rem",
              color: "#9fb0bd",
              margin: "0.5rem",
            }}
          />
          <FontAwesomeIcon
            icon={faJs}
            style={{
              width: "4rem",
              height: "4rem",
              color: "#9fb0bd",
              margin: "0.5rem",
            }}
          />
          <FontAwesomeIcon
            icon={faCss3}
            style={{
              width: "4rem",
              height: "4rem",
              color: "#9fb0bd",
              margin: "0.5rem",
            }}
          />
          <FontAwesomeIcon
            icon={faHtml5}
            style={{
              width: "4rem",
              height: "4rem",
              color: "#9fb0bd",
              margin: "0.5rem",
            }}
          />
          <FontAwesomeIcon
            icon={faBootstrap}
            style={{
              width: "4rem",
              height: "4rem",
              color: "#9fb0bd",
              margin: "0.5rem",
            }}
          />
          <FontAwesomeIcon
            icon={faSass}
            style={{
              width: "4rem",
              height: "4rem",
              color: "#9fb0bd",
              margin: "0.5rem",
            }}
          />
          <FontAwesomeIcon
            icon={faLess}
            style={{
              width: "4rem",
              height: "4rem",
              color: "#9fb0bd",
              margin: "0.5rem",
            }}
          />
          <FontAwesomeIcon
            icon={faFontAwesome}
            style={{
              width: "4rem",
              height: "4rem",
              color: "#9fb0bd",
              margin: "0.5rem",
            }}
          />
          <FontAwesomeIcon
            icon={faGoogle}
            style={{
              width: "4rem",
              height: "4rem",
              color: "#9fb0bd",
              margin: "0.5rem",
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Skill;
