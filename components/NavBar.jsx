'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

function NavBar() {
  const [menuVisible, setMenuVisible] = useState(false);

  function mostrarOcultarMenu() {
    setMenuVisible(!menuVisible);
  }

  function seleccionar() {
    setMenuVisible(false);
  }

  const navClass = menuVisible ? 'responsive' : '';

  return (
    <header className="header">
      <a href="" className="logo">
        <Image src={'/images/logoIco.png'} alt="logo" width={50} height={40} />
        Athletic Programmer
      </a>
      <nav className={navClass}>
        <ul className="ul">
          <li>
            <Link legacyBehavior href={'/'}>
              <a href="" onClick={seleccionar}>
                Inicio
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href={'/about'}>
              <a href="" onClick={seleccionar}>
                Nosotros
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href={'/programms'}>
              <a href="" onClick={seleccionar}>
                Programas
              </a>
            </Link>
          </li>
          <li>
            <a href="" onClick={seleccionar}>
              Merchandising
            </a>
          </li>
          <li>
            <Link legacyBehavior href={'/contact'}>
              <a href="" onClick={seleccionar}>
                Contacto
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="redes">
        <a href="" target="_blank" className="Icon">
          <FaWhatsapp />
        </a>
        <a
          href="https://www.instagram.com/athletic_programmr/"
          target="_blank"
          className="Icon"
        >
          <FaInstagram />
        </a>
        <a href="" target="_blank" className="Icon">
          <FaFacebook />
        </a>
      </div>

      <div className="nav-responsive" onClick={mostrarOcultarMenu}>
        <div className="Icon">
          <FaBars />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
