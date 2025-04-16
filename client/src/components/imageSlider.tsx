import i6 from "../assets/i6.jpg";
import i1 from "../assets/i1.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";
import i4 from "../assets/i4.jpg";
import i5 from "../assets/i5.jpg";
import i7 from "../assets/i7.jpg";

const images = [i6, i1,i2, i3, i4, i5,i7];

const ImageSlider = () => {
  return (
    <div className="w-full overflow-hidden py-10 bg-gray-100 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-600 mb-12 font-bold mb-6 font-serif "style={{ color: '#5F9EA0' }}>
        Explore the Rishikesh Adventures
      </h2>
      <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96">/*gap between h2 and image*/
        <div className="absolute top-0 left-0 flex animate-slide gap-12 w-[2000px] hover:[animation-play-state:paused]">
          {[...images, ...images].map((img, index) => (
            <div
              key={index}
              className="h-full flex-shrink-0"
              style={{
                minWidth: "250px",
                height: "200px",
              }}
            >
              <div
                className="transition-all duration-700 ease-in-out hover:scale-125 hover:shadow-2xl hover:border-4 hover:scale-125 hover:shadow-2xl hover:border-none-400 rounded-xl w-full h-full"
              >
                <img
                  src={img}
                  alt={`slider-${index}`}
                  className="w-full h-full object-cover rounded-xl"
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

