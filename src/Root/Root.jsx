import { Outlet } from "react-router-dom";
import Navber from "../Componentes/Header/Navber/Navber";
import Footer from "../Componentes/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;