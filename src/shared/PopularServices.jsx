import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PopularServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5500/services")
            .then(res => setServices(res.data));
    }, [])
    return (
        <div>


            <div className="max-w-7xl mx-4 md:mx-8 lg:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    services?.slice(0, 4).map(service => (


                        <div key={service._id} className="max-w-sm flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg w-full h-52 object-cover" src={service.serviceImage} alt={`${service?.serviceName} image`} />
                            </a>
                            <div className="p-5 flex flex-col flex-grow" >
                                <div className="flex-grow">

                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{service?.serviceName}</h5>
                                    </a>
                                    <div className="flex items-center gap-3">
                                        <img className="w-10 h-10 rounded-full object-cover" src={service?.serviceProvider?.image} alt={`${service?.serviceProvider?.name} image`} />
                                        <h4 className="font-bold text-lg">{service?.serviceProvider?.name}</h4>
                                    </div>
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Price: ${service?.servicePrice}</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{service?.serviceDescription}</p>
                                </div>
                                <Link href="#" className="w-max inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    View Details
                                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                    ))
                }
            </div>
            <Link to="/services">
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-20 mx-auto block dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">See All Services</button>
            </Link>


        </div>
    );
};

export default PopularServices;