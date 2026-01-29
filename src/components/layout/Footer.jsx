import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8"
    
     style={{ 
        width: '100vw',
        position: 'relative',
        left: '65%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw'
      }}
    
    
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-serif font-bold mb-2">AURORA</h2>
          <p className="text-sm tracking-widest mb-6">BEAUTY</p>
          <p className="max-w-2xl mx-auto text-gray-300 mb-8">
            The Exclusive Unisex Salon in your town acquainted with world-class tools and professionals for stunning looks and absolute luxury.
          </p>
          
          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            {/* Add your social icons here */}
          </div>
          
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 mb-8">
            {['Home', 'About Us', 'Services', 'Collection', 'Franchise', 'Academy', 'e-Shop', 'Contact', 'Book Appointment', 'Salon Finder', 'Offers'].map((item) => (
              <a 
                key={item} 
                href={item === 'Home' ? '/' : `#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-gray-300 hover:text-white text-sm uppercase tracking-wider"
              >
                {item}
              </a>
            ))}
          </nav>
          
          {/* Copyright */}
          <div className="pt-6 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &​copy; {new Date().getFullYear()} Aurora Beauty. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
                <a href="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
 
export default Footer;



