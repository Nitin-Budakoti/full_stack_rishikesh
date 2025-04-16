import parmarth from "../assets/parmarth.png";
import sivananda from "../assets/sivananda.png";
import beatles from "../assets/beatles.png";
import omkarananda from "../assets/omkarananda.png";
import anandprakash from "../assets/anandprakash.png";
import phoolchatti from "../assets/phoolchatti.png";

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
    <div className="bg-white px-4 py-8 md:px-16 text-gray-800 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-green-700">
        Famous Ashrams in Rishikesh
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {ashrams.map((ashram, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl shadow-xl p-4 hover:shadow-2xl transition duration-300"
          >
            <img
              src={ashram.image}
              alt={ashram.name}
              className="rounded-xl h-48 w-full object-cover mb-4"
            />
            <h2 className="text-xl font-semibold mb-2 text-blue-600">
              {ashram.name}
            </h2>
            <p className="text-sm">{ashram.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ashram;  
