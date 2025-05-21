import { useState } from "react";
import i1 from "../assets/i1.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";
import i4 from "../assets/i4.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  { title: "Handmade Jewelry", image: i1 },
  { title: "Woolen Shawls", image: i2 },
  { title: "Spiritual Books", image: i3 },
  { title: "Ayurvedic Products", image: i4 },
  { title: "Wooden Handicrafts", image: i2 },
  { title: "Essential Oils", image: i3 },
];

const ShoppingRishikesh = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleItems = 3;

  const next = () => {
    if (startIndex + visibleItems < items.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#E0F7FA] to-[#80DEEA] py-16 px-4 md:px-20 mb-12">
      {/* The "mb-12" ensures there is space below this section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[#2A9D8F]">
          Shop Local in{" "}
          <span className="text-[#F4A261] font-dancing">Rishikesh</span>
        </h2>

        <div className="relative">
          {/* Arrow Left */}
          <button
            onClick={prev}
            className="absolute -left-3 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-[#80DEEA] transition hidden md:flex"
          >
            <ChevronLeft className="w-6 h-6 text-[#2A9D8F]" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${startIndex * (100 / visibleItems)}%)` }}
            >
              {items.map((item, index) => (
                <div
                  key={index}
                  className="min-w-full sm:min-w-[50%] md:min-w-[33.33%] px-4 mb-8"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover rounded-t-2xl"
                    />
                    <div className="p-5">
                      <h3 className="text-xl font-semibold text-[#2A9D8F] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#4B5563]">
                        Discover the authentic charm of Rishikesh through its vibrant local goods.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow Right */}
          <button
            onClick={next}
            className="absolute -right-3 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-[#80DEEA] transition hidden md:flex"
          >
            <ChevronRight className="w-6 h-6 text-[#2A9D8F]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShoppingRishikesh;
