import raftingImg from "../assets/rafting.jpg.jpg";
import bungeeImg from "../assets/bungee.jpg.jpg";
import flyingFoxImg from "../assets/flyingfox.jpg.jpg";
import campingImg from "../assets/camping.jpg.jpg";
import trekkingImg from "../assets/trekking.jpg.jpg";
import kayakingImg from "../assets/kayaking.jpg.jpg";
import { FaMountain } from "react-icons/fa";

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
    description: "Leap from India's highest bungee point in Mohan Chatti!",
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
    <section className="w-full bg-gradient-to-br from-primary-50 to-primary-200 py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/30 to-transparent"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary-300/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/3 right-0 w-32 h-32 bg-primary-300/10 rounded-full blur-lg"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
              <FaMountain className="text-primary-600" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-900 font-playfair">
              Adventure <span className="text-primary-600 font-dancing">Activities</span> in Rishikesh
            </h2>
          </div>
          <div className="w-24 h-1 bg-primary-500 rounded-full mb-6"></div>
          <p className="text-center text-primary-700 max-w-2xl">Experience the thrill of adventure in the adventure capital of India</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {adventures.map((activity, index) => (
            <div
              key={index}
              className="card card-hover bg-white glass rounded-2xl shadow-soft overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-700 mb-1 group-hover:text-primary-600 transition-colors">
                  {activity.title}
                </h3>
                <p className="text-primary-600 text-sm mb-1">{activity.location}</p>
                <p className="text-primary-700 mb-3 text-sm">{activity.description}</p>
                <p className="text-primary-600 font-semibold mb-3">{activity.price}</p>
                <button className="btn btn-primary w-full">
                  Book Now
                </button>
                <div className="mt-4 w-0 group-hover:w-full h-0.5 bg-primary-500 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Adventure;
