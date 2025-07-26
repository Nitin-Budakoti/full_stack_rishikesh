import { useNavigate } from 'react-router-dom';
import hotelImage from '../assets/hotel.jpeg';
import { FaHotel } from 'react-icons/fa';

const Hotel = () => {
  return (
    <section className="w-full bg-gradient-to-br from-primary-50 to-primary-200 py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/30 to-transparent"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary-300/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/3 right-0 w-32 h-32 bg-primary-300/10 rounded-full blur-lg"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
              <FaHotel className="text-primary-600" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-900 font-playfair">
              Top Picks for <span className="text-primary-600 font-dancing">Rishikesh</span> Hotels
            </h2>
          </div>
          <div className="w-24 h-1 bg-primary-500 rounded-full mb-6"></div>
          <p className="text-center text-primary-700 max-w-2xl">Discover comfortable and spiritual stays along the banks of the holy Ganges</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 md:px-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

const Card = () => {
  const navigate = useNavigate(); // for routing to Deal page

  return (
    <div className="card card-hover bg-white glass rounded-2xl shadow-soft transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 p-4 md:p-6">
        {/* Hotel Image */}
        <div className="w-full md:w-48 overflow-hidden rounded-xl group">
          <img
            src={hotelImage}
            alt="Hotel"
            className="w-full h-40 md:h-48 object-cover shadow-md transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Text Info */}
        <div className="flex-1 text-center md:text-left mt-4 md:mt-0">
          <h2 className="text-primary-600 text-sm md:text-base font-medium">4-Star Luxury Stay</h2>
          <h1 className="text-primary-900 text-lg md:text-2xl font-bold mt-1">ELLBee Ganga View</h1>
          <p className="text-primary-700 text-sm md:text-base mt-1 mb-4">
            Rishikesh, 1.7 miles from city center
          </p>

          <button
            onClick={() => navigate('/hotels/deal')}
            className="btn btn-primary group flex items-center gap-2"
          >
            View Deal
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
