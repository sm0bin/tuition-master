import { Link, useLoaderData } from "react-router-dom";
'use client';

import { Datepicker, Label, Modal, TextInput } from 'flowbite-react';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";


const ServiceDetails = () => {
    const [openModal, setOpenModal] = useState(false);
    const service = useLoaderData();
    const { _id, serviceName, serviceImage, serviceProvider, servicePrice, serviceArea, serviceDescription } = service;
    const { user } = useContext(AuthContext);
    const [sameProviderServices, setSameProviderServices] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5500/services?email=${serviceProvider?.email}`)
            .then(res => {
                const restOfSameProviderService = res.data.filter(service => service._id !== _id);
                setSameProviderServices(restOfSameProviderService);
            })
    }, [serviceProvider?.email, _id])

    const handleBooking = () => {
        const form = document.getElementById('bookingForm');
        if (form.address.value === '' || form.date.value === '') return toast.error('Please fill up the form');
        setOpenModal(false);
        const bookingInfo = {
            serviceId: _id,
            serviceName,
            serviceImage,
            serviceProvider,
            servicePrice,
            serviceArea,
            serviceDescription,
            serviceUser: {
                image: user.photoURL,
                name: user.displayName,
                email: user.email,
            },
            serviceDetails: {
                address: form.address.value,
                startingDate: form.date.value,
                status: "pending"
            }
        };
        console.log(bookingInfo);
        axios.post('http://localhost:5500/bookings', bookingInfo)
            .then(res => {
                console.log(res);
                if (res.data.acknowledged) {
                    toast.success('Service successfully purchased!')
                }
            })
            .catch(error => console.log(error));

        console.log(user);
    }


    return (
        <div>
            <Toaster />

            <div className="my-12 flex overflow-hidden flex-col items-start bg-white border border-gray-200 rounded-lg shadow  w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full h-[560px] rounded-t-lg  md:rounded-none" src={serviceImage} alt={`${serviceName} image`} />
                <div className="w-full flex flex-col  justify-between p-6 leading-normal space-y-3 grow">
                    <div className="grow">

                        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{serviceName}</h5>
                        <div className="flex items-center gap-3 my-3">
                            <img className="w-12 h-12 rounded-full object-cover" src={serviceProvider?.image} alt={`${serviceProvider?.name} image`} />
                            <h4 className="font-bold text-lg">{serviceProvider?.name}</h4>
                        </div>
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Price: ${servicePrice}</h5>
                        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Service Area: {serviceArea}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{serviceDescription}</p>
                    </div>
                    <button onClick={() => setOpenModal(true)} className="w-max px-10 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Book Now
                    </button>

                </div>
            </div>
            {
                sameProviderServices.length &&
                <div>
                    <h2 className="font-bold text-3xl text-center mb-12 mt-20">Similar Services</h2>
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                        {
                            sameProviderServices?.slice(0, 2).map(service => (

                                <div key={service._id} className="flex overflow-hidden flex-col items-start bg-white border border-gray-200 rounded-lg shadow  w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <img className="object-cover w-full h-[400px] rounded-t-lg  md:rounded-none" src={service.serviceImage} alt={`${service?.serviceName} image`} />
                                    <div className="flex flex-col  justify-between p-6 leading-normal space-y-3 grow">
                                        <div className="grow">

                                            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{service?.serviceName}</h5>
                                            <div className="flex items-center gap-3">
                                                <img className="w-12 h-12 rounded-full object-cover" src={service?.serviceProvider?.image} alt={`${service?.serviceProvider?.name} image`} />
                                                <h4 className="font-bold text-lg">{service?.serviceProvider?.name}</h4>
                                            </div>
                                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Price: ${service?.servicePrice}</h5>
                                            <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Service Area: {service?.serviceArea}</h5>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{service?.serviceDescription}</p>
                                        </div>
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
                </div>

            }


            <Modal show={openModal} onClose={() => setOpenModal(false)} popup className="p-6">
                <Modal.Header />
                <Modal.Body>
                    <form id="bookingForm">


                        <img className="object-cover w-full h-80 rounded-lg mb-6" src={serviceImage} alt={`${serviceName} image`} />
                        <div className="flex flex-col  justify-between leading-normal space-y-3 grow">
                            <div className="grow space-y-3">

                                <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{serviceName}</h5>
                                <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Price: ${servicePrice}</h5>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="max-w-md">
                                        <div className="block">
                                            <Label htmlFor="username3" value="Service Provider" />
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <img className="w-10 h-10 rounded-full object-cover" src={serviceProvider?.image} alt={`${serviceProvider?.name} image`} />
                                            <div>
                                                <h4 className="font-bold text-lg">{serviceProvider?.name}</h4>
                                                <h4 className="font-semibold text-base">{serviceProvider?.email}</h4>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="max-w-md">
                                        <div className="block">
                                            <Label htmlFor="username3" value="Ordered By" />
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <img className="w-10 h-10 rounded-full object-cover" src={user?.photoURL} alt={`${serviceProvider?.name} image`} />
                                            <div>
                                                <h4 className="font-bold text-lg">{user?.displayName}</h4>
                                                <h4 className="font-semibold text-base">{user?.email}</h4>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="max-w-md">
                                        <div className="mb-2 block">
                                            <Label htmlFor="address" value="Service Area" />
                                        </div>
                                        <TextInput name="address" id="address" placeholder={`123, Your House, ${serviceArea}`} addon="House" required />
                                    </div>
                                    <div className="max-w-md">
                                        <div className="mb-2 block">
                                            <Label htmlFor="date" value="Start From" />
                                        </div>
                                        <Datepicker name="date" id="date" addon="Date" autoHide={false} required />
                                    </div>

                                </div>


                            </div>

                            <button onClick={handleBooking} type="button" className="mt-3 px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Purchase Now</button>
                        </div>
                    </form>
                    {/* </div> */}

                </Modal.Body>
            </Modal>



        </div>
    );
};

export default ServiceDetails;