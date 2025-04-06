import ImageSlider from "./imageSlider";
import heroSection from "../assets/heroSection.jpg";
const LandingPage = () => {
  return <div className="bg-green-500">
      <HeroSection />
      <ImageSlider />
    </div>

};
export default LandingPage;

const HeroSection = () => {
  return <div
  className="h-screen flex flex-col justify-center items-center text-black bg-cover bg-center"
  style={{ backgroundImage: `url(${heroSection})` }}>
    <h1 className="text-5xl font-bold mb-4">Welcome to Rishikesh</h1>
    <h2 className="text-5xl font-bold"> Explore the uttrakhands best tourist place</h2> 
    <h2 className="text-5xl font-bold"> testing vercel deployment</h2>
    <h2 className="text-5xl font-bold"> Shaurya Bist</h2>
    </div>;
};
