import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50 border-b border-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-800 flex items-center gap-5">
            <img src="/public/bricole logo.png" alt="Logo" className="w-6" />
            <h1 className="text-black lowercase text-2xl font-extrabold">BRICOLE</h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/about" className="text-gray-700 hover:text-black hover:font-medium">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-black hover:font-medium">Services</Link>
            <Link to="/contact" className="text-gray-700 hover:text-black hover:font-medium">Contact</Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-2">
            <Link 
              to="/login" 
              className="px-4 bg-black text-white rounded-xl border border-black hover:bg-white hover:text-black transition h-10 flex items-center"
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="px-4 bg-black text-white rounded-xl border border-black hover:bg-white hover:text-black transition h-10 flex items-center"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden focus:outline-none" onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md transition-transform duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Link to="/about" className="block py-2 px-4 text-gray-700 hover:text-black hover:font-medium text-center" onClick={closeMenu}>
          About
        </Link>
        <Link to="/services" className="block py-2 px-4 text-gray-700 hover:text-black hover:font-medium text-center" onClick={closeMenu}>
          Services
        </Link>
        <Link to="/contact" className="block py-2 px-4 text-gray-700 hover:text-black hover:font-medium text-center" onClick={closeMenu}>
          Contact
        </Link>
        <div className="flex flex-col justify-center items-center gap-5 mt-6">
        <Link to="/login" className="block py-1 bg-black text-white rounded-lg text-center hover:bg-white hover:text-black transition w-50 -mb-3" onClick={closeMenu}>
          Login
        </Link>
        <Link to="/signup" className="block py-1 bg-black text-white rounded-lg text-center hover:bg-white hover:text-black transition w-50 mb-6" onClick={closeMenu}>
          Sign Up
        </Link>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
