import { Outlet } from "react-router-dom";
import './LayoutLogin.css'
import magnaLogo from "../../assets/LOGOS(1)/LOGOS/Magna-Logo-White-Reverse-MR-V1.0.png"

const LayoutLogin = () => {
  return(
    <div className="container">
      <header>
        <div className="logo">
          <img src={magnaLogo} alt="MAGNA IN CTRL" />
        </div>
        <nav>
          <ul>
            <li><a href="#"><i className="fab fa-apple"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
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