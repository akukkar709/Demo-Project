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
// const Hero = () => {
//   return (
//     <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <img 
//           src={heroImage} 
//           alt="Beauty Parlor" 
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/50"></div>
//       </div>
      
//       {/* Content */}
//       <div className="container mx-auto px-4 z-10 text-center text-white">
//         <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
//           Beauty & Wellness <span className="text-primary">Parlor</span>
//         </h1>
//         <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
//           Experience the ultimate in beauty and relaxation at our luxurious parlor. 
//           Our expert stylists are dedicated to making you look and feel your best.
//         </p>
//         <div className="flex flex-col sm:flex-row justify-center gap-4">
//           <a 
//             href="#services" 
//             className="bg-primary text-white px-8 py-4 rounded-full text-center font-medium hover:bg-primary-dark transition-colors text-lg"
//           >
//             Our Services
//           </a>
//           <a 
//             href="#contact" 
//             className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-center font-medium hover:bg-white/10 transition-colors text-lg"
//           >
//             Contact Us
//           </a>
//         </div>
//       </div>
      
//       {/* Scroll indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="w-8 h-12 border-4 border-white rounded-full flex justify-center p-1">
//           <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



// src/components/sections/Hero.jsx
// import heroImage from '../../assets/hero-image.jpg';

// const Hero = () => {
//   return (
//     <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <img 
//           src={heroImage} 
//           alt="Beauty Parlor" 
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/50"></div>
//       </div>
      
//       {/* Content */}
//       <div className="container mx-auto px-4 z-10 text-center text-white">
//         <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
//           Beauty & Wellness <span className="text-primary">Parlor</span>
//         </h1>
//         <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
//           Experience the ultimate in beauty and relaxation at our luxurious parlor. 
//           Our expert stylists are dedicated to making you look and feel your best.
//         </p>
//         <div className="flex flex-col sm:flex-row justify-center gap-4">
//           <a 
//             href="#services" 
//             className="bg-primary text-white px-8 py-4 rounded-full text-center font-medium hover:bg-primary-dark transition-colors text-lg"
//           >
//             Our Services
//           </a>
//           <a 
//             href="#contact" 
//             className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-center font-medium hover:bg-white/10 transition-colors text-lg"
//           >
//             Contact Us
//           </a>
//         </div>
//       </div>
      
//       {/* Scroll indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="w-8 h-12 border-4 border-white rounded-full flex justify-center p-1">
//           <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// src/components/sections/Hero.jsx
// import heroImage from '../../assets/hero-image.jpg';

// const Hero = () => {
//   return (
//     <section id="home" className="relative h-screen w-full">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img 
//           src={heroImage} 
//           alt="Beauty Parlor" 
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;



// import heroImage from '../../assets/hero-image.jpg';

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="relative w-screen h-screen overflow-hidden"
//     >
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img
//           src={heroImage}
//           alt="Beauty Parlor"
//           className="absolute inset-0 w-full h-full object-cover object-center"
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;



// import heroImage from '../../assets/hero-image.jpg';

// const Hero = () => {
//   return (
//     <section

//     className="relative w-screen h-screen overflow-hidden">
//   <img
//     src={heroImage}
//     className="absolute inset-0 w-full h-full object-cover"
//   />

//   <div className="absolute inset-0 bg-black/40"></div>

//   <div className="relative z-10 flex items-center justify-center h-full text-white">
//     <h1 className="text-4xl font-bold"></h1>
//   </div>

//       id="home"
//       className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    
//       <img
//         src={heroImage}
//         alt="Beauty Parlor"
//         className="absolute inset-0 w-full h-full object-cover object-center"
//       />
//     </section>
//   );
// };

// export default Hero;



// src/components/sections/Hero.jsx
// import React from 'react';
// import heroImage from '../../assets/hero-image.jpg';

// const Hero = () => {
//   return (
//     <section 
//       id="home"
//       className="relative w-full h-screen"
//     >
//       {/* Background Image Container */}
//       <div className="absolute inset-0 w-full h-full">
//         <img
//           src={heroImage}
//           alt="Luxury Beauty Parlor"
//           className="w-full h-full object-cover"
//         />
//         {/* Dark overlay for better text readability */}
//         <div className="absolute inset-0 bg-black/40"></div>
//       </div>
      
//       {/* Content Container */}
//       <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Radiance Beauty</h1>
//         <p className="text-xl md:text-2xl mb-8 max-w-2xl">Experience luxury beauty treatments in our serene environment</p>
//         <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-full transition duration-300">
//           Book an Appointment
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;



// src/components/sections/Hero.jsx
// import React from 'react';
// import heroImage from '../../assets/hero-image.jpg';

