import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (index) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const navItems = [
    {
      text: "Car Tyres",
      link: "#",
      submenu: [
        { text: "MRF Tyres", link: "#" },
        { text: "CEAT Tyres", link: "#" },
        { text: "Goodyear Tyres", link: "#" },
        { text: "Apollo Tyres", link: "#" },
        { text: "Bridgestone Tyres", link: "#" },
        { text: "JK Tyres", link: "#" },
      ]
    },
    {
      text: "Bike Tyres",
      link: "#",
      submenu: [
        { text: "MRF Tyres", link: "#" }
      ]
    },
    {
      text: "Tyre Pressure",
      link: "#",
      submenu: [
        { text: "MRF Tyres", link: "#" }
      ]
    },
    {
      text: "Commercial Tyres",
      link: "#",
      submenu: [
        { text: "All Commercial Tyres", link: "#" }
      ]
    },
    {
      text: "Accessories",
      link: "#",
    },
  ];

  return (
    <nav className='md:absolute'>
      <div className="hidden md:block">
        <button onClick={toggleMenu} className="focus:outline-none">
          {/* Hamburger Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <div className={`flex md:${isOpen ? "block" : "hidden"} w-full md:w-auto md:bg-white md:min-w-[100vw] md:absolute md:px-5 md:py-5 md:-left-4 md:shadow-lg md:border-t-2 md:shadow-indigo-500/40 z-10`}>
        <ul className="flex md:block  md:mt-0 gap-4">
          {navItems?.map((item, i) => (
            <li key={i} className={`relative ${item.submenu ? "" : ""} pl-3 py-2`}>
              <button onClick={() => toggleSubmenu(i)} className="flex gap-1 items-center w-full text-left focus:outline-none">
                <Link to={item.link} className="flex gap-1 items-center">{item.text}</Link>
                {item.submenu && <RiArrowDropDownLine className={`${openSubmenus[i] ? "rotate-180" : ""} transition ease-linear delay-150`} />}
              </button>
              {item.submenu && (
                <ul className={`absolute p-3 w-40 rounded-lg shadow-lg border z-10 bg-white ${openSubmenus[i] ? "block" : "hidden"} md:static md:shadow-none md:pt-0 md:border-none`}>
                  {item.submenu.map((subItem, j) => (
                    <li key={j} className='pl-3 py-2'>
                      <Link to={subItem.link} className='bold'>{subItem.text}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavLinks;
