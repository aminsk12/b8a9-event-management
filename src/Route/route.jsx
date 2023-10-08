import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Service from "../Pages/service/Service";
import About from "../Pages/About/About";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Card from "../Componentes/Service/Card";
import Login from "../Pages/LoginPage/Sinein/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Private/PrivateRoute";




const route = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children : [
        {
            path : '/',
            element : <Home></Home>,

        },
        {
            path : '/service',
            element : <Service></Service>
        },
        {
            path : '/about',
            element : <About></About>
        },
        {
            path : '/login',
            element : <Login></Login>
        },
        {
            path : '/register',
            element : <Register></Register>
        },
        {
            path : '/card/:id',
            element : <PrivateRoute><Card></Card></PrivateRoute>,
            loader : ()=> fetch('../../services.json')
            
            
        }
    ]
    },
  ]);

export default route;