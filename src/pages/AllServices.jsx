import { Link, useLoaderData } from "react-router-dom";
import { Player } from '@lottiefiles/react-lottie-player';

const AllServices = () => {
    const loadedServices = useLoaderData();
    return (
        <div className="max-w-7xl mx-4 md:mx-8 lg:mx-auto">
            <div className="flex gap-10 mt-10 items-center">
                <Player
                    className="w-full max-w-3xl"
                    src="lottie.json"
                    loop
                    autoplay
                    speed={.5}
                />
                <div>
                    <h4 className="font-bold text-xl mb-6 text-blue-600 mt-20 underline underline-offset-4">All Services</h4>
                    <h2 className="font-bold text-4xl mb-6 max-w-xl">Find the Perfect Tutor or Course for Your Needs</h2>
                    <p className="text-lg mb-4">Tailor your educational journey by finding the perfect match to achieve your academic goals. Start your search today and take a step closer to academic success.</p>
                    <form className="mb-12">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>

                            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Services..." required />
                            <button type="submit" className="absolute top-0 right-0 py-2.5 px-5 text-lg font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Search
                            </button>
                        </div>
                    </form>
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

export default AllServices;