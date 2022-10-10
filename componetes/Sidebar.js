import style from "../styles/Sidebar.module.css";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className={style.container}>
      <ul className={style.ul}>
        <li className={style.li}>
          <Link href="/">
            <a className={style.a} href="">
              Pagina Incial
            </a>
          </Link>
        </li>

        <li className={style.li}>
          <Link href="#SobreMi">
            <a className={style.a}>Sobre Mi</a>
          </Link>
        </li>
        <li className={style.li}>
          <Link href="#Skill">
            <a className={style.a}>Habilidades</a>
          </Link>
        </li>
        <li className={style.li}>
          <Link href="#Proyectos">
            <a className={style.a}>Proyectos</a>
          </Link>
        </li>
        <li className={style.li}>
          <Link href="#Contacto">
            <a className={style.a}>Contacto</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
