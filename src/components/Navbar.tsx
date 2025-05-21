import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X} from 'lucide-react';
import logo from '../img/logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  const navLinkClass = "px-3 py-2 text-sm font-medium rounded-md transition duration-300";
  const activeClass = "text-white bg-slate-700";
  const inactiveClass = "text-slate-300 hover:text-white hover:bg-slate-800";

  const isActive = (path: string) => {
    return location.pathname === path ? activeClass : inactiveClass;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-800 shadow-md' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span className="text-xl font-bold text-white">
                <img src={logo} alt="Ili Tiler" className="h-8 w-16" />
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              <Link to="/" className={`${navLinkClass} ${isActive('/')}`}>
                Home
              </Link>
              <Link to="/services" className={`${navLinkClass} ${isActive('/services')}`}>
                Our Projects
              </Link>
              <Link to="/about" className={`${navLinkClass} ${isActive('/about')}`}>
                About Us
              </Link>
              <Link to="/contact" className={`${navLinkClass} ${isActive('/contact')}`}>
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-200 hover:text-white hover:bg-slate-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 sm:px-3">
          <Link
            to="/"
            className={`block ${navLinkClass} ${isActive('/')}`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`block ${navLinkClass} ${isActive('/services')}`}
          >
            Our Projects
          </Link>
          <Link
            to="/about"
            className={`block ${navLinkClass} ${isActive('/about')}`}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`block ${navLinkClass} ${isActive('/contact')}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;