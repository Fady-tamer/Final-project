import HeroBottom from "../../components/HeroComponents/HeroBottom";
import HeroMain from "../../components/HeroComponents/HeroMain";
import HeroSideBottom from "../../components/HeroComponents/HeroSideBottom";
import HeroSideTop from "../../components/HeroComponents/HeroSideTop";

const Hero = () => {
  return (
    <div className="py-4 flex flex-col gap-4">
      <div className="flex gap-4">
        <HeroMain />

        <div className="w-4/12 flex flex-col gap-4">
          <HeroSideTop />
          <HeroSideBottom />
        </div>
      </div>

      <HeroBottom />
    </div>
  );
};

export default Hero;
