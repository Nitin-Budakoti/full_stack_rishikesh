import ImageSlider from "./imageSlider";
import { useEffect, useState } from "react";
import boothnathTemple from "../assets/boothnathTemple.jpg";
import img_1 from "../assets/img_1.jpg";
import img_2 from "../assets/img_2.jpg";
import img_4 from "../assets/img_4.jpg";
import img_5 from "../assets/img_5.jpg";
import img_8 from "../assets/img_8.jpg";
const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-green-100 to-white pt-0 mt-0">
      prachi
      <HeroSection />
      <ImageSlider />
    </div>
  );
};
export default LandingPage;



const HeroSection = () => {
  const images = [boothnathTemple,img_1,img_2,img_4,img_5,img_8 ]; // Add your images here
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, );

  return (
    <div
      className="relative h-screen flex flex-col justify-center items-center text-white bg-cover transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundPosition: 'center 30%',
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


