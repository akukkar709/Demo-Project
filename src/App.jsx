// import { useState } from 'react';
// import Navbar from './components/Navbar';
// import { FiScissors, FiHeart, FiAward, FiClock, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
// import './App.css';

// function App() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Sample services data
//   const services = [
//     {
//       icon: <FiScissors className="w-8 h-8 text-primary" />,
//       title: 'Hair Styling',
//       description: 'Professional hair cutting and styling for all hair types.'
//     },
//     {
//       icon: <FiHeart className="w-8 h-8 text-primary" />,
//       title: 'Makeup',
//       description: 'Enhance your natural beauty with our professional makeup services.'
//     },
//     {
//       icon: <FiAward className="w-8 h-8 text-primary" />,
//       title: 'Spa Treatments',
//       description: 'Relax and rejuvenate with our luxurious spa treatments.'
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navigation */}
//       <Navbar />

//       {/* Hero Section */}
//       <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-primary/5 to-secondary/5">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center">
//             <div className="md:w-1/2 mb-10 md:mb-0">
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-dark mb-6">
//                 Beauty & Wellness <span className="text-primary">Parlor</span>
//               </h1>
//               <p className="text-lg text-gray-600 mb-8">
//                 Experience the ultimate in beauty and relaxation at our luxurious parlor. 
//                 Our expert stylists are dedicated to making you look and feel your best.
//               </p>
//               <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//                 <a 
//                   href="#services" 
//                   className="bg-primary text-white px-8 py-3 rounded-full text-center font-medium hover:bg-primary-dark transition-colors"
//                 >
//                   Our Services
//                 </a>
//                 <a 
//                   href="#contact" 
//                   className="border-2 border-primary text-primary px-8 py-3 rounded-full text-center font-medium hover:bg-primary/10 transition-colors"
//                 >
//                   Contact Us
//                 </a>
//               </div>
//             </div>
//             <div className="md:w-1/2 flex justify-center">
//               <div className="relative">
//                 <div className="w-80 h-80 md:w-96 md:h-96 bg-primary/10 rounded-full flex items-center justify-center">
//                   <div className="w-72 h-72 md:w-80 md:h-80 bg-primary/20 rounded-full flex items-center justify-center">
//                     <div className="w-64 h-64 bg-primary/30 rounded-full"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-16 md:py-24 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4">Our Services</h2>
//             <div className="w-20 h-1 bg-primary mx-auto"></div>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div 
//                 key={index}
//                 className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
//               >
//                 <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-dark mb-3">{service.title}</h3>
//                 <p className="text-gray-600">{service.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-16 md:py-24 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4">Contact Us</h2>
//             <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Have questions or want to book an appointment? Reach out to us and our team will get back to you as soon as possible.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             <div>
//               <h3 className="text-2xl font-semibold text-dark mb-6">Get In Touch</h3>
              
//               <div className="space-y-6">
//                 <div className="flex items-start">
//                   <div className="bg-primary/10 p-3 rounded-full mr-4">
//                     <FiMapPin className="w-6 h-6 text-primary" />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-dark">Our Location</h4>
//                     <p className="text-gray-600">123 Beauty Street, City, Country</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="bg-primary/10 p-3 rounded-full mr-4">
//                     <FiPhone className="w-6 h-6 text-primary" />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-dark">Phone Number</h4>
//                     <p className="text-gray-600">+1 234 567 8900</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="bg-primary/10 p-3 rounded-full mr-4">
//                     <FiMail className="w-6 h-6 text-primary" />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-dark">Email Address</h4>
//                     <p className="text-gray-600">info@beautyparlor.com</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="bg-primary/10 p-3 rounded-full mr-4">
//                     <FiClock className="w-6 h-6 text-primary" />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-dark">Working Hours</h4>
//                     <p className="text-gray-600">Monday - Saturday: 9:00 AM - 8:00 PM</p>
//                     <p className="text-gray-600">Sunday: 10:00 AM - 6:00 PM</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-white p-8 rounded-xl shadow-lg">
//               <h3 className="text-2xl font-semibold text-dark mb-6">Send Us a Message</h3>
//               <form className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
//                   <input 
//                     type="text" 
//                     id="name" 
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
//                     placeholder="John Doe"
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
//                   <input 
//                     type="email" 
//                     id="email" 
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
//                     placeholder="your@email.com"
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
//                   <input 
//                     type="tel" 
//                     id="phone" 
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
//                     placeholder="+1 234 567 8900"
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
//                   <textarea 
//                     id="message" 
//                     rows="4" 
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
//                     placeholder="How can we help you?"
//                   ></textarea>
//                 </div>
                
//                 <button 
//                   type="submit" 
//                   className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-dark transition-colors"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Footer */}
//       <footer className="bg-dark text-white py-12">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-xl font-serif font-bold mb-4">Beauty Parlor</h3>
//               <p className="text-gray-400">Your destination for beauty and wellness services that help you look and feel your best.</p>
//             </div>
            
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//               <ul className="space-y-2">
//                 <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
//                 <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
//                 <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
//                 <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Services</h4>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Hair Styling</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Makeup</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Spa Treatments</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Nail Care</a></li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
//               <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
//               <div className="flex">
//                 <input 
//                   type="email" 
//                   placeholder="Your email" 
//                   className="px-4 py-2 w-full rounded-l-lg text-gray-900 focus:outline-none"
//                 />
//                 <button className="bg-primary hover:bg-primary-dark px-4 rounded-r-lg transition-colors">
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>
          
//           <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
//             <p>&copy; {new Date().getFullYear()} Beauty Parlor. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }

// export default App



// // src/App.jsx
// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Navbar from './components/layout/Navbar';
// import Hero from './components/sections/Hero';
// import Gallery from './components/sections/Gallery';
// import Appointment from './components/sections/Appointment'
// // import Services from './components/sections/Services';
// // import Contact from './components/sections/Contact';
// // import Footer from './components/layout/Footer';
// import './App.css';

// function App() {
//   return (
//     <Router>
//     <div className="min-h-screen bg-white">
//       <Navbar />
//       <Routes>
//           <Route path="/" element={
//       <main>
//         <Hero />
//         <Gallery />
//       </main>
//           } />
//         <Route path="/appointment" element={<Appointment />} />
//         </Routes>

      
//     </div>
//     </Router>

//   );
// }




// import Navbar from './components/layout/Navbar';
// import Hero from './components/sections/Hero';
// import Gallery from './components/sections/Gallery';
// import Appointment from './components/sections/Appointment';
// import Services from './components/sections/Services';
// import Footer from './components/layout/Footer';
// import { Routes, Route } from 'react-router-dom';

// import './App.css';

// function App() {
//   return (
//     <div className="min-h-screen bg-white flex flex-col">
//       <Navbar />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <main className="flex-glow">
//               <Hero />
//               <Gallery />
//               <Services />
            
//             </main>
           
//           }
//         />
        
//         <Route path="/appointment" 
        
//         element<main className="flex-grow">
//               <Appointment />
//             </main>
//       </Routes>
//       <Footer/>
//     </div>
//   );
// }

// export default App;



import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Gallery from './components/sections/Gallery';
import Appointment from './components/sections/Appointment';
import Services from './components/sections/Services';
import Footer from './components/layout/Footer';
import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col overflex-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Gallery />
                <div className="container mx-auto px-4">
                <Services />
                </div>
              </>
            }
          />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
