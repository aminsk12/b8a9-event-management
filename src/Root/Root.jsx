import { Outlet } from "react-router-dom";
import Footer from "../Componentes/Footer/Footer";
import { Toaster } from "react-hot-toast";
import Navber from "../Componentes/Header/Navber/Navber";


const Root = () => {
    return (
        <div>
            
            <div className=" ">
            <Navber></Navber>
                <Outlet></Outlet>
                </div>
            <Footer></Footer>
            <Toaster/>
        </div>
    );
};

export default Root;