import style from "../styles/Navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faServicestack, faCcMastercard, faGoogle, faBitcoin, faLinkedin, faGithub, faReact } from "@fortawesome/free-brands-svg-icons";
import { faCake, faFile, faFileLines, faHardDrive, faInbox, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

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
              
               <a href="https://docs.google.com/document/d/1mzD9LveWeV9Z-gaUrB-j2wKf4ujPVURrtPK3WZliQtM/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
               <FontAwesomeIcon
                icon={faFileLines}
                style={{
                  width: "2rem",
                  height: "2rem",
                  color: "#9fb0bd",
                  margin: "0.5rem",
                }}
              />
              </a>
             
              
             </div> 
              </div>
    </div>
  )
}

export default Navbar