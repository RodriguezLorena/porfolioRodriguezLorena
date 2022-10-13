import style from "../styles/Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faServicestack, faCcMastercard, faGoogle, faBitcoin, faLinkedin, faGithub, faReact } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard, faCake, faEnvelope, faFile, faFileCode, faFileLines, faHardDrive, faHouse, faInbox, faUserGear, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


const Sidebar = () => {
  return (
    <div className={style.container}>
      <ul className={style.ul}>
        <li className={style.li}>
          <Link href="/">
            <a className={style.a} href="">
            <FontAwesomeIcon
                icon={faHouse}
                style={{
                  width: "2rem",
                  height: "2rem",
                  color: "#9fb0bd",
                  margin: "0.5rem",
                }}/>
            </a>
          </Link>
        </li>

        <li className={style.li}>
          <Link href="#SobreMi">
            <a className={style.a}>
              <FontAwesomeIcon
                icon={faAddressCard}
                style={{
                  width: "2rem",
                  height: "2rem",
                  color: "#9fb0bd",
                  margin: "0.5rem",
                }}/>
                </a>
          </Link>
        </li>
        <li className={style.li}>
          <Link href="#Skill">
            <a className={style.a}>
            <FontAwesomeIcon
                icon={faUserGear}
                style={{
                  width: "2rem",
                  height: "2rem",
                  color: "#9fb0bd",
                  margin: "0.5rem",
                }}/>
            </a>
          </Link>
        </li>
        <li className={style.li}>
          <Link href="#Proyectos">
            <a className={style.a}>
            <FontAwesomeIcon
                icon={faFileCode}
                style={{
                  width: "2rem",
                  height: "2rem",
                  color: "#9fb0bd",
                  margin: "0.5rem",
                }}/>
            </a>
          </Link>
        </li>
        <li className={style.li}>
          <Link href="#Contacto">
            <a className={style.a}>
            <FontAwesomeIcon
                icon={faEnvelope}
                style={{
                  width: "2rem",
                  height: "2rem",
                  color: "#9fb0bd",
                  margin: "0.5rem",
                }}/>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
