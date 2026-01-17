// // // src/components/layout/Footer.jsx
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className="bg-dark text-white py-12">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-xl font-serif font-bold mb-4">Beauty Parlor</h3>
//             <p className="text-gray-400">Your destination for beauty and wellness services that help you look and feel your best.</p>
//           </div>
          
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li><Link to="#home" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
//               <li><Link to="#services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
//               <li><Link to="#about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
//               <li><Link to="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
//             </ul>
//           </div>
          
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Services</h4>
//             <ul className="space-y-2">
//               <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Hair Styling</Link></li>
//               <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Makeup</Link></li>
//               <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Spa Treatments</Link></li>
//               <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Nail Care</Link></li>
//             </ul>
//           </div>
          
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
//             <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
//             <div className="flex">
//               <input 
//                 type="email" 
//                 placeholder="Your email" 
//                 className="px-4 py-2 w-full rounded-l-lg text-gray-900 focus:outline-none"
//               />
//               <button className="bg-primary hover:bg-primary-dark px-4 rounded-r-lg transition-colors">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>
        
//         <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
//           <p>&copy; {new Date().getFullYear()} Beauty Parlor. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;