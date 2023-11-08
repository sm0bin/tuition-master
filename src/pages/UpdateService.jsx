'use client';
import PropTypes from 'prop-types';
import { Label } from 'flowbite-react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import Swal from 'sweetalert2';
import { Helmet } from "react-helmet";

const UpdateService = ({ updateService, setOpenModal }) => {
    const {
        _id,
        serviceImage,
        serviceName,
        servicePrice,
        serviceArea,
        serviceDescription,
    } = updateService;

    const handleUpdateService = (e) => {
        e.preventDefault();
        const form = e.target;
        console.log(form);
        const serviceData = {
            serviceImage: form.serviceImageUrl.value,
            serviceName: form.serviceName.value,
            servicePrice: parseInt(form.servicePrice.value),
            serviceArea: form.serviceArea.value,
            serviceDescription: form.serviceDescription.value,
        }

        axios.put(`http://localhost:5500/services/${_id}`, serviceData)
            .then(res => {
                console.log(res);
                if (res.data.modifiedCount) {
                    form.reset();
                    setOpenModal(false);
                    Swal.fire({
                        title: "Service updated successfully!",
                        text: "Click ok to continue.",
                        icon: "success"
                    }).then(res => {
                        if (res.isConfirmed) {
                            location.reload();

                        }
                    })

                    // toast.success('Service updated successfully!');
                }
            })
            .catch(error => {
                console.log(error)
                toast.error('Service update failed! Please try again.');

            });

        console.log(serviceData);
    }
    return (
        // <div className='min-h-screen'>
        <form onSubmit={handleUpdateService} id='addServiceForm' className="flex max-w-xl flex-col gap-4">
            <Helmet>
                <title>Tuition Master | Update Service</title>
            </Helmet>
            <Toaster />
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="serviceImageUrl" value="Service Image URL" />
                </div>
                <input className='w-full rounded-lg' id="serviceImageUrl" name="serviceImageUrl" type="text" placeholder="Service Image URL" defaultValue={serviceImage} required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="serviceName" value="Service Name" />
                </div>
                <input className='w-full rounded-lg' id="serviceName" name="serviceName" type="text" placeholder="Service Name" defaultValue={serviceName} required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="servicePrice" value="Service Price" />
                </div>
                <input className='w-full rounded-lg' id="servicePrice" name="servicePrice" type="text" placeholder="Service Price" defaultValue={servicePrice} required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="serviceArea" value="Service Area" />
                </div>
                <input className='w-full rounded-lg' id="serviceArea" name="serviceArea" type="text" placeholder="Service Area" defaultValue={serviceArea} required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="serviceDescription" value="Service Description" />
                </div>
                {/* <input className='w-full rounded-lg' id="serviceDescription" name="serviceDescription" type="text" placeholder="Service Description" sizing="lg" required /> */}
                <textarea className='w-full rounded-lg' id="serviceDescription" name="serviceDescription" placeholder="Service Description" defaultValue={serviceDescription} required rows={4} />
            </div>


            <button type="submit" className="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Service</button>
        </form>
        // </div>
    );
};

UpdateService.propTypes = {
    updateService: PropTypes.object,
    setOpenModal: PropTypes.func,
}

export default UpdateService;
// Service Image URL
// Service Name
// Service Price
// Service Area
// Service Description
// serviceImageUrl,
//     serviceName,
//     servicePrice,
//     serviceArea,
//     serviceDescription,

// Picture URL of the Service
// Service Name,
//     Your name, (from Firebase user, not editable )
// Your email, (from Firebase user, not editable )
// Price,
//     Service Area,
//         Description