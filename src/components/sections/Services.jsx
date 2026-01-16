// src/components/sections/Services.jsx
import { FiScissors, FiHeart, FiAward } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: <FiScissors className="w-8 h-8 text-primary" />,
      title: 'Hair Styling',
      description: 'Professional hair cutting and styling for all hair types.'
    },
    {
      icon: <FiHeart className="w-8 h-8 text-primary" />,
      title: 'Makeup',
      description: 'Enhance your natural beauty with our professional makeup services.'
    },
    {
      icon: <FiAward className="w-8 h-8 text-primary" />,
      title: 'Spa Treatments',
      description: 'Relax and rejuvenate with our luxurious spa treatments.'
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;