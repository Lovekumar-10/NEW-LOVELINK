

import HeroSection from "../../components/Home/HeroSection";
import SuccessStories from "../../components/Home/SuccessStories";
import CTASection from "../../components/Home/Banner";
import FeaturedProfiles from "../../components/Home/FeaturedProfiles";

import TimeLine from "../../components/Home/TimeLine";


const Home = () => {
  return (
    <div>
      <HeroSection/>
      <SuccessStories/>
      <CTASection/>
      <TimeLine/>
      <FeaturedProfiles/>

    </div>
  );
};

export default Home;
