import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full"

    style={{ 
        width: 'Fixed',
        position: 'Fixed',
        left: '65%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw'
      }}
    
    
    >
      {/* Main Footer Section */}
      <div className="bg-amber-200 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Brand Logo and Tagline */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-serif font-bold tracking-wider text-gray-900">AURORA</h2>
            <p className="text-sm tracking-widest text-gray-700 mb-6">BEAUTY</p>
            <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed">
              The Exclusive Unisex Salon in your town acquainted with world-class tools and professionals for stunning looks and absolute luxury.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-amber-200 transition-all duration-300">
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-amber-200 transition-all duration-300">
              <FaTwitter className="w-4 h-4" />
            </a>
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-amber-200 transition-all duration-300">
              <FaInstagram className="w-4 h-4" />
            </a>
          </div>

          {/* Navigation Menu */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
            {['Home', 'About Us', 'Services', 'Collection', 'Franchise', 'Academy', 'e-Shop', 'Contact', 'Book Appointment', 'Salon Finder', 'Offers'].map((item) => (
              <Link 
                key={item} 
                to={item.toLowerCase().replace(/\s+/g, '-')} 
                className="text-gray-700 hover:text-gray-900 text-sm font-medium uppercase tracking-wider transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-gray-600 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Aurora Beauty. All rights reserved.
          </div>

          {/* Sitemap and Policy Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link to="/sitemap" className="text-gray-600 hover:text-gray-900 text-sm">
              Sitemap
            </Link>
            <Link to="/privacy-policy" className="text-gray-600 hover:text-gray-900 text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-600 hover:text-gray-900 text-sm">
              Terms & Conditions
            </Link>
          </div>

          {/* Credits */}
          <div className="text-gray-500 text-xs">
            Crafted with <span className="text-red-500">❤</span> by Aurora Team
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;