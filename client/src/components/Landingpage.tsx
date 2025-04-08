import ImageSlider from "./imageSlider";
import boothnathTemple from "../assets/boothnathTemple.jpg";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-green-100 to-white">
      <HeroSection />
      <ImageSlider />
    </div>
  );
};
export default LandingPage;

const HeroSection = () => {
  return (
    <div
      className="relative h-screen flex flex-col justify-center items-center text-white bg-cover"
      style={{ 
        backgroundImage: `url(${boothnathTemple})`,
        backgroundPosition: 'center 30%' 
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl font-bold mb-6 font-serif">
          Discover Spiritual Rishikesh
        </h1>
        <p className="text-2xl mb-8 max-w-2xl mx-auto">
          Where the Ganges meets the Himalayas in divine harmony
        </p>
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
          Explore Sacred Sites
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-60 text-6xl">
        ॐ
      </div>
    </div>
  );
};
