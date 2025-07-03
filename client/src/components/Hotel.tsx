import { useNavigate } from 'react-router-dom';
import hotelImage from '../assets/hotel.jpeg';

const Hotel = () => {
  return (
    <div className="bg-gray-50 text-white px-4 md:px-8 py-8">
      <div className="ml-2 md:ml-8 mb-6">
        <b className="text-gray-800 text-xl md:text-2xl font-semibold">
          Top Picks for Rishikesh Hotels
        </b>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-2 md:px-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

const Card = () => {
  const navigate = useNavigate(); // for routing to Deal page

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
        {/* Hotel Image */}
        <div className="w-full md:w-48">
          <img
            src={hotelImage}
            alt="Hotel"
            className="rounded-xl w-full h-40 md:h-48 object-cover shadow-md transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Text Info */}
        <div className="flex-1 text-center md:text-left mt-4 md:mt-0">
          <h2 className="text-indigo-600 text-sm md:text-base font-medium">4-Star Luxury Stay</h2>
          <h1 className="text-gray-900 text-lg md:text-2xl font-bold mt-1">ELLBee Ganga View</h1>
          <p className="text-gray-500 text-sm md:text-base mt-1 mb-4">
            Rishikesh, 1.7 miles from city center
          </p>

          <button
            onClick={() => navigate('/hotels/deal')}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg active:scale-95 transition"
          >
            View Deal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
