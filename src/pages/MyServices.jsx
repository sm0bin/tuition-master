import { Typewriter } from "react-simple-typewriter";
import { Player } from '@lottiefiles/react-lottie-player';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Modal } from 'flowbite-react';
import UpdateService from "./UpdateService";
import Lottie from "lottie-react";
import gif from "../assets/sleeping-blue.json";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Skeleton from "react-loading-skeleton";
import { motion } from "framer-motion"


const MyServices = () => {
    const { user } = useContext(AuthContext);
    const [myServices, setMyServices] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [updateService, setUpdateService] = useState({});
    const axiosSecure = useAxiosSecure();
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        axiosSecure.get(`/services?email=${user.email}`)
            .then(res => {
                setMyServices(res.data)
                setLoading(false);
            })
            .catch(error => console.log(error));
    }, [user?.email, axiosSecure])

    const handleUpdate = (service) => {
        setOpenModal(true);
        setUpdateService(service);
    }

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/services/${id}`)
                    .then(res => {
                        console.log(res);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        }).then(result => {
                            if (result.isConfirmed) {

                                location.reload();
                            }
                        })

                    })
                    .catch(error => {
                        console.log(error);
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Something went wrong!",
                        });
                    })

            }
        });
    }


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
            className=" mt-20">
            <Helmet>
                <title>Tuition Master | My Services</title>
            </Helmet>
            <div className="flex items-start w-full lg:w-1/2">
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
                            delaySpeed={10}
                            deleteSpeed={30}
                            loop={0}
                            typeSpeed={100}
                            words={[
                                "Manage Your Services with Ease",
                                "Fine-Tune Your Offerings",
                            ]}
                        />
                    </h2>
                </div>
            </div>

            <div className=" grid grid-cols-1 gap-6">
                {
                    loading ? <>
                        <Skeleton count={4} />
                        <Skeleton count={4} />
                        <Skeleton count={4} />
                    </> :
                        myServices?.length === 0 ? <div>
                            <Lottie className="w-11/12 lg:w-1/3 mx-auto" animationData={gif} loop={true} />
                            <h2 className="text-center font-bold text-3xl">You Don&apos;t Have any Services Yet.</h2>
                        </div> :
                            myServices?.map(service => (
                                <div key={service._id} className="flex overflow-hidden flex-col items-start bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <img className="md:w-1/2  object-cover w-[600px] h-[400px] rounded-t-lg  md:rounded-none md:rounded-l-lg" src={service.serviceImage} alt={`${service?.serviceName} image`} />
                                    <div className="flex flex-col md:w-1/2 justify-between p-4 leading-normal space-y-3">
                                        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{service?.serviceName}</h5>
                                        <div className="flex items-center gap-3">
                                            <img className="w-12 h-12 rounded-full object-cover" src={service?.serviceProvider?.image} alt={`${service?.serviceProvider?.name} image`} />
                                            <h4 className="font-bold text-lg">{service?.serviceProvider?.name}</h4>
                                        </div>
                                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Price: ${service?.servicePrice}</h5>
                                        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Service Area: {service?.serviceArea}</h5>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{service?.serviceDescription}</p>

                                        <div className="flex">
                                            <button onClick={() => handleUpdate(service)} type="button" className="w-max text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                                    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                                                </svg>
                                                Update
                                            </button>
                                            <button onClick={() => handleDelete(service?._id)} type="button" className="w-max text-white bg-rose-600 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))

                }
            </div>



            <Modal show={openModal} size="xl" onClose={() => setOpenModal(false)} popup>
                <Modal.Body>
                    <Modal.Header><h3 className='font-bold text-3xl mb-2 mt-2'> Update Service</h3></Modal.Header>
                    <UpdateService updateService={updateService} setOpenModal={setOpenModal}></UpdateService>
                </Modal.Body>
            </Modal>
        </motion.div>

    )
};

export default MyServices;