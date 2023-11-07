import { Link, useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Player } from '@lottiefiles/react-lottie-player';

const MyServices = () => {
    const loadedServices = useLoaderData();
    return (
        <div className=" mt-20">

            <div className="flex justify-center items-start w-1/2 mx-auto">
                <Player
                    className="w-36"
                    src="https://lottie.host/68ca66ea-281a-4b77-b791-83ed81bf5e9d/IGEOBENceT.json"
                    loop
                    autoplay
                    speed={.2}
                />
                <div className="mb-20 w-full h-32">
                    <h4 className="font-bold text-xl mb-4 text-blue-600 underline underline-offset-4">My Services</h4>
                    <h2 className="font-bold text-4xl mb-6">
                        <Typewriter
                            cursor
                            cursorBlinking
                            cursorColor="#6F9BF2"
                            delaySpeed={1000}
                            deleteSpeed={30}
                            loop={0}
                            typeSpeed={100}
                            words={[
                                "Manage Your Services with Ease",
                                "Update, Delete, and Fine-Tune Your Offerings",
                            ]}
                        />
                    </h2>
                </div>
            </div>

            <div className=" grid grid-cols-1 gap-6">
                {
                    loadedServices?.map(service => (

                        <div key={service._id} className="flex overflow-hidden flex-col items-start bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <figure className=" w-1/2 h-[360px] overflow-hidden grow">
                                <img className="object-cover w-[600px] h-[600px] rounded-t-lg  md:rounded-none md:rounded-l-lg" src={service.serviceImage} alt={`${service?.serviceName} image`} />
                            </figure>
                            <div className="flex flex-col w-1/2 justify-between p-4 leading-normal space-y-3">
                                <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{service?.serviceName}</h5>
                                <div className="flex items-center gap-3">
                                    <img className="w-12 h-12 rounded-full object-cover" src={service?.serviceProvider?.image} alt={`${service?.serviceProvider?.name} image`} />
                                    <h4 className="font-bold text-lg">{service?.serviceProvider?.name}</h4>
                                </div>
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Price: ${service?.servicePrice}</h5>
                                <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Service Area: {service?.serviceArea}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{service?.serviceDescription}</p>
                                <Link to={`/services/${service._id}`} className="w-max inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-20 mx-auto block dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Show all</button>
        </div>

    )
};

export default MyServices;