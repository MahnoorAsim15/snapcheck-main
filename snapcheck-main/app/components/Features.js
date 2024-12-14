import FeatureCard from "./FeaturesCard";
import images from "../utils/FeatureIcons";

const Features = () => {
  return (
    <div className="flex flex-col items-center gap-16 md:gap-[90px]">
      <div className=" flex flex-col items-center w-max gap-5">
        <h1 className="text-purple-950 font-bold lg:text-5xl md:text-3xl text-xl">
          Features of Employee Monitoring
        </h1>
        <h4 className="text-gray-950 lg:text-xl md:text-base text-xs">
          With snapcheck System solutions
        </h4>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
        {images.map((image, index) => (
          <FeatureCard key={index} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Features;
