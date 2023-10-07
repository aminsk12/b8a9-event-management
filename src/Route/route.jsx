import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Service from "../Pages/service/Service";
import About from "../Pages/About/About";


const route = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
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
        }
    ]
    },
  ]);

export default route;