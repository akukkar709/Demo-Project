// src/components/sections/About.jsx
// import React from 'react';

// const About = () => {
//   return (
//     <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Hero Section */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
//             About Aurora Beauty
//           </h1>
//           <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Where beauty meets luxury and every visit is a pampering experience
//           </p>
//         </div>

//         {/* Our Story */}
//         <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
//           <div>
//             <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Our Story</h2>
//             <p className="text-gray-600 mb-6">
//               Founded in 2023, Aurora Beauty has been at the forefront of the beauty industry, 
//               providing exceptional services with a personal touch. What started as a small salon 
//               has grown into a premier beauty destination, known for our skilled professionals 
//               and luxurious treatments.
//             </p>
//             <p className="text-gray-600">
//               Our journey has been one of passion, dedication, and a relentless pursuit of 
//               excellence in beauty and wellness.
//             </p>
//           </div>
//           <div className="relative h-96 rounded-xl overflow-hidden">
//             <img 
//               src="/images/salon-interior.jpg" 
//               alt="Aurora Beauty Salon Interior"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/40"></div>
//           </div>
//         </div>

//         {/* Our Mission & Values */}
//         <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">
//               Our Mission & Values
//             </h2>
            
//             <div className="grid md:grid-cols-3 gap-8">
//               <div className="text-center p-6 bg-white rounded-xl shadow-sm">
//                 <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-2xl">✨</span>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3">Excellence</h3>
//                 <p className="text-gray-600">
//                   We are committed to delivering exceptional service and outstanding results.
//                 </p>
//               </div>

//               <div className="text-center p-6 bg-white rounded-xl shadow-sm">
//                 <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-2xl">💖</span>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3">Care</h3>
//                 <p className="text-gray-600">
//                   Your comfort and satisfaction are our top priorities.
//                 </p>
//               </div>

//               <div className="text-center p-6 bg-white rounded-xl shadow-sm">
//                 <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-2xl">🌟</span>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3">Innovation</h3>
//                 <p className="text-gray-600">
//                   We stay ahead with the latest trends and techniques.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Our Team */}
//         <div className="text-center mb-20">
//           <h2 className="text-3xl font-serif font-bold text-gray-900 mb-12">Meet Our Experts</h2>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { name: 'Emma Wilson', role: 'Master Stylist', image: '/images/team-1.jpg' },
//               { name: 'Sophia Chen', role: 'Beauty Therapist', image: '/images/team-2.jpg' },
//               { name: 'James Rodriguez', role: 'Color Specialist', image: '/images/team-3.jpg' },
//               { name: 'Olivia Parker', role: 'Spa Director', image: '/images/team-4.jpg' },
//             ].map((member, index) => (
//               <div key={index} className="group">
//                 <div className="relative h-80 mb-4 rounded-xl overflow-hidden">
//                   <img 
//                     src={member.image} 
//                     alt={member.name}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
//                     <div>
//                       <h4 className="text-white text-xl font-semibold">{member.name}</h4>
//                       <p className="text-amber-300">{member.role}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="bg-amber-50 rounded-2xl p-8 md:p-12 text-center">
//           <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
//             Experience the Aurora Difference
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto mb-8">
//             Book your appointment today and discover why we're the preferred choice for beauty and wellness.
//           </p>
//           <a
//             href="/appointment"
//             className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-full transition-colors"
//           >
//             Book an Appointment
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;




import React from 'react';

const About = () => {
  return (
    <div className="w-screen min-h-screen bg-white py-20 px-6">

      {/* HERO SECTION */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
          About Aurora Beauty
        </h1>
        <div className="w-28 h-1 bg-amber-600 mx-auto mb-8"></div>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Where beauty meets luxury and every visit is a pampering experience
        </p>
      </div>

      {/* OUR STORY */}
      <div className="grid lg:grid-cols-2 gap-14 items-center mb-24">
        <div>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            Our Story
          </h2>
          <p className="text-gray-600 mb-6">
            Founded in 2023, Aurora Beauty has been at the forefront of the beauty industry,
            providing exceptional services with a personal touch. What started as a small salon
            has grown into a premier beauty destination, known for our skilled professionals
            and luxurious treatments.
          </p>
          <p className="text-gray-600">
            Our journey has been one of passion, dedication, and a relentless pursuit of
            excellence in beauty and wellness.
          </p>
        </div>

        <div className="relative h-[420px] rounded-2xl overflow-hidden">
          <img
            src="/images1/about/salon-interior.jpg"
            alt="Aurora Beauty Salon Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/40"></div>
        </div>
      </div>

      {/* MISSION */}
      <div className="bg-gray-50 rounded-3xl px-8 py-16 mb-24">
        <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-14">
          Our Mission & Values
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { icon: '✨', title: 'Excellence', text: 'Delivering exceptional service and outstanding results.' },
            { icon: '💖', title: 'Care', text: 'Your comfort and satisfaction are our top priorities.' },
            { icon: '🌟', title: 'Innovation', text: 'Using the latest trends and modern beauty techniques.' },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-5 text-2xl">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TEAM */}
      <div className="text-center mb-24">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-14">
          Meet Our Experts
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { name: 'Emma Wilson', role: 'Master Stylist', image: '/images1/about/team-1.jpg' },
            { name: 'Sophia Chen', role: 'Beauty Therapist', image: '/images1/about/team-2.jpg' },
            { name: 'James Rodriguez', role: 'Color Specialist', image: '/images1/about/team-3.jpg' },
            { name: 'Olivia Parker', role: 'Spa Director', image: '/images1/about/team-4.jpg' },
          ].map((member, index) => (
            <div key={index} className="group">
              <div className="relative h-[340px] rounded-2xl overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                  <div>
                    <h4 className="text-white text-lg font-semibold">{member.name}</h4>
                    <p className="text-amber-300 text-sm">{member.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-amber-50 rounded-3xl py-16 text-center">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
          Experience the Aurora Difference
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Book your appointment today and discover why we're the preferred choice for beauty and wellness.
        </p>
        <a
          href="/appointment"
          className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-4 px-10 rounded-full transition"
        >
          Book an Appointment
        </a>
      </div>

    </div>
  );
};

export default About;
