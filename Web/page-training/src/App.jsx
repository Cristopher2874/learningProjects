import { createBrowserRouter } from "react-router-dom";
import LayoutLogin from "./Layout/LayoutLogin";
import LoginCard from "./Elements/LogIn/LogInCard";
import AccountCard from "./Elements/User/AccountCard";
import Home from "./Layout/LayoutHome"
import Dashboard from "./Elements/User/Dashboard";
import Calendar from "./Elements/User/CalendarPage";
import Inbox from "./Elements/User/InboxPage";
import MainEvaluations from "./Elements/Evaluations/MainEvaluations";
import './App.css'
import LayoutStore from "./Layout/LayoutStore";
import ProductCard from "./Elements/Store/ProductBase";

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
        element: <Calendar />
      },
      {
        path:"inbox",
        element: <Inbox />
      }
    ]
  },
  {
    path:"/evaluacion",
    element: <Home />,
    children:[
      {
        index:true,
        element: <MainEvaluations />
      }
    ]
  },
  {
    path: "/store",
    element: <LayoutStore />,
    children: [
      {
        index:true,
        element: <ProductCard />
      }
    ]
  }
])

export default App