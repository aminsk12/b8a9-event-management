import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {

    const { id, picture, title, price } = service || {}



    return (
        <div >
            <div className="relative flex gap-12 flex-col rounded-xl h-[450px] w-[310px]  shadow-md"   >
                <div className="relative   overflow-hidden rounded-xl  text-gray-700">
                    <img
                        src={picture}
                    />
                </div>
                <div className="p-6">
                    <p className=" text-xl font-bold   ">
                        {title}
                    </p>
                    <p className="text-xl font-bold mt-4 text-end text-red-600">{price}</p>
                    <div className=" items-center">
                        <Link to={`/card/${id}`}>
                            <button className="w-full mt-8 bg-sky-600 text-white text-xl mt-5 font-bold rounded-xl text-center">Vew Details</button>
                        </Link>
                       
                    </div>

                </div>

            </div>



        </div>
    )
};

export default ServiceCard;