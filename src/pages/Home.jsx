import CtaCard from "../shared/CtaCard";
import FeatureTabs from "../shared/FeatureTabs";
import Hero from "../shared/Hero";
import PopularServices from "../shared/PopularServices";
import Testimonials from "../shared/Testimonials";

const Home = () => {
    return (
        <div className="space-y-20 md:space-y-32">
            <Hero></Hero>
            <PopularServices></PopularServices>
            <FeatureTabs></FeatureTabs>
            <Testimonials></Testimonials>
            <CtaCard></CtaCard>
        </div>
    );
};

export default Home;