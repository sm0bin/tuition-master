import img from "../assets/home-tuitor.svg";

const Hero = () => {
    return (
        <div className="max-w-7xl mx-4 md:mx-8 lg:mx-auto flex justify-between my-32">
            <div className="w-1/2 mr-32">
                <h1 className="font-bold text-6xl mb-6 leading-tight">Unlock Your Academic Potential with <span className="text-blue-600">Tuition Master</span></h1>
                <p className="text-lg">Welcome to Tuition Master, your gateway to academic excellence. Our dedicated team of expert tutors is here to guide you on your educational journey, ensuring you reach your full potential. Whether you need help with mathematics, science, language arts, or any other subject, we have the expertise to empower your learning.</p>
                <button type="button" className="px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-8">Join Us</button>
            </div>
            <img className="w-full max-w-xl" src={img} alt="" />
        </div>
    );
};

export default Hero;