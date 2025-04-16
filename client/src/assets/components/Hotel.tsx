import hotelImage from '../assets/hotel.jpeg';

const Hotel = () => {

  return (
    <div className="bg-white text-white px-4 md:px-8 py-6 ">
      <div className="ml-2 md:ml-8 mb-4">
        <b className="text-black text-lg md:text-xl">Top picks for Rishikesh Hotels</b>
      </div>
      <div className="space-y-6">
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
  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 mx-2 md:mx-8 shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-3xl"> 
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-blue-500 text-base md:text-lg font-semibold mb-1">4-Star Hotel</h1>
          <h1 className="text-gray-800 text-xl md:text-2xl font-bold mb-1">ELLBee Ganga View</h1>
          <h1 className="text-blue-400 text-sm md:text-base mb-4">
            Rishikesh, 1.7 miles to city center
          </h1>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            View Deal
          </button>
        </div>
        <div className="flex-shrink-0">
          <img
            src={hotelImage}
            alt="hotel"
            className="rounded-xl shadow-xl h-40 w-full md:w-48 md:h-48 object-cover transform hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Hotel;
