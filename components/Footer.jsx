import { FaBars, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import React from "react";
import Image from "next/image";
import Style from "../app/styles/footer.module.css";

function Footer() {
  return (
    <div className={Style.contenedorfooter}>
      <footer className={Style.footer}>
        <Image src={'/images/logoIco.png'} width={60} height={50} alt="logo" className={Style.logo} />

        <div className={Style.redes}>
        <a href="" className={Style.icon}>
          <FaWhatsapp />
        </a>
        <a href="" className={Style.icon}>
          <FaInstagram />
        </a>
        <a href="" className={Style.icon}>
          <FaFacebook />
        </a>
      </div>
        <ul className={Style.menu}>
          <li className={Style.menuItem}>About</li>
          <li className={Style.menuItem}>Politicy</li>
          <li className={Style.menuItem}>Contact</li>
          <li className={Style.menuItem}>Planes</li>
          <li className={Style.menuItem}>Filosofia</li>
        </ul>
        <span className={Style.copy}><i class="fa fa-copyright" aria-hidden="true"></i> © Todos los derechos reservados. 2023</span>
      </footer>
    </div>
  );
}

export default Footer;
