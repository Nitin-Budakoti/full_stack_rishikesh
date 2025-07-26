import { useNavigate } from "react-router-dom";
import yogaImg from "../assets/yoga pic/yoga4.jpg";
import { FaOm, FaArrowRight } from "react-icons/fa";

const YogaSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/ashrams");
  };

  return (
    <section className="w-full bg-gradient-to-br from-primary-50 to-primary-200 py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/30 to-transparent"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary-300/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/3 right-0 w-32 h-32 bg-primary-300/10 rounded-full blur-lg"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        
        {/* Left Text Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
              <FaOm className="text-primary-600" />
            </div>
            <span className="text-primary-600 uppercase tracking-wider font-medium">Yoga & Meditation</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-dancing text-primary-900 mb-6 leading-tight">
            Experience Tranquility through Yoga in Rishikesh
          </h2>
          
          <div className="w-24 h-1 bg-primary-500 rounded-full mb-6 hidden md:block"></div>
          
          <p className="text-lg text-primary-700 mb-8 leading-relaxed">
            Rishikesh, the yoga capital of the world, offers a serene escape from the chaos of life.
            Join guided retreats, learn ancient yogic practices, and reconnect with your inner peace
            along the banks of the holy Ganga.
          </p>
          
          <button
            onClick={handleClick}
            className="btn bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg hover:scale-105 focus:ring-primary-500 group flex items-center gap-2"
          >
            Explore Yoga Retreats
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Image - clickable */}
        <div className="flex-1">
          <div
            onClick={handleClick}
            className="w-full h-[300px] sm:h-[350px] md:h-[450px] overflow-hidden rounded-2xl shadow-glow transform hover:scale-105 transition-transform duration-500 cursor-pointer relative group"
          >
            <div className="absolute inset-0 border-2 border-primary-300 rounded-2xl transform scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
            <img
              src={yogaImg}
              alt="Yoga in Rishikesh"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default YogaSection;
