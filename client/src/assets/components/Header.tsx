import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './Landingpage';
import Hotel from './Hotel';
import Adventure from './Adventure';
import Ashram from './Ashram';
import Shop from './Shop';


const Header = () => {
  return (
    <div className="bg-white  text-white min-h-screen flex flex-col justify-between">
      <BrowserRouter>
        {/* NavBar */}
        <nav className="bg-gradient-to-r from-gray-400 rounded-lg to-gray-800 p-4 shadow-lg">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <h1 className="text-xl font-bold tracking-wide">Rishikesh Tours</h1>
            <div className="flex space-x-8 text-sm font-medium">
              <Link
                to="/"
                className="hover:text-yellow-400 transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/hotels"
                className="hover:text-yellow-400 transition duration-300"
              >
                Hotels
              </Link>
              <Link
                to="/adventure"
                className="hover:text-yellow-400 transition duration-300"
              >
                Adventures
              </Link>
              <Link
                to="/ashrams"
                className="hover:text-yellow-400 transition duration-300"
              >
                Ashrams
              </Link>
              <Link
                to="/shop"
                className="hover:text-yellow-400 transition duration-300"
              >
                Shop
              </Link>
              <Link
                to="/shop"
                className="hover:text-yellow-400 transition duration-300"
              >
                Login
              </Link>
              
            </div>
          </div>
        </nav>

        {/* Pages */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/hotels" element={<Hotel />} />
            <Route path="/adventure" element={<Adventure />} />
            <Route path="/ashrams" element={<Ashram />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 text-center py-4 mt-10">
          &copy; 2025 Rishikesh Tourism. All rights reserved.
        </footer>
        
      </BrowserRouter>
    
    </div>
  );
};

export default Header;
