import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const SignUp = () => {
    const { googleSignIn, signUpUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        setSignUpError("");
        const form = e.currentTarget;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setSignUpError('Password must be at least 6 characters long.');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setSignUpError('Password must contain at least one lowercase letter.');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setSignUpError('Password must contain at least one uppercase letter.');
            return;
        }
        else if (!/[0-9]/.test(password)) {
            setSignUpError('Password must contain at least one number.');
            return;
        }
        else if (!/[!@#$%^&*()+=]/.test(password)) {
            setSignUpError('Password must contain at least one special character.');
            return;
        }

        signUpUser(email, password)
            .then(result => {
                console.log(result.user);
                updateUser(name, photoUrl)
                    .then(result => {
                        console.log(result);
                        toast.success('User created successfully.')
                    })
                    .catch(error => {
                        console.error(error);
                        toast.error(error.message);
                    })
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                toast.success('Login Successful.');
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    }

    return (
        <div className="mx-auto h-screen mt-20">
            <Toaster />
            <div className="max-w-md mx-auto">


                <form onSubmit={handleSubmit}>
                    <h2 className="font-bold text-3xl mb-6">Sign Up Here</h2>
                    <div className="mb-6">

                        <label htmlFor="name-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4  text-gray-500 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input type="text" name="name" id="name-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Name" />
                        </div>

                    </div>
                    <div className="mb-6">

                        <label htmlFor="image-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4  text-gray-500 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input type="text" name="photoUrl" id="image-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Profile URL" />
                        </div>

                    </div>
                    <div className="mb-6">

                        <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4  text-gray-500 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            </div>
                            <input type="email" name="email" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" />
                        </div>

                    </div>

                    <div className="mb-6">

                        <label htmlFor="password-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4  text-gray-500 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input type="password" name="password" id="password-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" />
                        </div>

                    </div>

                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
                </form>

                <div className="flex items-center gap-2 my-4">
                    <hr className="border w-full" />
                    <h4 className="font-medium">Or</h4>
                    <hr className="border w-full" />
                </div>
                <button onClick={handleGoogleSignIn} type="button" className="text-white justify-center bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mb-2 w-full">
                    <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                        <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd" />
                    </svg>
                    Sign in with Google
                </button>
                <h4>Already Have an Account?
                    <Link to="/login" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"> Login</Link>
                </h4>
            </div>
        </div>
    );
};

export default SignUp;

