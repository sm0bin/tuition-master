import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';
import 'flowbite/dist/flowbite.min.js';
import 'flowbite';

const Header = () => {
    const { user, logoutUser } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        logoutUser()
            .then(result => {
                console.log(result);
                toast.success('Logout Successful.');
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    }

    // if (user === null) {
    //     document.getElementById('user-dropdown').classList.add('hidden');
    //     document.getElementById('user-menu-button').classList.add('hidden');
    // }

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <Toaster />
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink to="/" className="flex items-center">
                        <img src="book-logo.svg" className="h-8 mr-3" alt="Tuition Master Logo" />
                        <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Tuition Master</span>
                    </NavLink>
                    <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/services" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</NavLink>
                            </li>

                            {
                                user &&

                                <li>
                                    <button onClick={() => setIsOpen(!isOpen)} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dashboard <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg></button>
                                    <div id="dropdownNavbar" className={`z-10 absolute ${isOpen ? '' : 'hidden'} font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                            <li>
                                                <NavLink to="/your-services" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My Services</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/services/new" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Add Services</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/your-schedules" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My Schedules</NavLink>
                                            </li>
                                        </ul>

                                    </div>
                                </li>
                            }
                            {
                                user ?
                                    <li>
                                        <button onClick={handleLogout} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</button>
                                    </li> :
                                    <li>
                                        <NavLink to="/login" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</NavLink>
                                    </li>

                            }
                        </ul>
                    </div>
                </div>
            </nav>



            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <Toaster />
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                    {/* Logo */}
                    <NavLink to="/" className="flex items-center">
                        <img src="book-logo.svg" className="h-8 mr-3" alt="Tuition Master Logo" />
                        <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white hidden md:block">Tuition Master</span>
                    </NavLink>

                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">


                        {
                            user === null &&
                            // Login button
                            // <NavLink to="/login" className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:ml-4 bg-blue-700 hover:bg-blue-800 focus:shadow-outline focus:outline-none">Login</NavLink>
                            <div>
                                <NavLink to='/sign-up' className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Sign Up</NavLink>

                                <NavLink to='/login' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</NavLink>
                            </div>
                        }

                        {
                            user &&
                            <>
                                {/* User avatar */}
                                <button onClick={() => setIsOpen(true)} type="button" className={` flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600`} id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                    <span className="sr-only">Open user menu</span>
                                    <img className="w-8 h-8 rounded-full" src={user?.photoURL} alt="user photo" />
                                </button>

                                {/* User dropdown menu */}
                                <div className={`z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${isOpen ? '' : 'hidden'}`} id='user-dropdown'>
                                    <div className="px-4 py-3">
                                        <span className="block text-sm text-gray-900 dark:text-white">{user?.displayName}</span>
                                        <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{user?.email}</span>
                                    </div>
                                    <ul className="py-2" aria-labelledby="user-menu-button">
                                        <li>
                                            <NavLink to='/dashboard' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/my-services' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">My Services</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/services/new' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Add Services</NavLink>
                                        </li>
                                        <li>
                                            <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</button>
                                        </li>
                                    </ul>

                                </div>
                            </>
                        }





                        {/* Mobile menu button */}
                        <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink to='/' className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/services' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    );
};

export default Header;