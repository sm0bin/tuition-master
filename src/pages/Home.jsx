import CtaCard from "../shared/CtaCard";
import FeatureTabs from "../shared/FeatureTabs";
import HeroSlider from "../shared/Hero";
import PopularServices from "../shared/PopularServices";
import Testimonials from "../shared/Testimonials";

const Home = () => {
    return (
        <div>
            <HeroSlider></HeroSlider>
            <PopularServices></PopularServices>
            <CtaCard></CtaCard>
            <FeatureTabs></FeatureTabs>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;