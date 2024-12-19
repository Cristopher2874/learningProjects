import { Outlet, Link } from "react-router-dom";
import reactLogo from "/assets/react.svg"

const LayoutLogin = () => {
  return(
    <div className="flex flex-col h-screen overflow-hidden">
      <header className="bg-black text-white flex justify-between items-center p-4">
        <figure className="flex justify-center items-center">
          <img src={reactLogo} alt="Logo" className="w-8 h-auto"/>
        </figure>
        <nav className="flex justify-row items-auto ml-auto">
          <ul className="flex justify-row items-center gap-3">
            <li className=""><a href="#"><i className="fab fa-apple"></i></a></li>
            <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
            <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
            <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
            <li><Link to="#"><i className="fab fa-youtube"></i></Link></li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow flex-1 justify-center items-center bg-[url('/assets/login-back.jpg')] bg-cover bg-center"> 
        <div className="flex justify-center items-center w-full h-full bg-black bg-opacity-50">
          <Outlet />
        </div>
      </main>
      <footer className="bg-black text-white flex justify-center items-center p-4">
        <p>
          <Link to="#" className="p-5">Privacy policy</Link>
          <Link to="#" className="p-5">Code of ethics</Link>
          <span>&copy; 2024 InCtrl</span>
        </p>
      </footer>
    </div>
  )
};

export default LayoutLogin;