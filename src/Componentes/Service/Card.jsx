import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDetails from "./CardDetails";



const Card = () => {
    const [card, setCard] = useState({});
  
    const { id } = useParams();
  
    const cards = useLoaderData();
  
    useEffect(() => {
  
      
      const findcard = cards?.find((card) => card.id == id);
  
      setCard(findcard);
    }, [id, cards]);
  
  
    return (
      <div className=" container mx-auto flex justify-center items-center mt-16">
        <CardDetails card={card}></CardDetails>
      </div>
    );
};

export default Card;