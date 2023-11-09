import { Typewriter } from "react-simple-typewriter";
import img from "../assets/home-tuitor.svg";
import { motion } from "framer-motion"


const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0.4, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .7 }}
            exit={{ opacity: 0.4, scale: 0.7 }}
            className="max-w-7xl mx-4 md:mx-8 lg:mx-auto flex flex-col-reverse lg:flex-row justify-between  my-12 lg:my-32  gap-8 lg:gap-32">
            <div className="lg:w-1/2">
                {/* <h1 className="font-bold text-6xl mb-6 leading-tight">Unlock Your Academic Potential with <span className="text-blue-600">Tuition Master</span></h1> */}
                <h1 className="font-bold text-5xl md:text-6xl mb-6 leading-tight h-56 md:h-44 ">
                    <Typewriter
                        cursor
                        cursorBlinking
                        cursorColor="#6F9BF2"
                        delaySpeed={1000}
                        deleteSpeed={25}
                        loop={0}
                        typeSpeed={75}
                        words={[
                            // `Unlock Your Academic Potential with ${<span className="text-blue-600">Tuition Master</span>}`
                            'Best Tutor at Your Doorstep with Tuition Master',
                            'Unlock Your Academic Potential with Tuition Master',
                        ]}
                    />
                </h1>
                <p className="text-lg">Welcome to Tuition Master, your gateway to academic excellence. Our dedicated team of expert tutors is here to guide you on your educational journey, ensuring you reach your full potential. Whether you need help with mathematics, science, language arts, or any other subject, we have the expertise to empower your learning.</p>
                <button type="button" className="px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-8">Join Us</button>
            </div>
            <img className="w-full max-w-xl" src={img} alt="" />

        </motion.div>
    );
};

export default Hero;