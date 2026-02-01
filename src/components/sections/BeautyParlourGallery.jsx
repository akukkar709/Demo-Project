// // src/components/sections/BeautyParlourGallery.jsx
// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';

// // const BeautyParlourGallery = () => {
// //   const [activeFilter, setActiveFilter] = useState('all');
  
// //   // Sample gallery data
// //   const galleryItems = [
// //     { id: 1, category: 'hair', image: '/images/hair-1.jpg' },
// //     { id: 2, category: 'makeup', image: '/images/makeup-1.jpg' },
// //     { id: 3, category: 'spa', image: '/images/spa-1.jpg' },
// //     { id: 4, category: 'hair', image: '/images/hair-2.jpg' },
// //     { id: 5, category: 'makeup', image: '/images/makeup-2.jpg' },
// //     { id: 6, category: 'spa', image: '/images/spa-2.jpg' },
// //   ];

// //   const filters = [
// //     { id: 'all', name: 'All' },
// //     { id: 'hair', name: 'Hair Styling' },
// //     { id: 'makeup', name: 'Makeup' },
// //     { id: 'spa', name: 'Spa & Massage' }
// //   ];

// //   const filteredItems = activeFilter === 'all' 
// //     ? galleryItems 
// //     : galleryItems.filter(item => item.category === activeFilter);

// //   return (
// //     <div className="py-16 px-4 sm:px-6 lg:px-8">
// //       <div className="text-center mb-12">
// //         <h2 className="text-3xl font-serif font-bold mb-4">Beauty Parlour Gallery</h2>
// //         <p className="text-gray-600 max-w-2xl mx-auto">
// //           Explore our collection of beauty treatments and transformations
// //         </p>
// //       </div>

// //       {/* Filter Buttons */}
// //       <div className="flex justify-end mb-8 space-x-4 px-4">
// //         {filters.map(filter => (
// //           <button
// //             key={filter.id}
// //             onClick={() => setActiveFilter(filter.id)}
// //             className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
// //               activeFilter === filter.id
// //                 ? 'bg-amber-600 text-white'
// //                 : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
// //             }`}
// //           >
// //             {filter.name}
// //           </button>
// //         ))}
// //       </div>

// //       {/* Gallery Grid */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //         {filteredItems.map((item) => (
// //           <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg">
// //             <img
// //               src={item.image}
// //               alt={`Beauty treatment ${item.id}`}
// //               className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
// //             />
// //             <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
// //               <span className="text-white text-lg font-medium capitalize">
// //                 {item.category}
// //               </span>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       <div className="mt-12 text-center">
// //         <Link
// //           to="/appointment"
// //           className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-full transition-colors"
// //         >
// //           Book an Appointment
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BeautyParlourGallery;




// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const BeautyParlourGallery = () => {
//   const [activeFilter, setActiveFilter] = useState('all');

//   const galleryItems = [
//     { id: 1,image: '/images1/hero4.jpg' },
//     { id: 2,image: '/images/makeup-1.jpg' },
//     { id: 3,image: '/images/spa-1.jpg' },
//     { id: 4,image: '/images/hair-2.jpg' },
//     { id: 5,image: '/images/makeup-2.jpg' },
//     { id: 6,image: '/images/spa-2.jpg' },
//   ];

//   const filters = [
//     { id: 'all', name: 'All' },
//     { id: 'hair', name: 'Hair Styling' },
//     { id: 'makeup', name: 'Makeup' },
//     { id: 'spa', name: 'Spa & Massage' }
//   ];

//   const filteredItems =
//     activeFilter === 'all'
//       ? galleryItems
//       : galleryItems.filter(item => item.cattgegory === activeFilter);

//   return (
//     <div className="w-screen min-h-screen bg-white py-16 px-6">

//       {/* Heading */}
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-serif font-bold mb-4">
//           Beauty Parlour Gallery
//         </h2>
//         <p className="text-gray-600 max-w-3xl mx-auto">
//           Explore our collection of beauty treatments and transformations
//         </p>
//       </div>

//       {/* Filters */}
//       <div className="flex justify-center md:justify-end mb-10 flex-wrap gap-4">
//         {filters.map(filter => (
//           <button
//             key={filter.id}
//             onClick={() => setActiveFilter(filter.id)}
//             className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
//               activeFilter === filter.id
//                 ? 'bg-amber-600 text-white'
//                 : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//             }`}
//           >
//             {filter.name}
//           </button>
//         ))}
//       </div>

//       {/* Gallery */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {filteredItems.map(item => (
//           <div
//             key={item.id}
//             className="group relative overflow-hidden rounded-xl shadow-lg"
//           >
//             <img
//               src={item.image}
//               alt={item.category}
//               className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
//             />

//             <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//               <span className="text-white text-xl font-semibold capitalize">
//                 {item.category}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* CTA */}
//       <div className="mt-16 text-center">
//         <Link
//           to="/appointment"
//           className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-4 px-10 rounded-full transition"
//         >
//           Book an Appointment
//         </Link>
//       </div>

//     </div>
//   );
// };

// export default BeautyParlourGallery;
