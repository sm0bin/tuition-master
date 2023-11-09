'use client';

import { Label } from 'flowbite-react';
import { AuthContext } from '../providers/AuthProvider';
import { useContext } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import useAxiosSecure from '../hooks/useAxiosSecure';

const AddService = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    // const form = document.getElementById('addServiceForm');

    const handleAddService = (e) => {
        e.preventDefault();
        const form = e.target;
        console.log(form);
        const serviceData = {
            serviceImage: form.serviceImageUrl.value,
            serviceName: form.serviceName.value,
            servicePrice: parseInt(form.servicePrice.value),
            serviceArea: form.serviceArea.value,
            serviceDescription: form.serviceDescription.value,
            serviceProvider: {
                name: user.displayName,
                email: user.email,
                image: user.photoURL
            }
        }

        axiosSecure.post('/services', serviceData)
            .then(res => {
                console.log(res);
                if (res.data.acknowledged) {
                    form.reset();
                    toast.success('Service successfully added!');
                }
            })
            .catch(error => {
                console.log(error)
                toast.error('Service add failed! Please try again.');

            });

        console.log(serviceData);
    }
    return (
        <div className='min-h-screen'>
            <Helmet>
                <title>Tuition Master | Add Service</title>
            </Helmet>
            <Toaster />
            <form onSubmit={handleAddService} id='addServiceForm' className="flex max-w-xl flex-col gap-4 mx-auto mt-20 border shadow rounded-2xl p-12">
                <h1 className='font-bold text-4xl text-center'> Add Your Service</h1>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="serviceImageUrl" value="Service Image URL" />
                    </div>
                    <input className='w-full rounded-lg' id="serviceImageUrl" name="serviceImageUrl" type="text" placeholder="Service Image URL" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="serviceName" value="Service Name" />
                    </div>
                    <input className='w-full rounded-lg' id="serviceName" name="serviceName" type="text" placeholder="Service Name" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="servicePrice" value="Service Price" />
                    </div>
                    <input className='w-full rounded-lg' id="servicePrice" name="servicePrice" type="text" placeholder="Service Price" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="serviceArea" value="Service Area" />
                    </div>
                    <input className='w-full rounded-lg' id="serviceArea" name="serviceArea" type="text" placeholder="Service Area" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="serviceDescription" value="Service Description" />
                    </div>
                    {/* <input className='w-full rounded-lg' id="serviceDescription" name="serviceDescription" type="text" placeholder="Service Description" sizing="lg" required /> */}
                    <textarea className='w-full rounded-lg' id="serviceDescription" name="serviceDescription" placeholder="Service Description" required rows={4} />
                </div>


                <button type="submit" className="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Service</button>
            </form>
        </div>
    );
};

export default AddService;
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