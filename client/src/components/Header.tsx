import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useState, useRef } from 'react';
import LandingPage from './Landingpage';
import Hotel from './Hotel';
import Adventure from './Adventure';
import Ashram from './Ashram';
import Shop from './Shop';
import ScrollToTop from './ScrollToTop'; // <-- Important
import mantra from '../assets/mantra.mp3';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-50 text-gray-800 font-sans">
      <BrowserRouter>
        <ScrollToTop /> {/* Smooth scroll to top on route change */}

        {/* Navbar */}
        <nav className="bg-white/80 shadow-md sticky top-0 z-50 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20 w-full">
              
              {/* Logo */}
              <div className="text-2xl font-extrabold text-indigo-600 tracking-widest">
                Rishikesh Tours
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex flex-1 justify-center gap-x-8">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/hotels', label: 'Hotels' },
                  { to: '/adventure', label: 'Adventures' },
                  { to: '/ashrams', label: 'Ashrams' },
                  { to: '/shop', label: 'Shop' }
                ].map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.to}
                    className={({ isActive }) =>
                      `relative text-sm font-semibold px-4 py-2 rounded-lg transition duration-300 ${
                        isActive
                          ? "text-indigo-700 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-indigo-500"
                          : "text-gray-600 hover:text-indigo-600 hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-indigo-400"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              {/* Mantra Button (Desktop) */}
              <div className="hidden md:block mr-4">
                <button
                  onClick={toggleMantra}
                  className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full shadow-md transition-all duration-300 ${
                    isPlaying
                      ? "bg-indigo-500 text-white hover:bg-indigo-600"
                      : "bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
                  }`}
                >
                  {isPlaying ? "Pause Mantra 🔊" : "Play Mantra 🔈"}
                </button>
              </div>

              {/* Login Button */}
              <div className="ml-2 hidden md:block">
                <NavLink
                  to="/login"
                  className="text-sm font-semibold px-5 py-2 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Login
                </NavLink>
              </div>

              {/* Hamburger Icon for Mobile */}
              <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white/90 text-gray-800 backdrop-blur-md shadow-md`}>
          <div className="flex flex-col items-center py-6 space-y-3">
            {[
              { to: '/', label: 'Home' },
              { to: '/hotels', label: 'Hotels' },
              { to: '/adventure', label: 'Adventures' },
              { to: '/ashrams', label: 'Ashrams' },
              { to: '/shop', label: 'Shop' }
            ].map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block w-full text-center text-sm font-medium py-2 rounded-md transition ${
                    isActive
                      ? "text-indigo-700 bg-indigo-100"
                      : "text-gray-700 hover:bg-indigo-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Mantra Button (Mobile) */}
            <button
              onClick={toggleMantra}
              className={`w-11/12 text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                isPlaying
                  ? "bg-indigo-500 text-white hover:bg-indigo-600"
                  : "bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
              }`}
            >
              {isPlaying ? "Pause Mantra 🔊" : "Play Mantra 🔈"}
            </button>

            {/* Login Button (Mobile) */}
            <NavLink
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="w-11/12 text-sm font-semibold px-5 py-2 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 mt-2"
            >
              Login
            </NavLink>
          </div>
        </div>

        {/* Audio Element */}
        <audio ref={audioRef} loop>
          <source src={mantra} type="audio/mp3" />
        </audio>

        {/* Main Content */}
        <main className="flex-1 px-4 sm:px-8 py-6">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/hotels" element={<Hotel />} />
            <Route path="/adventure" element={<Adventure />} />
            <Route path="/ashrams" element={<Ashram />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 text-gray-600 text-center py-6 text-sm border-t border-gray-300">
          &copy; 2025 Rishikesh Tourism. All rights reserved.
        </footer>
      </BrowserRouter>
    </div>
  );
};

export default Header;
