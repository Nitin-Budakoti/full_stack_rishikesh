import { useNavigate } from "react-router-dom";
import yogaImg from "../assets/i2.jpg";

const YogaSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/ashrams");
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#f5f5f5] to-[#e0f7fa] py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-dancing text-[#00695c] mb-6 leading-tight">
            Experience Tranquility through Yoga in Rishikesh
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Rishikesh, the yoga capital of the world, offers a serene escape from the chaos of life.
            Join guided retreats, learn ancient yogic practices, and reconnect with your inner peace
            along the banks of the holy Ganga.
          </p>
          <button
            onClick={handleClick}
            className="mt-2 bg-[#00796b] text-white px-5 py-2.5 rounded-md shadow hover:bg-[#004d40] transition duration-300"
          >
            Explore Yoga Retreats
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <div className="w-full h-[300px] sm:h-[350px] md:h-[450px] overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500">
            <img
              src={yogaImg}
              alt="Yoga in Rishikesh"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default YogaSection;
