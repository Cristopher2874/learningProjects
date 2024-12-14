import React from "react";
import './LayoutHome.css';
import { Outlet } from "react-router-dom";
import magnaLogo from "../../assets/LOGOS(1)/LOGOS/Magna-Logo-White-Reverse-MR-V1.0.png";

const Home = () => {
  return (
    <div className="body">
      <div className="hcontainer">
        <div className="slider">
          <header>
            <div className="logo">
              <a href="">
                <img src={magnaLogo} alt="MAGNA IN CTRL" />
              </a>
            </div>
          </header>
          <ul>
            <li><a href="#">Slider Item 1</a></li>
            <li><a href="#">Slider Item 2</a></li>
            <li><a href="#">Slider Item 3</a></li>
            <li><a href="#">Slider Item 4</a></li>
          </ul>
        </div>
        <div className="content">
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
