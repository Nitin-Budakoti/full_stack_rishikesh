import i6 from "../assets/i6.jpg";
import i1 from "../assets/i1.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";
import i4 from "../assets/i4.jpg";
import i5 from "../assets/i5.jpg";

const images = [i6, i1, i2, i3, i4, i5];

const ShoppingLocalRishikesh = () => {
  return (
    <section className="w-full py-12 px-6 md:px-20 bg-gradient-to-br from-[#f5f5f5] to-[#e0f7fa]">
      {/* 🌟 Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#008B8B] mb-12">
        Discover the Best Local Shops in Rishikesh
      </h2>

      {/* Shopping Items */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12">
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 transform transition-all duration-700 ease-in-out hover:scale-105 hover:shadow-2xl"
            style={{ perspective: "1000px" }}
          >
            <div className="relative w-full h-72 sm:h-80 rounded-lg overflow-hidden bg-white shadow-lg">
              <img
                src={img}
                alt={`shopping-item-${index}`}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out transform hover:scale-110 hover:rotate-2"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-[#00695c]">Shop {index + 1}</h3>
              <p className="text-gray-600 text-sm mt-2">
                Explore authentic and handcrafted products from the local markets of Rishikesh.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center mt-8">
        <button className="px-4 py-2 bg-[#008B8B] text-white rounded-full hover:bg-[#00796B] transform transition-all duration-300">
          View More Shops
        </button>
      </div>
    </section>
  );
};

export default ShoppingLocalRishikesh;
