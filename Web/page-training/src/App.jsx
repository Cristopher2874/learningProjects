import { createBrowserRouter } from "react-router-dom";
import LayoutLogin from "./Layout/LayoutLogin";
import LoginCard from "./Elements/LogInCard";
import Home from "./Elements/Home"
import './App.css'

const App = createBrowserRouter([
  {
    path: "/",
    element: <LayoutLogin />,
    children: [
      {
        path:"",
        element: <LoginCard />
      }
    ]
  },
  {
    path: "/home",
    element: <Home />,
    children:[
      {
        path:"account",
        element: <LoginCard />
      },
      {
        path:"dashboard",
        element: <LoginCard />
      },
      {
        path:"calendar",
        element: <LoginCard />
      }
    ]
  }
])

export default App