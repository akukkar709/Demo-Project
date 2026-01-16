// src/components/layout/Navbar.jsx
import { useState } from 'react';
import { FiMenu, FiX, FiPhone, FiCalendar } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-black shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="text-2xl font-serif font-bold text-white">
            Radiance<span className="text-primary"> Beauty</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium hover:text-primary transition-colors ${
                  activeLink === link.name.toLowerCase() ? 'text-primary' : 'text-white'
                }`}
                onClick={() => setActiveLink(link.name.toLowerCase())}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-white hover:text-primary transition-colors">
              <FiCalendar className="w-5 h-5" />
              <span>Book Now</span>
            </button>
            <a 
              href="tel:+1234567890" 
              className="bg-primary text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-primary-dark transition-colors"
            >
              <FiPhone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary focus:outline-none"
            >
              {isOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-gray-900 py-2 px-4 shadow-lg rounded-lg mt-2 mb-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block py-2 px-4 rounded-md ${
                    activeLink === link.name.toLowerCase()
                      ? 'bg-primary text-white'
                      : 'text-white hover:bg-gray-800'
                  }`}
                  onClick={() => {
                    setActiveLink(link.name.toLowerCase());
                    setIsOpen(false);
                  }}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-gray-700">
                <button className="w-full flex items-center justify-center space-x-2 bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors">
                  <FiCalendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;