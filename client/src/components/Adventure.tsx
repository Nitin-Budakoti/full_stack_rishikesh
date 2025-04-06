import raftingImg from "../assets/rafting.jpg.jpg";
import bungeeImg from "../assets/bungee.jpg.jpg";
import flyingFoxImg from "../assets/flyingfox.jpg.jpg";
import campingImg from "../assets/camping.jpg.jpg";
import trekkingImg from "../assets/trekking.jpg.jpg";
import kayakingImg from "../assets/kayaking.jpg.jpg";

const adventures = [
  {
    title: "River Rafting",
    image: raftingImg,
    description: "Ride the thrilling rapids of the Ganges with expert guides.",
    location: "Shivpuri, Rishikesh",
    price: "From ₹800"
  },
  {
    title: "Bungee Jumping",
    image: bungeeImg,
    description: "Leap from India’s highest bungee point in Mohan Chatti!",
    location: "Mohan Chatti, Rishikesh",
    price: "From ₹3500"
  },
  {
    title: "Flying Fox",
    image: flyingFoxImg,
    description: "Zip across the river valley with breathtaking views!",
    location: "Shivpuri, Rishikesh",
    price: "From ₹2000"
  },
  {
    title: "Camping",
    image: campingImg,
    description: "Camp under the stars beside the Ganga or deep in the forest.",
    location: "Beach/Jungle, Rishikesh",
    price: "From ₹1200"
  },
  {
    title: "Trekking",
    image: trekkingImg,
    description: "Explore the scenic trails and hidden waterfalls of Rishikesh.",
    location: "Neer Waterfall, Patna Trek",
    price: "From ₹500"
  },
  {
    title: "Kayaking",
    image: kayakingImg,
    description: "Paddle along the calm stretches of the Ganges.",
    location: "Ganga River, Rishikesh",
    price: "From ₹1000"
  },
];

const Adventure = () => {
  return (
    <div className="bg-white text-black px-4 md:px-12 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-8">
        Adventure Activities in Rishikesh
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {adventures.map((activity, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 overflow-hidden"
          >
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-blue-500 mb-1">
                {activity.title}
              </h3>
              <p className="text-gray-600 mb-1 text-sm">{activity.location}</p>
              <p className="text-gray-700 mb-3 text-sm">{activity.description}</p>
              <p className="text-green-600 font-semibold mb-3">{activity.price}</p>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-md shadow hover:shadow-lg transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adventure;
