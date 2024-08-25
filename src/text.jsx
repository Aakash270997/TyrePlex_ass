import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0">
              <img className="h-8 w-8" src="/path-to-logo" alt="Logo" />
            </div>
            <div className="hidden md:flex space-x-4">
              <a href="#" className="text-gray-800 dark:text-white">Home</a>
              <a href="#" className="text-gray-800 dark:text-white">Car Tyres</a>
              <a href="#" className="text-gray-800 dark:text-white">Bike Tyres</a>
              {/* Add more items here */}
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-800 dark:text-white"
            >
              ☰
            </button>
            <div className="hidden md:block">
              <LightDarkToggle />
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block text-gray-800 dark:text-white">Home</a>
          <a href="#" className="block text-gray-800 dark:text-white">Car Tyres</a>
          <a href="#" className="block text-gray-800 dark:text-white">Bike Tyres</a>
          {/* Add more items here */}
          <LightDarkToggle />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
