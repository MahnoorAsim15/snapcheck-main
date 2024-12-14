// FeaturesCard.js
const FeatureCard = ({ image }) => {
  return (
      <div className="px-2 py-5 md:px-10 md:py-14 flex flex-col items-center border-purple-900 border-[0.5px] border-opacity-30 rounded-xl gap-3 lg:gap-4 lx:gap-5 custom-shadow text-center ">
          <img src={image} alt="Feature" className="w-14 h-auto" />
          <h2 className="text-black font-bold text-2xl lx:text-4xl">Activity tracking</h2>
          <p className="text-black text-xs font-extralight md:text-base lg:text-lg md:font-normal"> Customize monitoring solutions to enhance employee performance while safeguarding the information.</p>
      </div>
  );
};

export default FeatureCard;