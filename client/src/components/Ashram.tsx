import parmarth from "../assets/parmarth.png";
import sivananda from "../assets/sivananda.png";
import beatles from "../assets/beatles.png";
import omkarananda from "../assets/omkarananda.png";
import anandprakash from "../assets/anandprakash.png";
import phoolchatti from "../assets/phoolchatti.png";
import { FaOm } from "react-icons/fa";

const ashrams = [
  {
    name: "Parmarth Niketan",
    image: parmarth,
    description:
      "Located on the banks of the Ganga, Parmarth Niketan is one of the largest ashrams in Rishikesh known for yoga, meditation, and the iconic Ganga Aarti.",
  },
  {
    name: "Sivananda Ashram",
    image: sivananda,
    description:
      "Established by Swami Sivananda, this ashram promotes spiritual knowledge, yoga, and Vedanta philosophy with free daily classes and lectures.",
  },
  {
    name: "The Beatles Ashram (Chaurasi Kutia)",
    image: beatles,
    description:
      "Famous for being visited by The Beatles in 1968, this ashram offers an artistic and historic vibe with beautiful graffiti and forest trails.",
  },
  {
    name: "Omkarananda Ganga Sadan",
    image: omkarananda,
    description:
      "Home to a daily Iyengar Yoga program, this peaceful ashram faces the Ganga and provides a serene environment for seekers.",
  },
  {
    name: "Anand Prakash Ashram",
    image: anandprakash,
    description:
      "Founded by Yogrishi Vishvketu, this ashram blends traditional yoga with holistic healing practices and Akhanda Yoga sessions.",
  },
  {
    name: "Phool Chatti Ashram",
    image: phoolchatti,
    description:
      "Nestled in the hills, it offers 7-day yoga and meditation retreats in a natural, peaceful setting perfect for rejuvenation.",
  },
];

const Ashram = () => {
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
              <FaOm className="text-primary-600" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-900 font-playfair">
              Famous <span className="text-primary-600 font-dancing">Ashrams</span> in Rishikesh
            </h2>
          </div>
          <div className="w-24 h-1 bg-primary-500 rounded-full mb-6"></div>
          <p className="text-center text-primary-700 max-w-2xl">Discover spiritual sanctuaries along the banks of the holy Ganges for meditation and yoga practice</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ashrams.map((ashram, index) => (
            <div
              key={index}
              className="card card-hover bg-white glass rounded-2xl shadow-soft overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={ashram.image}
                  alt={ashram.name}
                  className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-primary-700 group-hover:text-primary-600 transition-colors">
                  {ashram.name}
                </h2>
                <p className="text-sm text-primary-600">{ashram.description}</p>
                <div className="mt-4 w-0 group-hover:w-full h-0.5 bg-primary-500 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ashram;
