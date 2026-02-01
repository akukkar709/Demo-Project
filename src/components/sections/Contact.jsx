// // src/components/sections/Contact.jsx
// import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

// const Contact = () => {
//   return (
//     <section id="contact" className="py-16 md:py-24 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4">Contact Us</h2>
//           <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Have questions or want to book an appointment? Reach out to us and our team will get back to you as soon as possible.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           <div>
//             <h3 className="text-2xl font-semibold text-dark mb-6">Get In Touch</h3>
            
//             <div className="space-y-6">
//               <div className="flex items-start">
//                 <div className="bg-primary/10 p-3 rounded-full mr-4">
//                   <FiMapPin className="w-6 h-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-dark">Our Location</h4>
//                   <p className="text-gray-600">123 Beauty Street, City, Country</p>
//                 </div>
//               </div>
              
//               <div className="flex items-start">
//                 <div className="bg-primary/10 p-3 rounded-full mr-4">
//                   <FiPhone className="w-6 h-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-dark">Phone Number</h4>
//                   <p className="text-gray-600">+1 234 567 8900</p>
//                 </div>
//               </div>
              
//               <div className="flex items-start">
//                 <div className="bg-primary/10 p-3 rounded-full mr-4">
//                   <FiMail className="w-6 h-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-dark">Email Address</h4>
//                   <p className="text-gray-600">info@beautyparlor.com</p>
//                 </div>
//               </div>
              
//               <div className="flex items-start">
//                 <div className="bg-primary/10 p-3 rounded-full mr-4">
//                   <FiClock className="w-6 h-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-dark">Working Hours</h4>
//                   <p className="text-gray-600">Monday - Saturday: 9:00 AM - 8:00 PM</p>
//                   <p className="text-gray-600">Sunday: 10:00 AM - 6:00 PM</p>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div className="bg-white p-8 rounded-xl shadow-lg">
//             <h3 className="text-2xl font-semibold text-dark mb-6">Send Us a Message</h3>
//             <form className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
//                 <input 
//                   type="text" 
//                   id="name" 
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
//                   placeholder="John Doe"
//                 />
//               </div>
              
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
//                 <input 
//                   type="email" 
//                   id="email" 
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
//                   placeholder="your@email.com"
//                 />
//               </div>
              
//               <div>
//                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
//                 <input 
//                   type="tel" 
//                   id="phone" 
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
//                   placeholder="+1 234 567 8900"
//                 />
//               </div>
              
//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
//                 <textarea 
//                   id="message" 
//                   rows="4" 
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
//                   placeholder="How can we help you?"
//                 ></textarea>
//               </div>
              
//               <button 
//                 type="submit" 
//                 className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-dark transition-colors"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;




// src/components/sections/Contact.jsx
// import { useState } from 'react';
// import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from 'react-icons/fi';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//     // You can add your form submission logic here
//   };

//   return (
//     <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Hero Section */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
//             Contact Us
//           </h1>
//           <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             We'd love to hear from you. Reach out to us with any questions or to book an appointment.
//           </p>
//         </div>

//         {/* Contact Info & Form */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div className="bg-gray-50 p-8 rounded-2xl">
//               <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
//                 Get in Touch
//               </h2>
              
//               <div className="space-y-6">
//                 <div className="flex items-start">
//                   <div className="bg-amber-100 p-3 rounded-full mr-4">
//                     <FiMapPin className="w-5 h-5 text-amber-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-900">Our Location</h3>
//                     <p className="text-gray-600">123 Beauty Street, City, Country</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start">
//                   <div className="bg-amber-100 p-3 rounded-full mr-4">
//                     <FiPhone className="w-5 h-5 text-amber-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-900">Phone</h3>
//                     <p className="text-gray-600">+1 (555) 123-4567</p>
//                     <p className="text-gray-600">+1 (555) 987-6543</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start">
//                   <div className="bg-amber-100 p-3 rounded-full mr-4">
//                     <FiMail className="w-5 h-5 text-amber-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-900">Email</h3>
//                     <p className="text-gray-600">info@aurorabeauty.com</p>
//                     <p className="text-gray-600">support@aurorabeauty.com</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start">
//                   <div className="bg-amber-100 p-3 rounded-full mr-4">
//                     <FiClock className="w-5 h-5 text-amber-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-900">Working Hours</h3>
//                     <p className="text-gray-600">Monday - Friday: 9:00 AM - 8:00 PM</p>
//                     <p className="text-gray-600">Saturday: 10:00 AM - 6:00 PM</p>
//                     <p className="text-gray-600">Sunday: 11:00 AM - 5:00 PM</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Map */}
//             <div className="rounded-2xl overflow-hidden h-80">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425872401422!3d40.74076987932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sMadison%20Square%20Garden!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 title="Our Location"
//               ></iframe>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-gray-50 p-8 rounded-2xl">
//             <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
//               Send Us a Message
//             </h2>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
//                     placeholder="Your name"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
//                   placeholder="+1 (___) ___-____"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
//                   placeholder="How can we help you?"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                   Your Message *
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="5"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
//                   placeholder="Type your message here..."
//                 ></textarea>
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
//                 >
//                   <FiSend className="mr-2" />
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;





import { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-screen min-h-screen bg-white py-20 px-6">

      {/* HERO SECTION */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
          Contact Us
        </h1>
        <div className="w-28 h-1 bg-amber-600 mx-auto mb-8"></div>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          We'd love to hear from you. Reach out to us with any questions or to book an appointment.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div className="space-y-10">

          {/* CONTACT INFO */}
          <div className="bg-gray-50 p-10 rounded-3xl shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
              Get in Touch
            </h2>

            <div className="space-y-7">

              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-5">
                  <FiMapPin className="text-amber-600 w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Our Location</h3>
                  <p className="text-gray-600">
                    Aurora Beauty Salon, MG Road, Bengaluru, India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-5">
                  <FiPhone className="text-amber-600 w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-gray-600">+91 91234 56789</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-5">
                  <FiMail className="text-amber-600 w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">info@aurorabeauty.com</p>
                  <p className="text-gray-600">support@aurorabeauty.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-5">
                  <FiClock className="text-amber-600 w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Working Hours</h3>
                  <p className="text-gray-600">Mon – Fri: 9:00 AM – 8:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM – 6:00 PM</p>
                  <p className="text-gray-600">Sunday: 11:00 AM – 5:00 PM</p>
                </div>
              </div>

            </div>
          </div>

          {/* GOOGLE MAP */}
          <div className="rounded-3xl overflow-hidden h-[420px] shadow-md">
            <iframe
              src="https://www.google.com/maps?q=MG%20Road%20Bangalore&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Aurora Beauty Location"
            />
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-gray-50 p-10 rounded-3xl shadow-sm">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 border rounded-xl focus:ring-2 focus:ring-amber-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 border rounded-xl focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-5 py-4 border rounded-xl focus:ring-2 focus:ring-amber-500"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-5 py-4 border rounded-xl focus:ring-2 focus:ring-amber-500"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message *"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 border rounded-xl focus:ring-2 focus:ring-amber-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-xl text-lg font-medium transition flex items-center justify-center"
            >
              <FiSend className="mr-2" />
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
