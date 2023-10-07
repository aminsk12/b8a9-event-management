
import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h3 className="text-5xl font-semibold text-center my-10 underline">Our Event</h3>
            <div className=" grid grid-cols-1  gap-8  md:grid-cols-2 lg:grid-cols-3">
                {
                    services?.map(service => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                        ></ServiceCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;