// const Hero = () => {
//   return (
//     <section 
//       id="home"
//       className="relative w-full h-screen"
//     >
//       {/* Background Image Container */}
//       <div className="absolute inset-0 w-full h-full">
//         <img
//           src={heroImage}
//           alt="Luxury Beauty Parlor"
//           className="w-full h-full object-cover"
//           style={{
//             minHeight: '100vh',
//             minWidth: '100vw',
//             objectPosition: 'center center'
//           }}
//         />
//         {/* Dark overlay for better text readability */}
//         <div className="absolute inset-0 bg-black/40"></div>
//       </div>
      
//       {/* Content Container - Adjusted for better mobile display */}
//       <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4 sm:px-6">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
//           Welcome to Radiance Beauty
//         </h1>
//         <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-2xl">
//           Experience luxury beauty treatments in our serene environment
//         </p>
//         <button 
//           className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition duration-300 text-sm sm:text-base"
//           aria-label="Book an appointment"
//         >
//           Book an Appointment
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// src/components/sections/Hero.jsx
// import React from 'react';
// import heroImage from '../../assets/hero-image.jpg';

// const Hero = () => {
//   return (
//     <section 
//       id="home"
//       className="relative w-full h-screen"
//     >
//       {/* Background Image Container */}
//       <div className="absolute inset-0 w-full h-full">
//         <img
//           src={heroImage}
//           alt="Luxury Beauty Parlor"
//           className="w-full h-full object-cover"
//           style={{
//             minHeight: '100vh',
//             minWidth: '100vw',
//             objectPosition: 'center center'
//           }}
//         />
//       </div>
      
//       {/* Content Container */}
//       <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4 sm:px-6">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
//           Welcome to Radiance Beauty
//         </h1>
//         <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-2xl">
//           Experience luxury beauty treatments in our serene environment
//         </p>
//         <button 
//           className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition duration-300 text-sm sm:text-base"
//           aria-label="Book an appointment"
//         >
//           Book an Appointment
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;



// src/components/sections/Hero.jsx
// import React from 'react';
// import heroImage from '../../assets/hero-image.jpg';

// const Hero = () => {
//   return (
//     <section 
//       id="home"
//       className="relative w-full h-screen flex items-center justify-center"
//     >
//       {/* Background Image */}
//       <div className="absolute inset-0 w-full h-full">
//         <img
//           src={heroImage}
//           alt="Radiance Beauty Parlor"
//           className="w-full h-full object-cover"
//           style={{
//             minHeight: '100vh',
//             minWidth: '100vw',
//             objectPosition: 'center center'
//           }}
//         />
//       </div>
      
//       {/* Only the title centered */}
//       <div className="relative z-10">
//         <h1 className="text-5xl md:text-7xl font-bold text-white">
//           Radiance Beauty
//         </h1>
//       </div>
//     </section>
//   );
// };

// export default Hero;



// src/components/sections/Hero.jsx
// import React, { useState, useEffect } from 'react';
// import heroImage from '../../assets/hero-image.jpg';

// const Hero = () => {
//   const [text, setText] = useState('');
//   const fullText = "Radiance Beauty";
//   const [charIndex, setCharIndex] = useState(0);

//   useEffect(() => {
//     if (charIndex < fullText.length) {
//       const timeout = setTimeout(() => {
//         setText(prevText => prevText + fullText[charIndex]);
//         setCharIndex(prevIndex => prevIndex + 1);
//       }, 150); // Adjust typing speed here (milliseconds)

//       return () => clearTimeout(timeout);
//     }
//   }, [charIndex, fullText]);

//   return (
//     <section 
//       id="home"
//       className="relative w-full h-screen flex items-center justify-center"
//     >
//       {/* Background Image */}
//       <div className="absolute inset-0 w-full h-full">
//         <img
//           src={heroImage}
//           alt="Radiance Beauty Parlor"
//           className="w-full h-full object-cover"
//           style={{
//             minHeight: '100vh',
//             minWidth: '100vw',
//             objectPosition: 'center center'
//           }}
//         />
//       </div>
      
//       {/* Animated Text */}
//       <div className="relative z-10">
//         <h1 
//           className="text-5xl md:text-7xl font-bold text-white border-r-2 border-white pr-2"
//           style={{ 
//             whiteSpace: 'nowrap',
//             overflow: 'hidden',
//             animation: 'blink 0.75s step-end infinite',
//             textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
//           }}
//         >
//           {text}
//         </h1>
//       </div>

//       {/* Add the blinking cursor animation to your CSS */}
//       <style jsx>{`
//         @keyframes blink {
//           from, to { border-color: transparent }
//           50% { border-color: white; }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;


