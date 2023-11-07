import CtaCard from "../shared/CtaCard";
import FeatureTabs from "../shared/FeatureTabs";
import HeroSlider from "../shared/Hero";
import PopularServices from "../shared/PopularServices";
import Testimonials from "../shared/Testimonials";

const Home = () => {
    return (
        <div className="space-y-20 md:space-y-32">
            <HeroSlider></HeroSlider>
            <PopularServices></PopularServices>
            <CtaCard></CtaCard>
            <FeatureTabs></FeatureTabs>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;