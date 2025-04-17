import i6 from "../assets/i6.jpg";
import i1 from "../assets/i1.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";
import i4 from "../assets/i4.jpg";
import i5 from "../assets/i5.jpg";


const images = [i6, i1, i2, i3, i4, i5];

const ImageSlider = () => {
  return (
    <div className="w-full pt-14 pb-6 bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center relative z-0">
      {/* 🌟 Beautiful Heading */}
      <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 px-6 py-4 bg-gradient-to-r from-cyan-100 via-white to-cyan-100 rounded-xl shadow-md tracking-wide">
        <span className="font-serif text-gray-800">
          <span className="text-[#008B8B] drop-shadow-md">Explore the </span>
          <span className="font-dancing text-[#5F9EA0] drop-shadow-lg">
            Rishikesh Adventures
          </span>
        </span>
      </h2>

      {/* 🚀 Slider */}
      <div className="relative w-full h-72 sm:h-80 md:h-96 lg:h-[28rem]">
        <div className="absolute top-0 left-0 flex gap-16 px-10 w-[3000px] animate-slide hover:[animation-play-state:paused] z-10">
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
              <div className="relative w-full h-full rounded-2xl shadow-xl bg-white border border-gray-200 group-hover:z-20">
                <img
                  src={img}
                  alt={`slider-${index}`}
                  className="w-full h-full object-cover rounded-2xl transform transition duration-700 ease-in-out group-hover:scale-125 group-hover:rotate-2 group-hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] group-hover:border-4 group-hover:border-cyan-400"
                  style={{
                    transformOrigin: "center",
                  }}
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
