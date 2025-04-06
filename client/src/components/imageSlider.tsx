import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";

const images = [img1, img2, img3, img4, img5];

const ImageSlider = () => {
  return (
    <div className="w-full overflow-hidden py-10 bg-gray-100 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Explore the Rishikesh Adventures
      </h2>
      <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96">
        <div className="absolute top-0 left-0 flex animate-slide gap-6 w-[2000px] hover:[animation-play-state:paused]">
          {[...images, ...images].map((img, index) => (
            <div
              key={index}
              className="min-w-[250px] sm:min-w-[280px] md:min-w-[300px] lg:min-w-[350px] h-full flex-shrink-0"
            >
              <div className="w-full h-full transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-4 hover:border-blue-400 rounded-xl">
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
