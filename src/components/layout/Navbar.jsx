// // src/components/layout/Navbar.jsx
// import { useState } from 'react';
// import { FiMenu, FiX, FiPhone, FiCalendar } from 'react-icons/fi';

// import { Link,useLocation} from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//    const location = useLocation();
//   const [activeLink, setActiveLink] = useState('home');

//   const navLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'Services', href: 'services' },
//     { name: 'Gallery', href: 'gallery' },
//     { name: 'About', href: 'about' },
//     { name: 'Contact', href: 'contact' },
//   ];




//   return (
//     <nav className="bg-black shadow-md fixed top-0 left-0 right-0 z-50">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//         <div className="flex-shrink-0">
//             <Link to="/" className="text-white font-bold text-xl">
//               AURORA BEAUTY
//             </Link>
//           </div>
          
//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className={`${
//                    location.pathname === link.path
                  
//                   ? 'text-primary'
//                   : 'text-white hover:text-primary'
//                 } transition-colors`}
//                 onClick={() => setIsOpen(false)}
//               >
//                 {link.name}
//               </Link>
//             ))}
          

//           {/* CTA Buttons */}
//           <div className="flex items-center space-x-4 ml-8">
//               <Link 
//     to="/appointment" 
//     className="flex items-center space-x-2 text-white hover:text-primary transition-colors">
//               <FiCalendar className="w-5 h-5" />
//               <span>Book Appointment</span>
//               </Link>
//             <a 
//               href="tel:+1234567890" 
//               className="bg-primary text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-primary-dark transition-colors"
//             >
//               <FiPhone className="w-4 h-4" />
//               <span>Call Us</span>
//             </a>
//             </div>
//           </div>
//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-white hover:text-primary focus:outline-none"
//             >
//               {isOpen ? <FiX size={24} /> : <FiMenu size={24} />} 
//             </button>
//           </div>
//         </div>
//        </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden bg-black>
//              <div className="px-2 pt-2 pb-3 space-y-1">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className={`block px-3 py-2 rounded-md text-base font-medium ${
//                       location.pathname === link.path
//                       ? 'text-primary'
//                       : 'text-white hover:text-primary'

//                   }`}
//                   onClick={() => setIsOpen(false)}          
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//                   <div className="pt-4 border-t border-gray-700 mt-2">
//                           <Link
//                           to="/appointment"
//                           className="block w-full text-center bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors mb-2"
//                            onClick={() => setIsOpen(false)}
//                           >
//                           Book Appointment
//                         </Link>
//                  <a
//                 href="tel:+1234567890"
//                 className="block text-center text-primary hover:underline"
//                 onClick={() => setIsOpen(false)}
//               >
//                 <span className="flex items-center justify-center">
//                   <FiPhone className="mr-2" />
//                   Call Us
//                 </span>
//               </a>
              
//               </div>
//             </div>
//           </div>
//         )}
//     </nav>
//   );
// };
// export default Navbar;




// In Navbar.jsx

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiPhone, FiCalendar } from 'react-icons/fi';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();


   useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  // Handle scroll to section
  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = '/';
      // The section will be scrolled to after the page loads
      sessionStorage.setItem('scrollTo', sectionId);
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // Check for scrollTo in sessionStorage after component mounts
  useEffect(() => {
    const scrollTo = sessionStorage.getItem('scrollTo');
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      sessionStorage.removeItem('scrollTo');
    }
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: 'services' },
    { name: 'Gallery', path: 'gallery' },
    { name: 'About', path: 'about' },
    { name: 'Contact', path: 'contact' },
  ];

  return (
    <nav className="bg-black text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-serif font-bold">
              AURORA BEAUTY
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? 'text-amber-200'
                    : 'text-white hover:text-amber-200'
                } transition-colors`}
                
              >
                {link.name}
              </Link>
            ))}

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4 ml-8">
              <Link
                to="/appointment"
                className="flex items-center space-x-2 text-white hover:text-primary transition-colors"
              >
                <FiCalendar className="mr-2" />
                <span>Book Appointment</span>
              </Link>
              <a
                href="tel:+1234567890"
                className="bg-primary text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-primary-dark transition-colors"
              >
                <FiPhone className="w-4 h-4" />
                <span>Call Us</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black absolute top-20 left-0 right-0 shadow-lg py-4 px-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                 onClick={() => {
                  link.onClick?.();
                  setIsOpen(false);
                }}
                className="text-white hover:text-amber-200 py-2 border-b border-gray-800"
                 
              >
                {link.name}
              </Link>
            ))}
              <Link
                to="/appointment"
                className="block w-full text-center bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors mb-2"
                onClick={() => setIsOpen(false)}
              >
             <FiCalendar className="mr-2" /> Book Appointment
            </Link>
          </div>
        </div>   
      )}
    </nav>
  );
};

export default Navbar;