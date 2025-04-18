import React, { useEffect, useState, useRef,ChangeEvent,KeyboardEvent  } from "react";
import ImageSlider from "./imageSlider";
import YogaSlider from "./YogaSlider";
import ShoppingRishikesh from "./ShoppingRishikesh";
import boothnathTemple from "../assets/boothnathTemple.jpg";
import img_1 from "../assets/img_1.jpg";
import img_2 from "../assets/img_2.jpg";
import img_4 from "../assets/img_4.jpg";
import img_5 from "../assets/img_5.jpg";
import img_8 from "../assets/img_8.jpg";
// import { FiSend } from 'react-icons/fi';
// import { BsRobot, BsPerson } from 'react-icons/bs';


const LandingPage: React.FC = () => {
  return (
    <div className=" pb-32 relative overflow-hidden bg-slate-900">
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
      <TouristChatbot />
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
    <section id="map" className="relative overflow-hidden py-16 bg-slate-800/90 backdrop-blur-sm">
      {/* Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-300 mb-3">
            Explore Rishikesh in 3D
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mb-4 rounded"></div>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Discover sacred sites and adventure hotspots along the Ganges River with a 3D immersive experience.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
          <select
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
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
            className="px-4 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-400 flex-grow max-w-xs"
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />

          <select
            value={mapStyle}
            onChange={(e) => setMapStyle(e.target.value)}
            className="px-4 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            {STYLES.map((style: string) => (
              <option key={style} value={style}>
                {style.charAt(0).toUpperCase() + style.slice(1)}
              </option>
            ))}
          </select>

          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-amber-400 text-slate-900 font-semibold rounded-lg hover:bg-amber-300 transition"
          >
            Search
          </button>

          <button
            onClick={handleGeolocation}
            className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-500 transition"
          >
            Use My Location
          </button>
        </div>

        {/* Map Card */}
        <div
          className={`relative transition-all duration-500 ease-in-out border-2 border-amber-400/20 rounded-3xl overflow-hidden shadow-2xl ${
            isExpanded ? "h-[550px] sm:h-[600px]" : "h-[350px] sm:h-[450px]"
          }`}
        >
          <iframe
            title="Interactive 3D Map"
            src={mapUrl}
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            allowFullScreen
          ></iframe>

          {/* Expand Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute bottom-4 right-4 p-2 sm:p-3 bg-slate-800/80 hover:bg-slate-700/90 text-amber-300 border border-slate-600 rounded-full backdrop-blur-md shadow-md transition duration-300"
            aria-label={isExpanded ? "Collapse Map" : "Expand Map"}
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
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

  useEffect(() => {
    const handleScroll = () => {
      if (!boatRef.current) return;
      const offset = window.scrollY * 0.2;
      boatRef.current.style.transform = `translateX(calc(-50% + ${offset}px)) rotateY(8deg)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={boatRef}
      className="fixed bottom-16 left-1/2 z-50 w-20 h-12 sm:w-28 sm:h-16 md:w-32 md:h-20 transition-transform duration-200 ease-out"
      style={{ transform: "translateX(-50%) rotateY(8deg)" }}
    >
      {/* Boat Body */}
      <div className="relative w-full h-full">
        <svg
          viewBox="0 0 84 44"
          className="w-full h-full drop-shadow-xl"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Wooden base */}
          <path
            d="M2 40 L82 40 L74 44 L10 44 Z"
            fill="#8B4513"
            stroke="#5C3317"
            strokeWidth="1"
          />
          {/* Sail */}
          <path
            d="M20 40 L42 10 L64 40 Z"
            fill="#F5F5F5"
            stroke="#DDD"
            strokeWidth="0.8"
          />
          {/* Sun ornament or detail */}
          <circle cx="56" cy="34" r="2.5" fill="#FFD700" />
        </svg>

        {/* Water ripple effect below */}
        <div className="absolute -bottom-1 left-0 right-0 h-2 bg-blue-400/30 blur-sm animate-[ripple_3s_linear_infinite] rounded-full"></div>
      </div>
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
    <section className="py-12 md:py-16 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden" id="testimonials">
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-amber-400/5 blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-300 mb-2">Visitor Experiences</h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto"></div>
          <p className="text-slate-300 mt-4 text-sm md:text-base max-w-2xl mx-auto">
            Hear from travelers who've experienced the magic of Rishikesh
          </p>
        </div>

        <div className="max-w-2xl md:max-w-4xl mx-auto relative px-2 sm:px-4">
          <div className="bg-slate-800/70 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-slate-700/50 shadow-xl">
            <div className="flex mb-4 justify-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 sm:w-5 sm:h-5 ${i < testimonials[current].rating ? 'text-amber-400' : 'text-slate-600'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <blockquote className="italic text-base sm:text-lg text-slate-200 mb-6 leading-relaxed text-center">
              "{testimonials[current].quote}"
            </blockquote>
            <p className="font-semibold text-amber-400 text-center">
              — {testimonials[current].author}
            </p>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full transition-all ${
                    i === current ? "bg-amber-400 scale-125" : "bg-slate-600"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Prev Button */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 md:p-2.5 rounded-full bg-slate-700/80 hover:bg-slate-600 text-amber-300 shadow-lg border border-slate-600"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={next}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 md:p-2.5 rounded-full bg-slate-700/80 hover:bg-slate-600 text-amber-300 shadow-lg border border-slate-600"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
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
    const interval = setInterval(fetchWeather, 300000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-16 sm:bottom-4 left-4 right-4 sm:right-auto z-50 
           bg-slate-800/80 backdrop-blur-md rounded-xl px-3 py-2 border border-slate-700 
           shadow-xl w-[calc(100%-2rem)] sm:w-64 sm:max-w-xs sm:px-4 sm:py-3 sm:rounded-2xl
           mx-auto sm:mx-0">
      <div className="flex items-center gap-2 sm:gap-3">
        {weather.icon.startsWith('http') ? (
          <img 
            src={weather.icon} 
            alt={weather.condition} 
            className="w-8 h-8 sm:w-12 sm:h-12"
          />
        ) : (
          <span className="text-2xl sm:text-3xl">{weather.icon}</span>
        )}
        <div className="flex-1">
          <p className="text-xs text-amber-300 sm:text-sm">{weather.location}</p>
          <p className="text-white font-semibold text-sm sm:text-base">
            {weather.temp}°C | <span className="text-xs sm:text-sm">{weather.condition}</span>
          </p>
          <p className="text-[10px] text-slate-400 sm:text-xs">
            Updated at {weather.updatedAt}
          </p>
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



interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const TouristChatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newUserMessage: Message = { role: 'user', content: input };
    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('http://localhost:4000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: 'You are a helpful tourist guide.' },
            ...updatedMessages,
          ],
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to fetch AI response');
      }

      const data = await res.json();
      console.log('Response from backend:', data);

      const replyContent =
        data?.choices?.[0]?.message?.content?.trim() ||
        'Sorry, I didn’t get that.';

      const botReply: Message = {
        role: 'assistant',
        content: replyContent,
      };

      setMessages([...updatedMessages, botReply]);
    } catch (error) {
      console.error('Error:', error);

      const errorMessage: Message = {
        role: 'assistant',
        content: 'Network error or server is unavailable.',
      };

      setMessages([...updatedMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-between h-screen w-full p-4 bg-gradient-to-b from-blue-100 to-white">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">GuideBot 🧭</h1>

      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-4 flex flex-col space-y-3 overflow-y-auto max-h-[70vh]">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-lg max-w-[80%] text-sm whitespace-pre-wrap ${
              msg.role === 'user'
                ? 'bg-blue-100 self-end text-right'
                : 'bg-gray-100 self-start text-left'
            }`}
          >
            {msg.content}
          </div>
        ))}
        {loading && (
          <div className="text-gray-400 text-sm">GuideBot is typing...</div>
        )}
      </div>

      <div className="w-full max-w-md flex items-center gap-2 mt-4">
        <input
          type="text"
          placeholder="Ask about a place..."
          className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
};




export default LandingPage;