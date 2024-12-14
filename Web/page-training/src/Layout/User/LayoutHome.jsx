import React from "react";
import './LayoutHome.css';
import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import magnaLogo from "../../assets/LOGOS(1)/LOGOS/Magna-Logo-White-Reverse-MR-V1.0.png";

const Home = () => {
  const navigate = useNavigate();
  const handleSlider = (event, route) => {
      event.preventDefault();
      navigate(`/home/${route}`);
  };

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
            <li><a href="/" onClick={(event) => handleSlider(event, "account")}>Account</a></li>
            <li><a href="/" onClick={(event) => handleSlider(event, "")}>Dashboard</a></li>
            <li><a href="/" onClick={(event) => handleSlider(event, "calendar")}>Calendar</a></li>
            <li><a href="/" onClick={(event) => handleSlider(event, "inbox")}>InBox</a></li>
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
