import React, { useEffect, useRef } from 'react';

const Deals = () => {
  // const sliderRef = useRef();

  // useEffect(() => {
  //   const slider = sliderRef.current;
  //   const clone = slider.cloneNode(true);
  //   slider.appendChild(clone);
  // }, []);

  const brands = ["MRF", "CEAT", "Goodyear", "Apollo", "Bridgestone", "JK Tyre", "Michelin", "Pirelli", "Yokohama", "TVS Eurogrip", "Continental", "Hankook", "Ralco"];

  return (
    <div className="bg-white shadow p-4 mt-4 dealin">
      <div className="container mx-auto">
        <h3 className="text-lg font-bold mb-2">Deals in</h3>
        <div className="logos">
          <div className="flex space-x-4 logos-slide">
            {brands.map((brand, i) => (
              <div key={i} className="flex-1 text-center min-w-[16%]">
                <img src={`/images/tyres/${brand}.png`} alt={brand} className="w-full" />
                <p>{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;