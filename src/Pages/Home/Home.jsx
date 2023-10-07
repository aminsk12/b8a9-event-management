import Banner from "../../Componentes/Header/Banner/Banner";
import Services from "../../Componentes/Service/Services";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="flex justify-center items-center">

                <Services ></Services>
            </div>
        </div>
    );
};

export default Home;