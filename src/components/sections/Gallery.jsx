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
