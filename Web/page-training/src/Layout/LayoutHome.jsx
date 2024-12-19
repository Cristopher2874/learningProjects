import { Outlet, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import reactLogo from "/assets/react.svg"

const Home = () => {
  const navigate = useNavigate();
  const handleSlider = (event, route) => {
    event.preventDefault();
    navigate(`/home/${route}`);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden"> 
      <div className="flex flex-row h-full">
        <aside className="w-52 bg-black text-white flex flex-col p-3 justify-center">
          <header className="flex mb-4">
              <Link to="" className="list-none p-3 mb-6 ml-2">
                <img src={reactLogo} alt="Logo" className="max-h-7"/>
              </Link>
          </header>
          <nav className="flex-1">
            <ul className="flex flex-col space-y-4 ml-1 justify-start items-start p-1">
              <li>
                <Link to="/" onClick={(event) => handleSlider(event, "account")}> <i className="fas fa-user-circle"></i> Account</Link>
              </li>
              <li>
                <Link to="/" onClick={(event) => handleSlider(event, "")}> <i className="fas fa-tachometer-alt"></i> Dashboard</Link>
              </li>
              <li><Link to="/" onClick={(event) => handleSlider(event, "calendar")}> <i className="fas fa-calendar"></i> Calendar</Link></li>
              <li><Link to="/" onClick={(event) => handleSlider(event, "inbox")}> <i className="fas fa-inbox"></i> InBox</Link></li>
            </ul>
          </nav>
          <Link to="/" className="flex justify-center text-white h-8 bg-[#da291c] items-center rounded-md mt-auto">Log Out</Link>
        </aside>
          <main className="flex-1 p-0 justify-center items-center bg-white overflow-auto">
            <Outlet />
          </main>
      </div>
    </div>
  );
};

export default Home;
