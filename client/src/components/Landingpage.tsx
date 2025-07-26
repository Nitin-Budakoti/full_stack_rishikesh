import React, {  useEffect, useRef, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import ImageSlider from "./imageSlider";
import YogaSlider from "./YogaSlider";
import ShoppingRishikesh from "./ShoppingRishikesh";
import Chatbot from "./ChatBot";
import boothnathTemple from "../assets/boothnathTemple.jpg";
import img_1 from "../assets/img_1.jpg";
import img_2 from "../assets/img_2.jpg";
import img_4 from "../assets/img_4.jpg";
import img_5 from "../assets/img_5.jpg";
import img_8 from "../assets/img_8.jpg";

const LandingPage: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary-900 to-primary-950">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-radial from-primary-800/20 to-transparent"></div>
      </div>
      
      {/* Animated Ganga river effect */}
      <div className="fixed top-0 left-0 right-0 h-64 -z-10 opacity-30">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/water.png')] animate-[waterFlow_20s_linear_infinite] opacity-40"></div>
      </div>

      {/* Himalayan peaks silhouette */}
      <div className="fixed bottom-0 left-0 right-0 h-64 -z-10 bg-[url('https://i.imgur.com/JYw5FyK.png')] bg-bottom bg-contain bg-repeat-x opacity-25"></div>

      {/* Floating diya lights */}
      <div className="fixed top-1/4 left-10 w-8 h-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-400/90 to-transparent rounded-full blur-[2px] animate-float"></div>
      <div className="fixed top-1/3 right-20 w-6 h-6 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-300/90 to-transparent rounded-full blur-[2px] animate-float animation-delay-2000"></div>
      <div className="fixed bottom-1/4 left-1/3 w-5 h-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-500/80 to-transparent rounded-full blur-[2px] animate-float animation-delay-3000"></div>

      <div className="flex flex-col space-y-0">
        <HeroSection />
        <div className="section-divider h-16 bg-gradient-to-b from-transparent to-primary-50/30"></div>
        
        <ImageSlider />
        <div className="section-divider h-16 bg-gradient-to-b from-transparent to-primary-50/30"></div>
        
        <YogaSlider />
        <div className="section-divider h-16 bg-gradient-to-b from-transparent to-primary-50/30"></div>
        
        <ShoppingRishikesh />
        <div className="section-divider h-16 bg-gradient-to-b from-transparent to-primary-50/30"></div>
        
        <Interactive3DMap />
        <div className="section-divider h-16 bg-gradient-to-b from-transparent to-primary-50/30"></div>
        
        <TestimonialCarousel />
        <div className="section-divider h-16 bg-gradient-to-b from-transparent to-primary-50/30"></div>
        
        <BoatAnimation />
    
        <WeatherWidget />
        <Chatbot /> {/* Add the Chatbot component here */}
        <ContactUs />
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  const images = [boothnathTemple, img_1, img_2, img_4, img_5, img_8];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentImageIndex((prev) => (prev + 1) % images.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative h-screen flex flex-col justify-center items-center text-white bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(2, 15, 25, 0.65), rgba(4, 35, 55, 0.85)), url(${images[currentImageIndex]})`,
      }}
    >
      {/* Decorative border elements */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-accent-500 to-transparent opacity-80"></div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-accent-500 to-transparent opacity-80"></div>

      {/* Shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent shimmer opacity-20"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="mb-10">
          <h2 className="text-lg md:text-xl font-light tracking-widest text-accent-300 mb-3 animate-pulse">
            THE GATEWAY TO THE GARHWAL HIMALAYAS
          </h2>
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 font-playfair gradient-text bg-gradient-to-r from-accent-200 to-accent-400">
            Rishikesh
          </h1>
          <div className="w-24 h-1 bg-accent-500 mx-auto my-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-accent-100 max-w-2xl mx-auto leading-relaxed font-light">
            Where spirituality meets adventure in the lap of the Himalayas
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="btn btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:animate-pulse" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Explore
          </button>
          <button className="btn btn-outline w-full sm:w-auto">
            View Packages
          </button>
        </div>
      </div>

      {/* Scrolling indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};


const HOTSPOTS: string[] = [
  "Triveni Ghat Rishikesh",
  "Neelkanth Mahadev Temple Rishikesh",
  "Ram Jhula Rishikesh",
  "Parmarth Niketan Ashram Rishikesh",
  "Lakshman Jhula Rishikesh",
];

const STYLES: string[] = ["roadmap", "satellite"];

const Interactive3DMap: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [search, setSearch] = useState<string>(HOTSPOTS[0]);
  const [manualSearch, setManualSearch] = useState<string>("");
  const [mapStyle, setMapStyle] = useState<string>("satellite");
  const [mapUrl, setMapUrl] = useState<string>("");

  const GOOGLE_MAPS_API_KEY = "AIzaSyCcG6qP4M3JUP2ifGxxn0ZCDM643ET86ig";

  const updateMapUrl = (location: string, style: string): void => {
    const query = encodeURIComponent(location);
    const url = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${query}&maptype=${style}`;
    setMapUrl(url);
  };

  const handleSearch = (): void => {
    const locationToSearch = manualSearch.trim() || search;
    updateMapUrl(locationToSearch, mapStyle);
  };

  const handleGeolocation = (): void => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = `${position.coords.latitude},${position.coords.longitude}`;
        const url = `https://www.google.com/maps/embed/v1/view?key=${GOOGLE_MAPS_API_KEY}&center=${coords}&zoom=15&maptype=${mapStyle}`;
        setMapUrl(url);
      },
      () => {
        alert("Failed to fetch current location.");
      }
    );
  };

  useEffect(() => {
    updateMapUrl(search, mapStyle);
  }, [mapStyle]);

  return (
    <section
      id="map"
      className="relative overflow-hidden py-20 bg-gradient-to-r from-secondary-100/80 to-secondary-200/80 backdrop-blur-md"
    >
      {/* Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 mb-4 drop-shadow-lg tracking-wide">
            Explore
            <span className="text-accent-500 font-dancing drop-shadow-md ml-2">
              Rishikesh Adventures
            </span>
          </h2>
          <div className="w-16 h-1 bg-accent-500 mx-auto my-4 rounded-full"></div>
          <p className="text-primary-800 text-base sm:text-lg max-w-2xl mx-auto">
            Discover sacred sites and adventure hotspots along the Ganges River
            with a stunning 3D immersive experience.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <select
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field px-4 py-2 rounded-xl"
          >
            {HOTSPOTS.map((place: string) => (
              <option key={place} value={place}>
                {place}
              </option>
            ))}
          </select>

          <input
            type="text"
            value={manualSearch}
            onChange={(e) => setManualSearch(e.target.value)}
            placeholder="Or enter any location"
            className="input-field px-4 py-2 rounded-xl flex-grow max-w-xs"
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />

          <select
            value={mapStyle}
            onChange={(e) => setMapStyle(e.target.value)}
            className="input-field px-4 py-2 rounded-xl"
          >
            {STYLES.map((style: string) => (
              <option key={style} value={style}>
                {style.charAt(0).toUpperCase() + style.slice(1)}
              </option>
            ))}
          </select>

          <button
            onClick={handleSearch}
            className="btn btn-primary px-5 py-2.5"
          >
            Search
          </button>

          <button
            onClick={handleGeolocation}
            className="btn btn-secondary px-5 py-2.5"
          >
            Use My Location
          </button>
        </div>

        {/* Map Card */}
        <div
          className={`card card-hover relative transition-all duration-700 ease-in-out border-2 border-accent-500/30 rounded-3xl overflow-hidden shadow-soft ${
            isExpanded ? "h-[550px] sm:h-[600px]" : "h-[350px] sm:h-[450px]"
          }`}
        >
          <iframe
            title="Interactive 3D Map"
            src={mapUrl}
            className="absolute inset-0 w-full h-full rounded-3xl"
            loading="lazy"
            allowFullScreen
          ></iframe>

          {/* Expand Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute bottom-5 right-5 p-3 glass hover:bg-white/90 text-accent-500 border border-white/50 rounded-full backdrop-blur-md shadow-md transition duration-300"
            aria-label={isExpanded ? "Collapse Map" : "Expand Map"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isExpanded ? "M6 18L18 6M6 6l12 12" : "M12 4v16m8-8H4"}
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};




const BoatAnimation: React.FC = () => {
  const boatRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Get window width to handle full screen movement
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!boatRef.current) return;
      const scrollY = window.scrollY;
      const moveX = (scrollY * 0.5) % (windowWidth + 200); // 200 is buffer for boat size

      boatRef.current.style.transform = `translateX(${moveX - 100}px) rotateY(8deg)`; 
      // start slightly off left (-100px) to fully come from left side
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [windowWidth]);

  return (
    <div
      ref={boatRef}
      className="fixed bottom-20 left-0 z-50 w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 transition-transform duration-100 ease-linear pointer-events-none"
      style={{ transform: "translateX(-100px) rotateY(8deg)" }}
    >
      {/* Boat SVG */}
      <svg
        viewBox="0 0 128 64"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-2xl"
      >
        {/* Water Ripple */}
        <ellipse
          cx="64"
          cy="58"
          rx="60"
          ry="6"
          fill="#60A5FA"
          opacity="0.4"
        />
        {/* Boat Base */}
        <path
          d="M10 40 Q64 60 118 40 L110 50 Q64 70 18 50 Z"
          fill="#8B4513"
          stroke="#5C3317"
          strokeWidth="2"
        />
        {/* Mast */}
        <rect x="62" y="10" width="4" height="30" fill="#5C3317" />
        {/* Left Sail */}
        <path
          d="M64 12 L30 38 L64 38 Z"
          fill="#F3F4F6"
          stroke="#D1D5DB"
          strokeWidth="1"
        />
        {/* Right Sail */}
        <path
          d="M64 12 L98 38 L64 38 Z"
          fill="#E5E7EB"
          stroke="#D1D5DB"
          strokeWidth="1"
        />
        {/* Decoration */}
        <circle cx="92" cy="30" r="3" fill="#FACC15" />
      </svg>
    </div>
  );
};
const testimonials = [
  {
    quote: "Serene riverside destination known for its systematic evening ritual and spiritual ambiance.",
    author: "Tripadvisor AI summary",
    rating: 5
  },
  {
    quote: "The evening aarti at the Ganges is absolutely mesmerizing—I felt the spiritual energy wash over me.",
    author: "TravellerGoa, TripAdvisor",
    rating: 5
  },
  {
    quote: "Rafting on the Ganges was an absolute adrenaline rush. Rishikesh is where adventure meets spirituality!",
    author: "AdventureSeeker, TripAdvisor",
    rating: 4
  },
  {
    quote: "Meditating by the riverbank each morning helped me find a calm I never knew I needed. Pure magic.",
    author: "ZenMaster123, TripAdvisor",
    rating: 5
  },
];

const TestimonialCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-16 bg-gradient-to-b from-primary-100 via-primary-50 to-white relative overflow-hidden" id="testimonials">
      {/* Optional blurred background decorations */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary-300/20 blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent-300/20 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-primary-800">Visitor Experiences</h2>
          <div className="w-20 h-1 bg-accent-400 mx-auto my-4 rounded-full"></div>
          <p className="text-primary-700 max-w-2xl mx-auto text-base md:text-lg">
            Hear from travelers who've experienced the magic of Rishikesh
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="glass card p-8 md:p-10 rounded-2xl border border-primary-200/50 shadow-soft transition-all">
            {/* Star Ratings */}
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 md:w-6 md:h-6 ${
                    i < testimonials[current].rating ? "text-primary-500" : "text-slate-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="italic text-lg md:text-xl text-primary-700 text-center leading-relaxed mb-6">
              "{testimonials[current].quote}"
            </blockquote>

            {/* Author */}
            <p className="font-semibold text-primary-600 text-center">— {testimonials[current].author}</p>

            {/* Dots */}
            <div className="flex justify-center mt-6 space-x-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3.5 h-3.5 rounded-full transition-all ${
                    i === current ? "bg-primary-500 scale-125" : "bg-primary-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full glass hover:bg-primary-400/50 text-primary-800 border border-primary-200/50 shadow-soft transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full glass hover:bg-primary-400/50 text-primary-800 border border-primary-200/50 shadow-soft transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7-7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};


const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState({
    location: "Rishikesh",
    temp: 28,
    condition: "Sunny",
    icon: "☀️",
    updatedAt: new Date().toLocaleTimeString(),
  });

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Rishikesh&appid=f4bda24d4fde692db50f38ec11c1b1b2&units=metric`
      );
      const data = await response.json();
      
      if (response.ok) {
        setWeather(prev => ({
          ...prev,
          temp: Math.round(data.main.temp),
          condition: data.weather[0].main,
          icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          updatedAt: new Date().toLocaleTimeString(),
        }));
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(fetchWeather, 300000); // refresh every 5 minutes
    return () => clearInterval(interval);
  }, []);

  return (
 <div className="fixed bottom-4 right-4 z-40 glass card border border-primary-700/30
  rounded-xl px-3 py-2 shadow-glow w-[calc(100%-2rem)] sm:w-64 sm:max-w-xs sm:px-4
  sm:py-3 sm:rounded-2xl mx-auto sm:mx-0 transition-all duration-300 hover:shadow-inner-glow
  bg-white backdrop-filter-none">
      <div className="flex items-center gap-2 sm:gap-3">
        {weather.icon.startsWith('http') ? (
          <img 
            src={weather.icon} 
            alt={weather.condition} 
            className="w-8 h-8 sm:w-12 sm:h-12 drop-shadow-md"
          />
        ) : (
          <span className="text-2xl sm:text-3xl">{weather.icon}</span>
        )}
        <div className="flex-1">
          <p className="text-xs text-primary-700 sm:text-sm font-medium">{weather.location}</p>
          <p className="text-primary-900 font-semibold text-sm sm:text-base">
            {weather.temp}°C | <span className="text-xs sm:text-sm">{weather.condition}</span>
          </p>
          <p className="text-[10px] text-primary-800 sm:text-xs">
            Updated at {weather.updatedAt}
          </p>
        </div>
      </div>
    </div>
  );
};

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section className="bg-gradient-to-b from-white to-primary-50 py-20 px-6 md:px-20 border-t border-primary-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        
        {/* Left: Contact Info */}
        <div className="md:w-1/2 space-y-8">
          <div>
            <h2 className="text-3xl font-bold font-playfair text-primary-900 mb-2">Contact Details</h2>
            <div className="w-16 h-1 bg-primary-500 rounded-full mb-6"></div>
          </div>

          <div className="flex items-center gap-4 text-primary-800 group hover:text-primary-600 transition-colors">
            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
              <FaPhoneAlt className="text-primary-500" />
            </div>
            <div>
              <p className="font-medium">To reach us by phone</p>
              <a href="tel:+918006888600" className="text-primary-600 hover:underline">+91 8006 888 600</a>
            </div>
          </div>

          <div className="flex items-center gap-4 text-primary-800 group hover:text-primary-600 transition-colors">
            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
              <FaEnvelope className="text-primary-500" />
            </div>
            <div>
              <p className="font-medium">To reach us by email</p>
              <a href="mailto:support@rishikesh.app" className="text-primary-600 hover:underline">support@rishikesh.app</a>
            </div>
          </div>

          <div className="flex items-center gap-4 text-primary-800 group hover:text-primary-600 transition-colors">
            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
              <FaWhatsapp className="text-primary-500" />
            </div>
            <div>
              <p className="font-medium">Chat with us on WhatsApp</p>
              <a href="https://wa.me/918006888600" target="_blank" className="text-primary-600 hover:underline">+91 8006 888 600</a>
            </div>
          </div>

          <div className="flex items-start gap-4 text-primary-800 group hover:text-primary-600 transition-colors">
            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mt-1 group-hover:bg-primary-100 transition-colors">
              <FaMapMarkerAlt className="text-primary-500" />
            </div>
            <div>
              <p className="font-medium">Address</p>
              <p>537, Avas Vikas Colony, Rishikesh, 249201</p>
            </div>
          </div>

          <hr className="border-primary-200" />

          <div>
            <p className="font-medium mb-3 text-primary-800">Connect with us</p>
            <div className="flex gap-5 text-xl">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 hover:bg-primary-100 hover:text-primary-600 transition-all transform hover:scale-110">
                <FaFacebook />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 hover:bg-primary-100 hover:text-primary-600 transition-all transform hover:scale-110">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 hover:bg-primary-100 hover:text-primary-600 transition-all transform hover:scale-110">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="md:w-1/2 space-y-6">
          <div>
            <h2 className="text-3xl font-bold font-playfair text-primary-900 mb-2">
              Get in touch with <span className="text-primary-600">RISHIKESH.app</span>
            </h2>
            <div className="w-16 h-1 bg-primary-500 rounded-full mb-6"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 card p-6 shadow-soft">
            <div>
              <label className="block text-sm font-medium text-primary-700 mb-2">Enter Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="input-field w-full"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary-700 mb-2">Enter Your Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91"
                className="input-field w-full"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary-700 mb-2">Enter Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@gmail.com"
                className="input-field w-full"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary-700 mb-2">Enter your message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="write here..."
                className="input-field w-full"
                rows={4}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg hover:scale-105 focus:ring-primary-500 w-full flex items-center justify-center gap-2 group"
            >
              <FaPaperPlane className="group-hover:animate-pulse" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;