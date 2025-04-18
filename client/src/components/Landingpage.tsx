import React, { useEffect, useState, useRef } from "react";
import ImageSlider from "./imageSlider";
import YogaSlider from "./YogaSlider";
import ShoppingRishikesh from "./ShoppingRishikesh";
import boothnathTemple from "../assets/boothnathTemple.jpg";
import img_1 from "../assets/img_1.jpg";
import img_2 from "../assets/img_2.jpg";
import img_4 from "../assets/img_4.jpg";
import img_5 from "../assets/img_5.jpg";
import img_8 from "../assets/img_8.jpg";
import mantra from "../assets/mantra.mp3";

const LandingPage: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-slate-900">
      {/* Background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/30 to-slate-900/80"></div>
      </div>
      
      {/* Animated Ganga river effect */}
      <div className="fixed top-0 left-0 right-0 h-64 -z-10 opacity-15">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/water.png')] animate-[waterFlow_20s_linear_infinite]"></div>
      </div>

      {/* Himalayan peaks silhouette */}
      <div className="fixed bottom-0 left-0 right-0 h-64 -z-10 bg-[url('https://i.imgur.com/JYw5FyK.png')] bg-bottom bg-contain bg-repeat-x opacity-15"></div>

      {/* Floating diya lights */}
      <div className="fixed top-1/4 left-10 w-8 h-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-400/80 to-transparent rounded-full blur-[1px] animate-float"></div>
      <div className="fixed top-1/3 right-20 w-6 h-6 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-300/70 to-transparent rounded-full blur-[1px] animate-float animation-delay-2000"></div>

      <HeroSection />
      <ImageSlider />
      <YogaSlider />
      <ShoppingRishikesh />
      <Interactive3DMap />
      <TestimonialCarousel />
      <BoatAnimation />
      <BackgroundMantra />
      <WeatherWidget />
      <PilgrimCounter />
    </div>
  );
};

