// src/components/sections/Hero.jsx
// import { Link } from 'react-router-dom';

// const Hero = () => {
//   return (
//     <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-primary/5 to-secondary/5">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2 mb-10 md:mb-0">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-dark mb-6">
//               Beauty & Wellness <span className="text-primary">Parlor</span>
//             </h1>
//             <p className="text-lg text-gray-600 mb-8">
//               Experience the ultimate in beauty and relaxation at our luxurious parlor. 
//               Our expert stylists are dedicated to making you look and feel your best.
//             </p>
//             <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//               <Link 
//                 to="#services" 
//                 className="bg-primary text-white px-8 py-3 rounded-full text-center font-medium hover:bg-primary-dark transition-colors"
//               >
//                 Our Services
//               </Link>
//               <Link 
//                 to="#contact" 
//                 className="border-2 border-primary text-primary px-8 py-3 rounded-full text-center font-medium hover:bg-primary/10 transition-colors"
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//           <div className="md:w-1/2 flex justify-center">
//             <div className="relative">
//               <div className="w-80 h-80 md:w-96 md:h-96 bg-primary/10 rounded-full flex items-center justify-center">
//                 <div className="w-72 h-72 md:w-80 md:h-80 bg-primary/20 rounded-full flex items-center justify-center">
//                   <div className="w-64 h-64 bg-primary/30 rounded-full"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// src/components/sections/Hero.jsx
const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-dark mb-6">
              Beauty & Wellness <span className="text-primary">Parlor</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Experience the ultimate in beauty and relaxation at our luxurious parlor. 
              Our expert stylists are dedicated to making you look and feel your best.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#services" 
                className="bg-primary text-white px-8 py-3 rounded-full text-center font-medium hover:bg-primary-dark transition-colors"
              >
                Our Services
              </a>
              <a 
                href="#contact" 
                className="border-2 border-primary text-primary px-8 py-3 rounded-full text-center font-medium hover:bg-primary/10 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 bg-primary/10 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 md:w-80 md:h-80 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-primary/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;