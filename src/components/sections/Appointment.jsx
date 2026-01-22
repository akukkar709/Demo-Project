// src/components/sections/Appointment.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Appointment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',  // New field
  city: '',    // New field
  location: '', // New field
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Here you would typically send the data to your backend
  //   console.log('Appointment booked:', formData);
  //   alert('Appointment booked successfully!');
  //   navigate('/');
  // };


  // In your Appointment.jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/api/appointment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data.success) {
      alert('Appointment requested successfully! We will contact you soon.');
      // Reset form or redirect
      setFormData({
        name: '',
        email: '',
        phone: '',
        gender: '',
        city: '',
        location: '',
        service: '',
        date: '',
        time: '',
        message: ''
      });
      // Optionally redirect to home
      navigate('/');
    } else {
      throw new Error(data.message || 'Failed to send appointment');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to send appointment. Please try again later.');
  }
};

  return (
    <section className="py-20 bg-gray-50"
     style={{ 
        width: '100vw',
        position: 'relative',
        left: '65%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw'
      }}
    
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-serif font-bold text-center mb-8 text-gray-800">
              Book an Appointment Online
            </h2>

            <div className="mb-8 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
  <div className="flex items-start">
    <div className="flex-shrink-0">
      <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="ml-3">
      <h3 className="text-sm font-medium text-blue-800">Booking Information</h3>
      <div className="mt-2 text-sm text-blue-700">
        <p>Our online bookings service operates between <span className="font-semibold">10:00 AM and 6:00 PM</span>.</p>
        <p className="mt-1">
          <span className="font-medium">During opening hours:</span> We'll call you within 1 hour to confirm your appointment.
        </p>
        <p className="mt-1">
          <span className="font-medium">Outside opening hours:</span> We'll contact you after 10:00 AM on the next business day.
        </p>
      </div>
    </div>
  </div>
</div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="service">Service</label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="haircut">Haircut</option>
                    <option value="coloring">Hair Coloring</option>
                    <option value="styling">Hair Styling</option>
                    <option value="spa">Spa Treatment</option>
                    <option value="makeup">Makeup</option>
                  </select>
                </div>
              </div>


{/* Add this after the phone number field */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Gender Selection */}
  <div>
    <label className="block text-gray-700 mb-2" htmlFor="gender">
      Gender <span className="text-red-500">*</span>
    </label>
    <select
      id="gender"
      name="gender"
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      value={formData.gender}
      onChange={handleChange}
    >
      <option value="">Select Gender</option>
      <option value="ladies">Ladies</option>
      <option value="gents">Gents</option>
      <option value="other">Prefer not to say</option>
    </select>
  </div>

  {/* City */}
  <div>
    <label className="block text-gray-700 mb-2" htmlFor="city">
      City <span className="text-red-500">*</span>
    </label>
    <select
      id="city"
      name="city"
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      value={formData.city}
      onChange={handleChange}
    >
      <option value="">Select City</option>
      <option value="new-york">New York</option>
      <option value="los-angeles">Los Angeles</option>
      <option value="chicago">Chicago</option>
      <option value="houston">Houston</option>
      <option value="phoenix">Phoenix</option>
    </select>
  </div>

  {/* Location/Area */}
  <div>
    <label className="block text-gray-700 mb-2" htmlFor="location">
      Area/Location <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      id="location"
      name="location"
      required
      placeholder="Enter your area or landmark"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      value={formData.location}
      onChange={handleChange}
    />
  </div>
</div>



              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="date">Preferred Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="time">Preferred Time</label>
                  <select
                    id="time"
                    name="time"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.time}
                    onChange={handleChange}
                  >
                    <option value="">Select a time</option>
                    
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">01:00 PM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="17:00">06:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">Additional Notes</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors"
                >
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;