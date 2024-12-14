import { createBrowserRouter } from "react-router-dom";
import LayoutLogin from "./Layout/LogIn/LayoutLogin";
import LoginCard from "./Elements/LogIn/LogInCard";
import AccountCard from "./Elements/User/AccountCard";
import Home from "./Layout/User/LayoutHome"
import './App.css'
import Dashboard from "./Elements/User/Dashboard";

const App = createBrowserRouter([
  {
    path: "/",
    element: <LayoutLogin />,
    children: [
      {
        index:true,
        element: <LoginCard />
      }
    ]
  },
  {
    path: "/home",
    element: <Home />,
    children:[
      {
        index:true,
        element: <Dashboard />
      },
      {
        path:"account",
        element: <AccountCard />
      },
      {
        path:"calendar",
        element: <LoginCard />
      },
      {
        path:"inbox",
        element: <LoginCard />
      }
    ]
  }
])

export default App