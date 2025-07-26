import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import LandingPage from './Landingpage';
import Hotel from './Hotel';
import Adventure from './Adventure';
import Ashram from './Ashram';
import Shop from './Shop';
import ScrollToTop from './ScrollToTop';
import mantra from '../assets/mantra.mp3';
import Deal from './Deal';
import Success from '../Pages/Success';
import Cancel from '../Pages/Cancel';
import Login from '../components/Login';
import { FaHome, FaHotel, FaHiking, FaPrayingHands, FaShoppingBag, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);  

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md' : 'bg-white/70'} backdrop-blur-md`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20 w-full">
              
              {/* Logo */}
              <div className="flex items-center">
                <div className={`text-2xl font-extrabold tracking-widest font-dancing ${scrolled ? 'text-primary-600' : 'text-primary-700'} transition-colors duration-300`}>
                  <span className="relative inline-block">
                    Rishikesh
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  </span>
                  <span className="text-secondary-500"> Tours</span>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex flex-1 justify-center gap-x-4">
                {[
                  { to: '/', label: 'Home', icon: <FaHome className="mr-1" /> },
                  { to: '/hotels', label: 'Hotels', icon: <FaHotel className="mr-1" /> },
                  { to: '/adventure', label: 'Adventures', icon: <FaHiking className="mr-1" /> },
                  { to: '/ashrams', label: 'Ashrams', icon: <FaPrayingHands className="mr-1" /> },
                  { to: '/shop', label: 'Shop', icon: <FaShoppingBag className="mr-1" /> }
                ].map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.to}
                    className={({ isActive }) =>
                      `group relative flex items-center text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 ${scrolled ? 
                        (isActive ? "text-primary-600 bg-primary-50" : "text-slate-700 hover:text-primary-600 hover:bg-primary-50/50") :
                        (isActive ? "text-primary-700 bg-white/20" : "text-slate-700 hover:text-primary-600 hover:bg-white/30")}`
                    }
                  >
                    {item.icon}
                    {item.label}
                    {/* Animated underline effect */}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  </NavLink>
                ))}
              </div>

              {/* Right side actions */}
              <div className="hidden md:flex items-center space-x-3">
                {/* Mantra Button (Desktop) */}
                <button
                  onClick={toggleMantra}
                  className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full shadow-md transition-all duration-300 ${
                    isPlaying
                      ? "bg-secondary-500 text-white hover:bg-secondary-600"
                      : scrolled ? "bg-secondary-100 text-secondary-600 hover:bg-secondary-200" : "bg-secondary-100 text-secondary-600 hover:bg-secondary-200"
                  }`}
                >
                  {isPlaying ? "Pause Mantra 🔊" : "Play Mantra 🔈"}
                </button>

                {/* Login Button */}
                <NavLink
                  to="/login"
                  className="flex items-center text-sm font-semibold px-5 py-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <FaUserCircle className="mr-2" />
                  Login
                </NavLink>
              </div>

              {/* Hamburger Icon for Mobile */}
              <div className="md:hidden flex items-center">
                <button 
                  onClick={toggleMenu} 
                  className={`p-2 rounded-lg focus:outline-none focus:ring-2 ${scrolled ? 'text-slate-800 focus:ring-primary-500' : 'text-slate-800 focus:ring-primary-500'}`}
                >
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
        <div 
          className={`md:hidden fixed top-20 left-0 right-0 z-40 transition-all duration-300 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}
        >
          <div className="glass mx-4 rounded-xl overflow-hidden shadow-lg border border-white/20">
            <div className="flex flex-col py-4 divide-y divide-white/10">
              {
                [
                  { to: '/', label: 'Home', icon: <FaHome className="text-lg" /> },
                  { to: '/hotels', label: 'Hotels', icon: <FaHotel className="text-lg" /> },
                  { to: '/adventure', label: 'Adventures', icon: <FaHiking className="text-lg" /> },
                  { to: '/ashrams', label: 'Ashrams', icon: <FaPrayingHands className="text-lg" /> },
                  { to: '/shop', label: 'Shop', icon: <FaShoppingBag className="text-lg" /> }
                ].map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between w-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "text-white bg-primary-600/30"
                          : "text-white/90 hover:bg-white/10"
                      }`
                    }
                  >
                    <span className="flex items-center">
                      <span className="mr-3">{item.icon}</span>
                      {item.label}
                    </span>
                    {/* Arrow indicator for active link */}
                    <span className="text-white/70">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </NavLink>
                ))
              }
            </div>
            
            <div className="px-4 py-4 bg-white/5 space-y-3">
              {/* Mantra Button (Mobile) */}
              <button
                onClick={toggleMantra}
                className={`flex items-center justify-center w-full text-sm font-medium px-4 py-3 rounded-lg transition-all duration-300 ${
                  isPlaying
                    ? "bg-secondary-500 text-white"
                    : "bg-white/20 text-white"
                }`}
              >
                {isPlaying ? "Pause Mantra 🔊" : "Play Mantra 🔈"}
              </button>

              {/* Login Button (Mobile) */}
              <NavLink
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center w-full text-sm font-semibold px-5 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-md hover:shadow-lg transition-all duration-300"
              >
                <FaUserCircle className="mr-2" />
                Login
              </NavLink>
            </div>
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
            <Route path="/hotels/deal" element={<Deal />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} /> 
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <div className="responsive-container py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Column 1: About */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-dancing text-secondary-400">Rishikesh Tours</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Your gateway to spiritual awakening and adventure in the yoga capital of the world. Discover the magic of Rishikesh with our curated experiences.
                </p>
                <div className="flex space-x-4 pt-2">
                  <a href="#" className="text-gray-400 hover:text-secondary-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-secondary-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-secondary-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                  </a>
                </div>
              </div>
              
              {/* Column 2: Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/" className="text-gray-300 hover:text-secondary-400 transition-colors">Home</a></li>
                  <li><a href="/hotels" className="text-gray-300 hover:text-secondary-400 transition-colors">Hotels</a></li>
                  <li><a href="/adventure" className="text-gray-300 hover:text-secondary-400 transition-colors">Adventures</a></li>
                  <li><a href="/ashrams" className="text-gray-300 hover:text-secondary-400 transition-colors">Ashrams</a></li>
                  <li><a href="/shop" className="text-gray-300 hover:text-secondary-400 transition-colors">Shop</a></li>
                </ul>
              </div>
              
              {/* Column 3: Contact */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span className="text-gray-300">Laxman Jhula Road, Rishikesh, Uttarakhand, India</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-secondary-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <span className="text-gray-300">+91 98765 43210</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-secondary-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <span className="text-gray-300">info@rishikeshtours.com</span>
                  </li>
                </ul>
              </div>
              
              {/* Column 4: Newsletter */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
                <p className="text-sm text-gray-300 mb-4">Subscribe to receive updates on new tours and special offers.</p>
                <form className="space-y-2">
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-400"
                    />
                    <button 
                      type="submit" 
                      className="absolute right-1 top-1 bg-secondary-500 text-white p-1.5 rounded-md hover:bg-secondary-600 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-slate-700 py-6">
            <div className="responsive-container flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Rishikesh Tourism. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-xs text-gray-400 hover:text-secondary-400 transition-colors">Privacy Policy</a>
                <a href="#" className="text-xs text-gray-400 hover:text-secondary-400 transition-colors">Terms of Service</a>
                <a href="#" className="text-xs text-gray-400 hover:text-secondary-400 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </BrowserRouter>
    </div>
  );
};

export default Header;
