import { useLoaderData } from "react-router-dom";
'use client';

import { Datepicker, Label, Modal, TextInput } from 'flowbite-react';
import { useContext, useState } from 'react';
import { AuthContext } from "../providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";


const ServiceDetails = () => {
    const [openModal, setOpenModal] = useState(false);
    const service = useLoaderData();
    const { _id, serviceName, serviceImage, serviceProvider, servicePrice, serviceArea, serviceDescription } = service;
    const { user } = useContext(AuthContext);

    const handleBooking = () => {
        const form = document.getElementById('bookingForm');
        if (form.address.value === '' || form.date.value === '') return toast.error('Please fill up the form');
        setOpenModal(false);
        const bookingInfo = { serviceId: _id, serviceName, serviceImage, serviceProvider, servicePrice, serviceArea, serviceDescription, serviceUserName: user.displayName, serviceUserEmail: user.email, serviceUserPhoto: user.photoURL, serviceUserAddress: form.address.value, serviceUserDate: form.date.value };
        console.log(bookingInfo);
        axios.post('https://offline-service-server.vercel.app/bookings', bookingInfo)
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
                                            <Label htmlFor="date" value="Service Date" />
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