import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import magnaLogo from "/public/assets/LOGOS(1)/LOGOS/Magna-Logo-White-Reverse-MR-V1.0.png"

const Home = () => {
  const navigate = useNavigate();
  const handleSlider = (event, route) => {
    event.preventDefault();
    navigate(`/home/${route}`);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden"> 
      <div className="flex flex-row h-full">
        <aside className="w-fit-content bg-black text-white flex flex-col p-3">
          <header className="mb-4">
              <a href="" className="list-none p-3 mb-6">
                <img src={magnaLogo} alt="MAGNA IN CTRL" className="max-h-7"/>
              </a>
          </header>
          <nav className="flex-1">
            <ul className="flex flex-col space-y-4 ml-1 justify-start items-start p-1">
              <li>
                <a href="/" onClick={(event) => handleSlider(event, "account")}> <i className="fas fa-user-circle"></i> Account</a>
              </li>
              <li>
                <a href="/" onClick={(event) => handleSlider(event, "")}> <i className="fas fa-tachometer-alt"></i> Dashboard</a>
              </li>
              <li><a href="/" onClick={(event) => handleSlider(event, "calendar")}> <i className="fas fa-calendar"></i> Calendar</a></li>
              <li><a href="/" onClick={(event) => handleSlider(event, "inbox")}> <i className="fas fa-inbox"></i> InBox</a></li>
            </ul>
          </nav>
          <a href="/" className="flex justify-center text-white h-8 bg-[#da291c] items-center rounded-md mt-auto">Salir</a>
        </aside>
          <main className="flex-1 p-0 justify-center items-center bg-white overflow-auto">
            <Outlet />
          </main>
      </div>
    </div>
  );
};

export default Home;
