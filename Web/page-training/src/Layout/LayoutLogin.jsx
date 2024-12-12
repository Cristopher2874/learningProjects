import React from "react";
import { Outlet } from "react-router-dom";
import './LayoutLogin.css'
import magnaLogo from "../assets/LOGOS(1)/LOGOS/Magna-Logo-White-Reverse-MR-V1.0.png"

const LayoutLogin = () => {
  return(
    <div className="container">
      <header>
        <div className="logo">
          <img src={magnaLogo} alt="MAGNA IN CTRL" />
        </div>
        <nav>
          <ul>
            <li><a href="#"><i className="fab fa-apple">H1</i></a></li>
            <li><a href="#"><i className="fab fa-twitter">H2</i></a></li>
            <li><a href="#"><i className="fab fa-facebook-f">H3</i></a></li>
            <li><a href="#"><i className="fab fa-instagram">H4</i></a></li>
            <li><a href="#"><i className="fab fa-youtube">H4</i></a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="overlay">
          <Outlet />
        </div>
      </main>
      <footer>
        <p>
          <a href="#">Aviso de Privacidad</a>
          <a href="#">Éthos</a>
          <span>&copy; 2024 MAGNA</span>
        </p>
      </footer>
    </div>
  )
};

export default LayoutLogin;