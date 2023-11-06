import CtaCard from "../shared/CtaCard";
import FeatureTabs from "../shared/FeatureTabs";
import HeroSlider from "../shared/Hero";
import PopularServices from "../shared/PopularServices";

const Home = () => {
    return (
        <div>
            <HeroSlider></HeroSlider>
            <PopularServices></PopularServices>
            <CtaCard></CtaCard>
            <FeatureTabs></FeatureTabs>
        </div>
    );
};

export default Home;