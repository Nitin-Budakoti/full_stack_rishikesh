import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useState, useRef } from 'react';
import LandingPage from './Landingpage';
import Hotel from './Hotel';
import Adventure from './Adventure';
import Ashram from './Ashram';
import Shop from './Shop';
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-100 text-gray-800 font-sans">
      <BrowserRouter>
        {/* Navbar */}
        <nav className="bg-gray-900 bg-opacity-95 shadow-xl backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20 w-full">
              {/* Logo */}
              <div className="text-2xl font-extrabold text-yellow-400 tracking-wide whitespace-nowrap">
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
                      isActive
                        ? "text-sm font-semibold text-white px-4 py-2 rounded-xl border border-gray-700 bg-gradient-to-r from-gray-800 to-gray-700 shadow-inner hover:shadow-md hover:from-gray-700 hover:to-gray-600 hover:-translate-y-1 transform transition-all duration-300"
                        : "text-sm font-semibold text-white px-4 py-2 rounded-xl border border-gray-700 bg-gradient-to-r from-gray-800 to-gray-700 shadow-inner hover:shadow-md hover:from-gray-700 hover:to-gray-600 hover:-translate-y-1 transform transition-all duration-300"
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
                  className={`flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-300 ${
                    isPlaying
                      ? "bg-yellow-500 text-white shadow-lg"
                      : "bg-gray-800 text-yellow-300 border border-yellow-400 hover:bg-yellow-100 hover:text-yellow-700"
                  }`}
                >
                  {isPlaying ? "Pause Mantra 🔊" : "Play Mantra 🔈"}
                </button>
              </div>

              {/* Login Button */}
              <div className="ml-2 hidden md:block">
                <NavLink
                  to="/login"
                  className="text-sm font-semibold px-4 py-1.5 rounded-xl bg-gradient-to-tr from-yellow-400 to-yellow-300 text-gray-900 shadow-md border border-yellow-500 hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300"
                >
                  Login
                </NavLink>
              </div>

              {/* Hamburger Icon for Mobile */}
              <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
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
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-800 text-white`}>
          <div className="flex flex-col items-center py-4 space-y-2">
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
                  isActive
                    ? "text-yellow-400 font-semibold text-sm px-4 py-2 rounded-md w-full text-center"
                    : "text-white text-sm px-4 py-2 rounded-md w-full text-center"
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
                  ? "bg-yellow-500 text-white shadow-lg"
                  : "bg-gray-900 text-yellow-300 border border-yellow-400 hover:bg-yellow-100 hover:text-yellow-700"
              }`}
            >
              {isPlaying ? "Pause Mantra 🔊" : "Play Mantra 🔈"}
            </button>

            <NavLink
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="w-11/12 text-sm font-semibold px-4 py-2 mt-2 rounded-xl bg-gradient-to-tr from-yellow-400 to-yellow-300 text-gray-900 shadow-md border border-yellow-500 hover:shadow-xl transition-all duration-300"
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
        <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm border-t border-gray-800">
          &copy; 2025 Rishikesh Tourism. All rights reserved.
        </footer>
      </BrowserRouter>
    </div>
  );
};

export default Header;