const HeroSection: React.FC = () => {
  const images = [boothnathTemple, img_1, img_2, img_4, img_5, img_8];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentImageIndex((prev) => (prev + 1) % images.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative h-screen flex flex-col justify-center items-center text-white bg-cover transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(2, 15, 25, 0.7), rgba(4, 35, 55, 0.9)), url(${images[currentImageIndex]})`,
        backgroundPosition: "center center",
      }}
    >
      {/* Decorative border elements */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="mb-8">
          <h2 className="text-lg font-light tracking-widest text-amber-300 mb-2">THE GATEWAY TO THE GARHWAL HIMALAYAS</h2>
          <h1 className="text-6xl font-bold mb-4 font-serif bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">
            Rishikesh
          </h1>
          <div className="w-24 h-1 bg-amber-400 mx-auto my-6"></div>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
            Where spirituality meets adventure in the lap of the Himalayas
          </p>
        </div>
        
        <div className="flex gap-4 justify-center">
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Explore
          </button>
          <button className="bg-transparent border-2 border-amber-400 hover:bg-amber-400/10 text-amber-300 font-medium py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
            View Packages
          </button>
        </div>
      </div>
      
      {/* Scrolling indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

const Interactive3DMap: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-16 bg-slate-800/90 backdrop-blur-sm relative overflow-hidden" id="map">
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-amber-400/10 blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-300 mb-2">Explore Rishikesh in 3D</h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto"></div>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Discover sacred sites and adventure spots along the Ganges
          </p>
        </div>

        <div className={`relative rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400/20 transition-all duration-500 ${isExpanded ? 'h-[600px]' : 'h-[450px]'}`}>
          <div className="absolute inset-0 bg-slate-700 flex items-center justify-center">
            <iframe
              title="Bhoothnath Temple 3D Map"
              src="https://www.google.com/maps/embed?pb=!4v1683301701815!6m8!1m7!1sCAoSLEFGMVFpcFBqZ1E1M0I0bHdaVjV1VmFDdFlBcV9hVkdONk5MNzNHMjlH!2m2!1d30.0901!2d78.2677!3f170.06!4f-4.72!5f0.7820865974627469"

              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute bottom-4 right-4 bg-slate-800/80 hover:bg-slate-700/90 text-amber-300 p-2 rounded-full border border-slate-600 shadow-lg backdrop-blur-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isExpanded ? "M6 18L18 6M6 6l12 12" : "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"} />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};


const BoatAnimation: React.FC = () => {
  const boatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!boatRef.current) return;
      const offset = window.scrollY * 0.2;
      boatRef.current.style.transform = `translateX(calc(-50% + ${offset}px))`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={boatRef}
      className="fixed bottom-16 left-1/2 w-28 h-14 z-40"
      style={{ transform: "translateX(-50%)", transition: "transform 0.2s ease-out" }}
    >
      <svg viewBox="0 0 84 44" className="w-full h-full drop-shadow-lg">
        <path d="M2 40 L82 40 L74 44 L10 44 Z" fill="#8B4513" />
        <path d="M20 40 L42 20 L64 40 Z" fill="#FFF" />
        <circle cx="56" cy="36" r="2" fill="#FFD700" />
      </svg>
      <div className="absolute -bottom-1 left-0 right-0 h-2 bg-blue-400/20 blur-md animate-[ripple_3s_linear_infinite]"></div>
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
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden" id="testimonials">
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-amber-400/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-300 mb-2">Visitor Experiences</h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto"></div>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Hear from travelers who've experienced the magic of Rishikesh
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-slate-800/70 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 shadow-xl">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < testimonials[current].rating ? 'text-amber-400' : 'text-slate-600'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="italic text-lg text-slate-200 mb-6 leading-relaxed">
              "{testimonials[current].quote}"
            </blockquote>
            <p className="font-semibold text-amber-400">
              — {testimonials[current].author}
            </p>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === current ? "bg-amber-400 scale-125" : "bg-slate-600"
                  }`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 p-2 rounded-full bg-slate-700/80 hover:bg-slate-600 text-amber-300 shadow-lg border border-slate-600"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 p-2 rounded-full bg-slate-700/80 hover:bg-slate-600 text-amber-300 shadow-lg border border-slate-600"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

const BackgroundMantra: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMantra = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed top-5 right-5 z-50">
      <button
        onClick={toggleMantra}
        className={`flex items-center justify-center gap-2 ${
          isPlaying 
            ? "bg-amber-600/90 text-white shadow-lg shadow-amber-400/30"
            : "bg-slate-800/80 text-amber-300 border border-slate-700 hover:border-amber-400"
        } font-medium py-1.5 px-2.45 rounded-full hover:shadow-md transition-all duration-300 backdrop-blur-sm`}
      >
        {isPlaying ? (
          <>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            Pause Mantra
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Play Mantra
          </>
        )}
      </button>
      <audio ref={audioRef} loop>
        <source src={mantra} type="audio/mp3" />
      </audio>
    </div>
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

  // Dummy auto-refresh every 30 seconds (simulate update)
  useEffect(() => {
    const interval = setInterval(() => {
      setWeather((prev) => ({
        ...prev,
        updatedAt: new Date().toLocaleTimeString(),
      }));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-slate-800/80 backdrop-blur-sm rounded-2xl p-4 border border-slate-700 shadow-xl w-64">
      <div className="flex items-center gap-4">
        <span className="text-3xl">{weather.icon}</span>
        <div>
          <p className="text-sm text-amber-300">{weather.location}</p>
          <p className="text-white font-semibold text-lg">
            {weather.temp}°C | {weather.condition}
          </p>
          <p className="text-xs text-slate-400">Updated at {weather.updatedAt}</p>
        </div>
      </div>
    </div>
  );
};


const PilgrimCounter: React.FC = () => {
  const [count, setCount] = useState(1248);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-slate-800/80 backdrop-blur-sm rounded-lg p-3 border border-amber-400/30 shadow-lg">
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
        <div>
          <p className="text-xs text-amber-300">Visitors Today</p>
          <p className="text-white font-medium">{count.toLocaleString()}+</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;