import { useState } from 'react'
import LayoutLogin from "./Layout/LayoutLogin";
import reactLogo from './assets/react.svg'
import homeimage from './assets/homepage.jpg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter } from "react-router-dom";

function Login() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        This is an example page
      </p>
    </>
  )
}

function HomePage() {
  return (
    <div className="container">
      <header>
        <div className="logo">
          <img src="" alt="Tecnológico de Monterrey" />
          <h1>Tecnológico de Monterrey</h1>
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
        <div className="hero">
          <img src="" alt="Ram Head" />
          <div className="login-form">
            <img src="" alt="Mitec" />
            <h2>mitec</h2>
            <form>
              <div>
                <label htmlFor="username">Usuario:</label>
                <input type="text" id="username" placeholder="Usuario..." />
              </div>
              <div>
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" placeholder="Contraseña..." />
              </div>
              <button type="submit">Ingresar</button>
            </form>
            <p><a href="#">¿Olvidaste tu contraseña?</a></p>
            <p><a href="#">¿Necesitas ayuda? Contáctanos</a></p>
          </div>
        </div>
      </main>

      <footer>
        <p>
          <a href="#">Aviso de Privacidad</a>
          <a href="#">Éthos</a>
          <span>&copy; 2024 Tecnológico de Monterrey.</span>
        </p>
      </footer>
    </div>
  );
}

const App = createBrowserRouter([
  {
    path: "/",
    element: <LayoutLogin />,
    children: [
      {
        index: true,
        element: <HomePage />,
      }
    ]
  }
])

export default App