// src/components/sections/Hero.jsx
// import React, { useState, useEffect } from 'react';
// import heroImage from '../../assets/hero-image.jpg';

// const Hero = () => {
//   const [text, setText] = useState('');
//   const fullText = "Radiance Beauty";
//   const [charIndex, setCharIndex] = useState(0);

//   useEffect(() => {
//     if (charIndex < fullText.length) {
//       const timeout = setTimeout(() => {
//         setText(prevText => prevText + fullText[charIndex]);
//         setCharIndex(prevIndex => prevIndex + 1);
//       }, 150); // Adjust typing speed here (milliseconds)

//       return () => clearTimeout(timeout);
//     }
//   }, [charIndex, fullText]);

//   return (
//     <section 
//       id="home"
//       className="relative w-full h-screen flex items-center justify-center"
//     >
//       {/* Background Image */}
//       <div className="absolute inset-0 w-full h-full">
//         <img
//           src={heroImage}
//           alt="Radiance Beauty Parlor"
//           className="w-full h-full object-cover"
//           style={{
//             minHeight: '100vh',
//             minWidth: '100vw',
//             objectPosition: 'center center'
//           }}
//         />
//       </div>
      
//       {/* Animated Text */}
//       <div className="relative z-10">
//         <h1 
//           className="text-5xl md:text-7xl font-bold text-black border-r-2 border-black pr-2"
//           style={{ 
//             whiteSpace: 'nowrap',
//             overflow: 'hidden',
//             animation: 'blink 0.75s step-end infinite',
//             textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)'
//           }}
//         >
//           {text}
//         </h1>
//       </div>

//       {/* Blinking cursor animation */}
//       <style jsx>{`
//         @keyframes blink {
//           from, to { border-color: transparent }
//           50% { border-color: black; }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;




// src/components/sections/Hero.jsx
import React, { useState, useEffect } from 'react';
import heroImage from '../../assets/hero-image.jpg';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Radiance Beauty";
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prevText => prevText + fullText[charIndex]);
        setCharIndex(prevIndex => prevIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, fullText]);

  // Sample gallery images (replace with your actual images)
  const galleryImages = [
     { 
    id: 1, 
    src: '/gallery/haircut-image.jpg', 
    alt: 'Modern Haircut',
    title: 'Precision Haircuts',
    description: 'Expertly crafted styles for every hair type'
  },
  { 
    id: 2, 
    src: '/gallery/1-image.jpg', 
    alt: 'Vibrant Hair Color',
    title: 'Vibrant Colors',
    description: 'Transform your look with our coloring techniques'
  },
  { 
    id: 3, 
    src: '/gallery/2-image.jpg', 
    alt: 'Elegant Styling',
    title: 'Elegant Styling',
    description: 'Perfect for special occasions'
  },
  { 
    id: 4, 
    src: '/gallery/2-image.jpg', 
    alt: 'Beard Grooming',
    title: 'Beard Care',
    description: 'Professional grooming services'
  },
  { 
    id: 5, 
    src: '/gallery/5.jpg', 
    alt: 'Professional Makeup',
    title: 'Makeup Artistry',
    description: 'Enhance your natural beauty'
  },
  { 
    id: 6, 
    src: '/gallery/6.jpg', 
    alt: 'Luxury Spa',
    title: 'Spa Treatments',
    description: 'Relax and rejuvenate'
  },
];

  return (
    <div>
      {/* Hero Section */}
      <section 
        id="home"
        className="relative w-full h-screen flex flex-col items-center justify-center"
      >
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={heroImage}
            alt="Radiance Beauty Parlor"
            className="w-full h-full object-cover"
            style={{
              minHeight: '100vh',
              minWidth: '100vw',
              objectPosition: 'center center'
            }}
          />
        </div>
        
        {/* Main Title */}
        <div className="relative z-10 text-center mb-8">
          <h1 
            className="text-5xl md:text-7xl font-bold text-black mb-8"
            style={{ 
              textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)'
            }}
          >
            {text}
          </h1>
        </div>

        {/* LOOKS IN VOGUE Banner */}
        {/* <div className="relative z-10 bg-black bg-opacity-80 text-white py-6 px-8 rounded-lg text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 tracking-wider">
            LOOKS IN VOGUE
          </h2>
          <button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 px-8 rounded-full transition duration-300 flex items-center mx-auto">
            View Collection <FiArrowRight className="ml-2" />
          </button>
        </div> */}
      </section>

      {/* 3x2 Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-gray-800">
            Our Signature Styles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 font-medium text-lg">
                    {image.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>






  );
};

export default Hero;