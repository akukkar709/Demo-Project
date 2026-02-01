import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Appointment = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // ✅ ONLY API CALL (no telegram here)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error('Booking failed');
      }

      alert('✅ Appointment booked successfully!');

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

      navigate('/');

    } catch (error) {
      console.error(error);
      alert('❌ Failed to book appointment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-screen min-h-screen bg-gray-50 py-20">
      <div className="w-full px-6 md:px-16 lg:px-24">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">

            <h2 className="text-3xl font-serif font-bold text-center mb-8 text-gray-800">
              Book an Appointment Online
            </h2>

            <div className="mb-8 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
              <p className="text-sm text-blue-700">
                Our online bookings operate between <b>10:00 AM – 6:00 PM</b>.
                We’ll call you within 1 hour during working hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME + EMAIL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="input"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                />
              </div>

              {/* PHONE + SERVICE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="input"
                />

                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="input"
                >
                  <option value="">Select Service</option>
                  <option value="haircut">Haircut</option>
                  <option value="spa">Spa</option>
                  <option value="makeup">Makeup</option>
                </select>
              </div>

              {/* GENDER CITY LOCATION */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <select
                  name="gender"
                  required
                  value={formData.gender}
                  onChange={handleChange}
                  className="input"
                >
                  <option value="">Gender</option>
                  <option value="ladies">Ladies</option>
                  <option value="gents">Gents</option>
                </select>

                <select
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="input"
                >
                  <option value="">City</option>
                  <option>New York</option>
                  <option>Los Angeles</option>
                </select>

                <input
                  type="text"
                  name="location"
                  placeholder="Area / Landmark"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="input"
                />
              </div>

              {/* DATE + TIME */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="input"
                />

                <select
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="input"
                >
                  <option value="">Select Time</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>12:00 PM</option>
                  <option>02:00 PM</option>
                  <option>04:00 PM</option>
                  <option>06:00 PM</option>
                </select>
              </div>

              <textarea
                name="message"
                rows="4"
                placeholder="Additional notes"
                value={formData.message}
                onChange={handleChange}
                className="input"
              />

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-white px-10 py-3 rounded-full hover:bg-primary-dark transition"
                >
                  {isSubmitting ? 'Submitting...' : 'Book Appointment'}
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
