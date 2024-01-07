import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <section className="my-12">
            <Helmet>
                <title>Tuition Master | About</title>
            </Helmet>

            <h2 className="font-bold text-5xl text-blue-500 mb-8 leading-tight">Welcome to Tuition Master,<br /> Where learning knows no bounds!</h2>

            <p className="text-gray-500 dark:text-gray-400 text-xl mb-8 leading-relaxed">
                At Tuition Master, we believe in the power of education and the potential within every individual. Our platform is designed to connect passionate tutors with eager learners, creating a vibrant community of knowledge seekers. Whether you are here to offer your expertise or seeking guidance, Tuition Master is your go-to destination for personalized learning experiences.
            </p>

            <h2 className="font-bold text-3xl text-blue-500 mb-3 mt-12">Our Mission:</h2>
            <p className="text-gray-500 dark:text-gray-400 text-xl mb-8 leading-relaxed">
                Our mission is to empower both tutors and learners by providing a seamless platform for educational exchange. We aim to foster a supportive learning environment where skills are honed, confidence is built, and knowledge is shared.
            </p>

            <h2 className="font-bold text-3xl text-blue-500 mb-3 mt-12">Why Tuition Master?</h2>
            <p className="text-gray-500 dark:text-gray-400 text-xl mb-8 leading-relaxed">
                <span className="font-bold text-gray-600">Diverse Expertise:</span> Our platform hosts a wide array of subjects and skills. From academic subjects to specialized areas of interest, Tuition Master brings together a diverse pool of tutors to cater to all learning needs.
            </p>

            <p className="text-gray-500 dark:text-gray-400 text-xl mb-8 leading-relaxed">
                <span className="font-bold text-gray-600">Flexibility:</span> Tuition Master offers flexibility for both tutors and learners. Set your own schedule, choose the subjects you are passionate about, and customize your learning journey.
            </p>

            <p className="text-gray-500 dark:text-gray-400 text-xl mb-8 leading-relaxed">
                <span className="font-bold text-gray-600">Community-driven:</span> Join a community of like-minded individuals who share a passion for learning and teaching. Connect with tutors and learners, exchange ideas, and build lasting relationships.
            </p>

            <p className="text-gray-500 dark:text-gray-400 text-xl mb-8 leading-relaxed">
                <span className="font-bold text-gray-600">Quality Assurance:</span> Tuition Master ensures a high standard of tutoring by providing tools for feedback and reviews. We believe in continuous improvement and strive to create a platform that consistently delivers quality education.
            </p>
        </section>
    );
};

export default About;


