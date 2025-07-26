import { Link } from "react-router-dom";
import i6 from "../assets/i6.jpg";
import i1 from "../assets/i1.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";
import i4 from "../assets/i4.jpg";
import i5 from "../assets/i5.jpg";
import { FaMountain } from "react-icons/fa";

const images = [i6, i1, i2, i3, i4, i5];

const ImageSlider = () => {
  return (
    <div className="w-full bg-gradient-to-b from-primary-50 to-primary-200 py-16 flex flex-col items-center overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/30 to-transparent"></div>
      <div className="absolute -bottom-10 right-1/4 w-40 h-40 bg-primary-300/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-primary-300/10 rounded-full blur-lg"></div>
      
      {/* 🌟 Heading */}
      <div className="relative z-10 mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
            <FaMountain className="text-primary-600" />
          </div>
          <span className="text-primary-600 uppercase tracking-wider font-medium">Adventure Awaits</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center font-playfair text-primary-900">
          <span className="gradient-text bg-gradient-to-r from-primary-400 to-primary-600">Explore the </span>
          <span className="font-dancing text-primary-800">Rishikesh Adventures</span>
        </h2>
        
        <div className="w-24 h-1 bg-primary-500 rounded-full mx-auto mt-6"></div>
      </div>

      {/* 🚀 Smooth Infinite Scroll Slider */}
      <div className="relative w-full h-[18rem] sm:h-[20rem] md:h-[24rem] lg:h-[28rem] overflow-hidden">
        <div className="absolute top-0 left-0 flex gap-14 px-10 animate-slide hover:[animation-play-state:paused]">
          {[...images, ...images].map((img, index) => (
            <div
              key={index}
              className="min-w-[300px] sm:min-w-[340px] h-full group transition-transform duration-700 ease-in-out"
              style={{ perspective: "1000px" }}
            >
              <Link to="/adventure" className="block w-full h-full">
                <div className="w-full h-full rounded-2xl border-2 border-primary-200 bg-white overflow-hidden shadow-soft group-hover:shadow-glow group-hover:z-10 transition-all duration-500">
                  <div className="relative w-full h-full overflow-hidden rounded-2xl">
                    <img
                      src={img}
                      alt={`slide-${index}`}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <div className="text-white text-center">
                        <p className="text-lg font-bold">Discover</p>
                        <div className="w-10 h-0.5 bg-primary-400 mx-auto my-2"></div>
                        <p className="text-sm">Click to explore adventures</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-[url('https://www.transparenttextures.com/patterns/wave.png')] bg-repeat-x opacity-10 animate-[wave_15s_linear_infinite]"></div>
    </div>
  );
};

export default ImageSlider;
