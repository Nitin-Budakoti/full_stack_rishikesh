import i6 from "../assets/i6.jpg";
import i1 from "../assets/i1.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";
import i4 from "../assets/i4.jpg";
import i5 from "../assets/i5.jpg";

const images = [i6, i1, i2, i3, i4, i5];

const ImageSlider = () => {
  return (
    <div className="w-full pt-10 pb-6 bg-gradient-to-b from-[#E0F7FA] to-[#80DEEA] flex flex-col items-center relative z-0 overflow-hidden">
      {/* 🌟 Heading */}
      <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 px-6 py-4 bg-gradient-to-r from-[#80DEEA] to-[#2A9D8F] text-white rounded-xl shadow-lg tracking-wide">
        <span className="font-serif text-white">
          <span className="text-[#F4A261] drop-shadow-md">Explore the </span>
          <span className="font-dancing text-white drop-shadow-lg">
  Rishikesh Adventures
</span>

        </span>
      </h2>

      {/* 🚀 Infinite Horizontal Slider */}
      <div className="relative w-full h-72 sm:h-80 md:h-96 lg:h-[28rem] overflow-hidden">
        <div className="absolute top-0 left-0 flex gap-16 px-10 w-[3000px] animate-slide hover:[animation-play-state:paused]">
          {[...images, ...images].map((img, index) => (
            <div
              key={index}
              className="relative transition-transform duration-700 ease-in-out group"
              style={{
                minWidth: "340px",
                height: "100%",
                perspective: "1000px",
              }}
            >
              <div className="relative w-full h-full rounded-2xl shadow-lg bg-white border border-[#2A9D8F] group-hover:z-20">
                <img
                  src={img}
                  alt={`slider-${index}`}
                  className="w-full h-full object-cover rounded-2xl transform transition duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.2)] group-hover:border-4 group-hover:border-[#F4A261]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
