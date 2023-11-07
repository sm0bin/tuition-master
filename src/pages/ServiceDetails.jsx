import { Link, useLoaderData } from "react-router-dom";
'use client';

import { Button, Datepicker, Label, Modal, TextInput } from 'flowbite-react';
import { useContext, useState } from 'react';
import { AuthContext } from "../providers/AuthProvider";


const ServiceDetails = () => {
    const [openModal, setOpenModal] = useState(false);
    const service = useLoaderData();
    const { _id, serviceName, serviceImage, serviceProvider, servicePrice, serviceArea, serviceDescription } = service;
    const { user } = useContext(AuthContext);

    const handleBooking = () => {
        setOpenModal(false);
        const form = document.getElementById('bookingForm');
        console.log(form);
        const bookingInfo = { serviceId: _id, serviceName, serviceImage, serviceProvider, servicePrice, serviceArea, serviceDescription, serviceUserName: user.displayName, serviceUserEmail: user.email, serviceUserPhoto: user.photoURL, serviceUserAddress: form.address.value, serviceUserDate: form.date.value };
        console.log(bookingInfo);
    }


    return (
        <div>


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




            <Modal show={openModal} onClose={() => setOpenModal(false)} popup className="p-6">
                <Modal.Header />
                <Modal.Body>
                    <form onSubmit={handleBooking} id="bookingForm">


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
                                                <h4 className="font-semibold text-base">{serviceProvider?.name}@mail.com</h4>

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

                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                                </svg>
                                            </div>
                                            <input type="text" name="address" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
                                        </div>

                                    </div>
                                    <div className="max-w-md">
                                        <div className="mb-2 block">
                                            <Label htmlFor="date" value="Service Date" />
                                        </div>

                                        <div className="relative max-w-sm">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                                </svg>
                                            </div>
                                            <input type="date" name="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
                                        </div>

                                    </div>

                                </div>


                            </div>

                            <button onClick={handleBooking} type="button" className="mt-3 px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Purchase Now</button>
                        </div>
                    </form>

                </Modal.Body>
            </Modal>



        </div>
    );
};

export default ServiceDetails;