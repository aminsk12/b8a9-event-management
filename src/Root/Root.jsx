import { Outlet } from "react-router-dom";
import Footer from "../Componentes/Footer/Footer";
import { Toaster } from "react-hot-toast";
import Navber from "../Componentes/Header/Navber/Navber";


const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default Root;