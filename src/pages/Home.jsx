import CtaCard from "../shared/CtaCard";
import FeatureTabs from "../shared/FeatureTabs";
import Hero from "../shared/Hero";
import PopularServices from "../shared/PopularServices";
import Testimonials from "../shared/Testimonials";
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <div className="space-y-20 md:space-y-32">
            <Helmet>
                <title>Tuition Master | Home</title>
            </Helmet>
            <Hero></Hero>
            <PopularServices></PopularServices>
            <FeatureTabs></FeatureTabs>
            <Testimonials></Testimonials>
            <CtaCard></CtaCard>
        </div>
    );
};

export default Home;