import style from "../styles/Navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faServicestack, faCcMastercard, faGoogle, faBitcoin, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCake, faHardDrive, faInbox, faVoicemail } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className={style.container}>
        <div className={style.content}>
        <h1>  RSL </h1>
        <div>
        <FontAwesomeIcon
                icon={faLinkedin}
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
                  width: "2rem",
                  height: "2rem",
                  color: "#9fb0bd",
                  margin: "0.5rem",
                }}
              />
               <FontAwesomeIcon
                icon={faInbox}
                style={{
                  width: "2rem",
                  height: "2rem",
                  color: "#9fb0bd",
                  margin: "0.5rem",
                }}
              />
             </div> 
              </div>
    </div>
  )
}

export default Navbar