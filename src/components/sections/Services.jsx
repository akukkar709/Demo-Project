// // src/components/sections/Services.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Services = () => {
//   const services = {
//     ladies: [
//       { name: 'Haircut & Styling', duration: '60 min', price: '$75+' },
//       { name: 'Hair Coloring', duration: '2-3 hours', price: '$120+' },
//       { name: 'Hair Treatments', duration: '45-90 min', price: '$65+' },
//       { name: 'Blowout & Styling', duration: '45 min', price: '$55+' },
//       { name: 'Makeup Application', duration: '60-90 min', price: '$85+' }
//     ],
//     gents: [
//       { name: 'Classic Haircut', duration: '30 min', price: '$45+' },
//       { name: 'Beard Trim', duration: '20 min', price: '$25+' },
//       { name: 'Hot Towel Shave', duration: '45 min', price: '$50+' },
//       { name: 'Hair Coloring', duration: '60 min', price: '$75+' },
//       { name: 'Facial Treatment', duration: '45 min', price: '$65+' }
//     ]
//   };

//   return (
//     <section id="services" className="relative w-full min-h-screen bg-white overflow-hidden">
//       {/* Full-width banner with split layout */}
//       <div className="relative w-full h-screen flex flex-col md:flex-row">
//         {/* Left side - Gents */}
//         <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden group">
//           <div 
//             className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
//             style={{ 
//               backgroundImage: 'url(/images/services/gents-service.jpg)',
//               backgroundPosition: 'center 30%'
//             }}
//           ></div>
//           <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end md:items-center justify-center p-8 md:p-12">
//             <div className="text-center">
//               <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">GENTS</h2>
//               <Link 
//                 to="/booking?service=gents" 
//                 className="inline-block border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300"
//               >
//                 View Services
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Right side - Ladies */}
//         <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden group">
//           <div 
//             className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
//             style={{ 
//               backgroundImage: 'url(/images/services/ladies-service.jpg)',
//               backgroundPosition: 'center 30%'
//             }}
//           ></div>
//           <div className="absolute inset-0 bg-black bg-opacity-40 flex items-start md:items-center justify-center p-8 md:p-12">
//             <div className="text-center">
//               <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">LADIES</h2>
//               <Link 
//                 to="/booking?service=ladies" 
//                 className="inline-block border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300"
//               >
//                 View Services
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Center Title - Visible on desktop */}
//         <div className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
//           <h2 className="text-6xl lg:text-8xl font-serif font-bold text-white opacity-90 text-center">
//             OUR<br/>SERVICES
//           </h2>
//         </div>
//       </div>

//       {/* Services Lists - Appears on scroll or click */}
//       <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Gents Services */}
//           <div>
//             <h3 className="text-3xl font-serif font-bold mb-8 text-center md:text-left">For Him</h3>
//             <div className="space-y-6">
//               {services.gents.map((service, index) => (
//                 <div key={index} className="border-b border-gray-200 pb-4">
//                   <div className="flex justify-between items-center">
//                     <h4 className="font-medium text-lg">{service.name}</h4>
//                     <span className="text-gray-600">{service.price}</span>
//                   </div>
//                   <p className="text-sm text-gray-500 mt-1">{service.duration}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Ladies Services */}
//           <div>
//             <h3 className="text-3xl font-serif font-bold mb-8 text-center md:text-left">For Her</h3>
//             <div className="space-y-6">
//               {services.ladies.map((service, index) => (
//                 <div key={index} className="border-b border-gray-200 pb-4">
//                   <div className="flex justify-between items-center">
//                     <h4 className="font-medium text-lg">{service.name}</h4>
//                     <span className="text-gray-600">{service.price}</span>
//                   </div>
//                   <p className="text-sm text-gray-500 mt-1">{service.duration}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="text-center mt-16">
//           <Link 
//             to="/appointment" 
//             className="inline-block bg-black text-white px-8 py-4 rounded-none hover:bg-gray-800 transition-colors"
//           >
//             Book an Appointment
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;


import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = {
    gents: [
      { name: 'Classic Haircut', duration: '30 min', price: '$45+' },
      { name: 'Beard Trim & Shape Up', duration: '30 min', price: '$30+' },
      { name: 'Hot Towel Shave', duration: '45 min', price: '$50+' },
      { name: 'Hair Coloring', duration: '60 min', price: '$75+' },
      { name: 'Facial Treatment', duration: '45 min', price: '$65+' }
    ],
    ladies: [
      { name: 'Haircut & Styling', duration: '60 min', price: '$75+' },
      { name: 'Hair Coloring', duration: '2-3 hours', price: '$120+' },
      { name: 'Keratin Treatment', duration: '2 hours', price: '$150+' },
      { name: 'Blowout & Styling', duration: '45 min', price: '$55+' },
      { name: 'Makeup Application', duration: '60 min', price: '$85+' }
    ]
  };

  return (
    <section id="services" className="py-20 px-4 md:px-8 bg-white"
    
     style={{ 
        width: '100vw',
        position: 'relative',
        left: '65%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw'
      }}

    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Gents Card */}
          <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 h-[600px]">
            <div 
              className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
              style={{ 
                backgroundImage: 'url(/images/services/gents-service.jpg)',
                backgroundPosition: 'center 30%'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="relative h-full flex flex-col justify-end p-8 text-white">
              <h3 className="text-5xl md:text-6xl font-serif font-bold mb-6">GENTS</h3>
              <ul className="space-y-3 mb-8">
                {services.gents.map((service, index) => (
                  <li key={index} className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="font-medium">{service.name}</span>
                    <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                      {service.price}
                    </span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/appointment?service=gents" 
                className="inline-block bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors w-full text-center"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Ladies Card */}
          <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 h-[600px]">
            <div 
              className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
              style={{ 
                backgroundImage: 'url(/images/services/ladies-service.jpg)',
                backgroundPosition: 'center 30%'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="relative h-full flex flex-col justify-end p-8 text-white">
              <h3 className="text-5xl md:text-6xl font-serif font-bold mb-6">LADIES</h3>
              <ul className="space-y-3 mb-8">
                {services.ladies.map((service, index) => (
                  <li key={index} className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="font-medium">{service.name}</span>
                    <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                      {service.price}
                    </span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/appointment?service=ladies" 
                className="inline-block bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors w-full text-center"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>

        {/* All Services Link */}
        <div className="text-center mt-16">
          {/* <Link 
            to="/services" 
            className="inline-flex items-center text-gray-700 hover:text-primary transition-colors group"
          >
            <span className="mr-2">View All Services</span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default Services;