import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';


const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo" className="logo" sizes="10px"/>
      <h1>Hound Express</h1>
      <nav>
        <a href="#inicio">Inicio</a>
        <a href="#registro">Registro de Guías</a>
        <a href="#estado">Estado General</a>
        <a href="#lista">Lista de Guías</a>
        <a href="#buscar">Buscar Guías</a>
        <a href="#historial">Historial de Guías</a>
      </nav>
    </header>
  );
};

export default Header;