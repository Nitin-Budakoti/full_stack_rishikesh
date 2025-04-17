import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';
import LandingPage from './Landingpage';
import Hotel from './Hotel';
import Adventure from './Adventure';
import Ashram from './Ashram';
import Shop from './Shop';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex flex-1 justify-center gap-x-8">
                {[{ to: '/', label: 'Home' },
                  { to: '/hotels', label: 'Hotels' },
                  { to: '/adventure', label: 'Adventures' },
                  { to: '/ashrams', label: 'Ashrams' },
                  { to: '/shop', label: 'Shop' }].map((item, index) => (
                    <NavLink
                      key={index}
                      to={item.to}
                      className={({ isActive }) =>
                        isActive
                          ? "text-sm font-semibold text-white px-4 py-2 rounded-xl border border-gray-700 bg-gradient-to-r from-gray-800 to-gray-700 shadow-inner hover:shadow-md hover:from-gray-700 hover:to-gray-600 hover:-translate-y-1 transform transition-all duration-300 ease-in-out active-link"
                          : "text-sm font-semibold text-white px-4 py-2 rounded-xl border border-gray-700 bg-gradient-to-r from-gray-800 to-gray-700 shadow-inner hover:shadow-md hover:from-gray-700 hover:to-gray-600 hover:-translate-y-1 transform transition-all duration-300 ease-in-out"
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
              </div>

              {/* Login Button */}
              <div className="ml-4 hidden md:block">
                <NavLink
                  to="/login"
                  className="text-sm font-semibold px-5 py-2 rounded-xl bg-gradient-to-tr from-yellow-400 to-yellow-300 text-gray-900 shadow-md border border-yellow-500 hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300"
                >
                  Login
                </NavLink>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu (Dropdown) */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col items-center bg-gray-800 text-white py-4">
            {[{ to: '/', label: 'Home' },
              { to: '/hotels', label: 'Hotels' },
              { to: '/adventure', label: 'Adventures' },
              { to: '/ashrams', label: 'Ashrams' },
              { to: '/shop', label: 'Shop' }].map((item, index) => (
                <NavLink
                  key={index}
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-sm font-semibold text-yellow-400 px-4 py-2 rounded-md w-full text-center"
                      : "text-sm font-semibold text-white px-4 py-2 rounded-md w-full text-center"
                  }
                  onClick={() => setIsMenuOpen(false)} // Close the menu when an item is clicked
                >
                  {item.label}
                </NavLink>
              ))}
            <NavLink
              to="/login"
              className="text-sm font-semibold px-5 py-2 rounded-xl bg-gradient-to-tr from-yellow-400 to-yellow-300 text-gray-900 shadow-md border border-yellow-500 hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 w-full text-center mt-4"
              onClick={() => setIsMenuOpen(false)} // Close the menu on login click
            >
              Login
            </NavLink>
          </div>
        </div>

        {/* Page Content */}
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
