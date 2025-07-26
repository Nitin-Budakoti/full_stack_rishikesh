import { useState } from "react";
import { useNavigate } from "react-router-dom";
import i1 from "../assets/shops/jewl1.avif";
import i2 from "../assets/shops/showl.webp";
import i3 from "../assets/shops/book.jpeg";
import i4 from "../assets/shops/aurvedic.jpeg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaShoppingBag } from "react-icons/fa";

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
  const navigate = useNavigate();

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
    <section className="w-full bg-gradient-to-br from-primary-50 to-primary-200 py-20 px-4 md:px-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/30 to-transparent"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-300/20 rounded-full blur-xl"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-300/20 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
              <FaShoppingBag className="text-primary-600" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-900 font-playfair">
              Shop Local in{" "}
              <span className="text-primary-600 font-dancing">Rishikesh</span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-primary-500 rounded-full mb-6"></div>
          <p className="text-center text-primary-700 max-w-2xl">Explore the unique treasures and authentic crafts that showcase the rich cultural heritage of Rishikesh</p>
        </div>

        <div className="relative">
          {/* Arrow Left */}
          <button
            onClick={prev}
            className="absolute -left-5 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-soft rounded-full p-3 hover:bg-primary-100 hover:text-primary-600 transition-all duration-300 hidden md:flex"
          >
            <ChevronLeft className="w-6 h-6 text-primary-700" />
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
                  <div
                    onClick={() => navigate("/shop")}
                    className="card card-hover bg-white glass rounded-2xl shadow-soft transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 overflow-hidden cursor-pointer group"
                  >
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary-800 mb-3 group-hover:text-primary-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-primary-600">
                        Discover the authentic charm of Rishikesh through its vibrant local goods.
                      </p>
                      <div className="mt-4 w-0 group-hover:w-full h-0.5 bg-primary-500 transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow Right */}
          <button
            onClick={next}
            className="absolute -right-5 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-soft rounded-full p-3 hover:bg-primary-100 hover:text-primary-600 transition-all duration-300 hidden md:flex"
          >
            <ChevronRight className="w-6 h-6 text-primary-700" />
          </button>
        </div>
        
        <div className="flex justify-center mt-8 md:hidden">
          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(items.length / visibleItems) }).map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setStartIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${startIndex === idx ? 'bg-primary-500 w-6' : 'bg-primary-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingRishikesh;
