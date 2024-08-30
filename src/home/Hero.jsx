
import HomeHero from "./HomeHero";


const Hero = () => {
  return (
    <div>
      <div
        id="home"
        className="lg:bg-homeDesktop w-full h-screen bg-cover md:bg-homeTablet bg-homeMobile">
   
        <HomeHero/>
      </div>
    </div>
  );
};

export default Hero;
