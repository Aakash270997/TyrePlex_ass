import React from 'react';

function ServiceCard({ title, icon, onButtonClick }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
      <img src={icon} alt={title} className="w-16 h-16 mb-4" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <button className="bg-red-500 text-white px-[10px] py-[5px] rounded-md mt-4" onClick={onButtonClick}>Book Now</button>
    </div>
  );
}

function Services() {
  const services = [
    {
      title: "Wheel Balancing",
      icon: "images/wheel-alignment-bal.webp",
      onClick: () => console.log("Wheel Balancing clicked"),
    },
    {
      title: "Wheel Alignment",
      icon: "/images/wheel-alignment.webp",
      onClick: () => console.log("Wheel Alignment clicked"),
    },
  ];

  return (
    <div className="bg-white shadow p-4 mt-4 dealin">
      <div className="container mx-auto">
      <h3 className="text-lg font-bold mb-2">Services offered by this dealer</h3>
        <div className="flex gap-3">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;