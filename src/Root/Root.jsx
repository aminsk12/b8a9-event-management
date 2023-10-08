import { Outlet } from "react-router-dom";
import Navber from "../Componentes/Header/Navber/Navber";
import Footer from "../Componentes/Footer/Footer";
import { Toaster } from "react-hot-toast";


const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster/>
        </div>
    );
};

export default Root;