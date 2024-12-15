import { Outlet } from "react-router-dom";
import magnaLogo from "/public/assets/LOGOS(1)/LOGOS/Magna-Logo-White-Reverse-MR-V1.0.png"

const LayoutLogin = () => {
  return(
    <div className="flex flex-col h-screen overflow-hidden">
      <header className="bg-black text-white flex justify-between items-center p-4">
        <figure className="flex justify-center items-center">
          <img src={magnaLogo} alt="MAGNA IN CTRL" className="w-36 h-auto"/>
        </figure>
        <nav className="flex justify-row items-auto ml-auto">
          <ul className="flex justify-row items-center gap-3">
            <li className=""><a href="#"><i className="fab fa-apple"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow flex-1 justify-center items-center bg-[url('/public/assets/login-back.jpg')] bg-cover bg-center"> 
        <div className="flex justify-center items-center w-full h-full bg-black bg-opacity-50">
          <Outlet />
        </div>
      </main>
      <footer className="bg-black text-white flex justify-center items-center p-4">
        <p>
          <a href="#" className="p-5">Aviso de Privacidad</a>
          <a href="#" className="p-5">Éthos</a>
          <span>&copy; 2024 MAGNA</span>
        </p>
      </footer>
    </div>
  )
};

export default LayoutLogin;