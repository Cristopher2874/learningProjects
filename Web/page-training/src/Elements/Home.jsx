import React from "react";
import './Home.css'
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
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
        <Outlet />
      </main>
    </div>
  )
};

export default Home;