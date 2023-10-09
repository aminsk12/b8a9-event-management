import { Link } from "react-router-dom";


const CardDetails = ({ card }) => {
    const { id, picture, title, description, price } = card || {};
    console.log(card);
    return (
        <div className=" min-h-[50vh]  border-2 container mx-auto bg-slate-200 mt-10 max-w-[800px]">
            <div className="">
                <div className="relative">
                    <div className="hero min-h-[50vh] rounded-t-lg" style={{ backgroundImage: `url(${picture})` }}>
                        <div className=" bg-opacity-60"></div>
                    </div>
                </div>
                <div className="p-4" >
                    <h1 className="my-5  text-4xl font-bold">{title}</h1>


                    <div className="flex justify-between mb-10">
                        <button className="bg-red-600 font-bold py-2 px-6 rounded-lg text-2xl text-white" >{price}</button>
                        <Link to="#" className="bg-fuchsia-600 font-bold py-2 px-6 rounded-lg text-2xl text-white"   >Book Now</Link>
                    </div>


                    <p className="mb-5 font-bold ">{description}</p>
                </div>
            </div>
        </div>
    )
};
export default CardDetails;