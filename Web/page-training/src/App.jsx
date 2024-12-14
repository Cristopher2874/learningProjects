import { createBrowserRouter } from "react-router-dom";
import LayoutLogin from "./Layout/LogIn/LayoutLogin";
import LoginCard from "./Elements/LogIn/LogInCard";
import AccountCard from "./Elements/User/AccountCard";
import Home from "./Layout/User/LayoutHome"
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
        element: <AccountCard />
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