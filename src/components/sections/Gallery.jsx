// // src/components/sections/Gallery.jsx
// import React from 'react';

// const Gallery = () => {
//   const galleryImages = [
//     { 
//       id: 1, 
//       src: '/gallery/haircut-image.jpg', 
//       alt: 'Modern Haircut',
//       title: 'Precision Haircuts',
//       description: 'Expertly crafted styles for every hair type'
//     },
//     { 
//       id: 2, 
//       src: '/gallery/1-image.jpg', 
//       alt: 'Vibrant Hair Color',
//       title: 'Vibrant Colors',
//       description: 'Transform your look with our coloring techniques'
//     },
//     { 
//       id: 3, 
//       src: '/gallery/2-image.jpg', 
//       alt: 'Elegant Styling',
//       title: 'Elegant Styling',
//       description: 'Perfect for special occasions'
//     },
//     { 
//       id: 4, 
//       src: '/gallery/4.jpg', 
//       alt: 'Beard Grooming',
//       title: 'Beard Care',
//       description: 'Professional grooming services'
//     },
//     { 
//       id: 5, 
//       src: '/gallery/5.jpg', 
//       alt: 'Professional Makeup',
//       title: 'Makeup Artistry',
//       description: 'Enhance your natural beauty'
//     },
//     { 
//       id: 6, 
//       src: '/gallery/6.jpg', 
//       alt: 'Luxury Spa',
//       title: 'Spa Treatments',
//       description: 'Relax and rejuvenate'
//     },
//   ];

//   return (
//     <section 
    
//      id="gallery" 
    
//     className="w-screen relative left-1/2 right-1/2 -mx-[50vw]"
//      style={{ 
//         width: '100vw',
//         position: 'relative',
//         left: '65%',
//         right: '50%',
//         marginLeft: '-50vw',
//         marginRight: '-50vw'
//       }}
//     >

//       <div className="relative w-full">
//       {/* White background section with heading */}
//       <div className="relative bg-white py-16 z-10">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-gray-800">
//             Our Signature Styles
//           </h2>
//         </div>
//       </div>
//       {/* Gray background section with gallery */}
//       <div className="relative bg-gray-100 pt-0 pb-16 -mt-8">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 -mt-12">
//             {galleryImages.map((image) => (
//               <div
//                 key={image.id}
//                 className="group relative overflow-hidden rounded-lg shadow-lg bg-white"
//                 style={{ aspectRatio: '3/4' }}
//               >
//                 <img
//                   src={image.src}
//                   alt={image.alt}
//                   className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
//                   <h3 className="text-white text-xl font-semibold">{image.title}</h3>
//                   <p className="text-gray-200 text-sm">{image.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>

//     </section>
//   );
// };

// export default Gallery;



// import React from 'react';

// const Gallery = () => {
//   const images = [
//     { id: 1, src: '/gallery/1-image.jpg', title: 'Haircut' },
//     { id: 2, src: '/gallery/2-image.jpg', title: 'Color' },
//     { id: 3, src: '/gallery/4.jpg', title: 'Style' },
//     { id: 4, src: '/gallery/5.jpg', title: 'Beard' },
//     { id: 5, src: '/gallery/6.jpg', title: 'Makeup' },
//     { id: 6, src: '/gallery/haircut-image.jpg', title: 'Spa' },
//   ];

//   return (
//     <section
//       id="gallery"
//       className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-gray-100 py-16"
//     >
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//         Our Signature Styles
//       </h2>

//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {images.map((img) => (
//             <div
//               key={img.id}
//               className="relative overflow-hidden rounded-lg aspect-[3/4] bg-white shadow"
//             >
//               <img
//                 src={img.src}
//                 alt={img.title}
//                 className="absolute inset-0 w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;





import React from 'react';

const Gallery = () => {
  const images = [
    { id: 1, src: '/gallery/1-image.jpg', title: 'Haircut' },
    { id: 2, src: '/gallery/2-image.jpg', title: 'Color' },
    { id: 3, src: '/gallery/4.jpg', title: 'Style' },
    { id: 4, src: '/gallery/5.jpg', title: 'Beard' },
    { id: 5, src: '/gallery/6.jpg', title: 'Makeup' },
    { id: 6, src: '/gallery/haircut-image.jpg', title: 'Spa' },
  ];

  return (
    <section
      id="gallery"
      className="w-screen min-h-screen bg-gray-100 py-16"
    >
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Signature Styles
      </h2>

      {/* FULL WIDTH GRID */}
      <div className="px-6 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img) => (
            <div
              key={img.id}
              className="relative overflow-hidden rounded-xl aspect-[3/4] bg-white shadow-lg"
            >
              <img
                src={img.src}
                alt={img.title}
                className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
