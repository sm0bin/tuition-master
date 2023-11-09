import CtaCard from "../shared/CtaCard";
import FeatureTabs from "../shared/FeatureTabs";
import Hero from "../shared/Hero";
import PopularServices from "../shared/PopularServices";
import Testimonials from "../shared/Testimonials";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion"

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}

            className="space-y-20 md:space-y-32">
            <Helmet>
                <title>Tuition Master | Home</title>
            </Helmet>
            <Hero></Hero>
            <PopularServices></PopularServices>
            <FeatureTabs></FeatureTabs>
            <Testimonials></Testimonials>
            <CtaCard></CtaCard>
        </motion.div>
    );
};

export default Home;