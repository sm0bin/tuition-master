import { Link, useRouteError } from "react-router-dom";
import img from "../assets/404-panda.svg"
import { Helmet } from "react-helmet";
import { motion } from "framer-motion"

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
            id="error-page" className="flex flex-col items-center justify-center my-24 gap-3 space-y-4 w-11/12 mx-auto">
            <Helmet>
                <title>Tuition Master | Error 404</title>
            </Helmet>
            <img className="lg:w-1/3 mx-auto" src={img} alt="" />
            {/* <div>
                    <h2 className="font-semibold text-2xl text-center">Sorry, an unexpected error has occurred.</h2>
                    <h4 className="font-medium text-lg text-center">
                        <i>{error.statusText || error.message}</i>
                    </h4>
                </div> */}
            <Link to="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Go Home
            </Link>
        </motion.div>
    );
}