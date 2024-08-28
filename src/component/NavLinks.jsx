import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // const navList = props
  const navItems = [
    {
      text: "Car Tyres",
      link: "#",
      submenu: [
        {
          text: "MRF Tyres",
          link: "#"
        },
        {
          text: "CEAT Tyres",
          link: "#"
        },
        {
          text: "Goodyear Tyres",
          link: "#"
        },
        {
          text: "Apollo Tyres",
          link: "#"
        },
        {
          text: "Bridgestone Tyres",
          link: "#"
        },
        {
          text: "JK Tyres",
          link: "#"
        },
      ]
    },
    {
      text: "Bike Tyres",
      link: "#",
      submenu: [
        {
          text: "MRF Tyres",
          link: "#"
        }
      ]
    },
    {
      text: "Tyre Pressure",
      link: "#",
      submenu: [
        {
          text: "MRF Tyres",
          link: "#"
        }
      ]
    },
    {
      text: "Commercial Tyres",
      link: "#",
      submenu: [
        {
          text: "All Commercial Tyres",
          link: "#"
        }
      ]
    },
    {
      text: "Accessories",
      link: "#",
    },
  ]

  return (
    <nav className='order-1 md:order-3'>
      <div className="hidden md:block">
        <button onClick={toggleMenu} className="focus:outline-none" >
          {/* Hamburger Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" ></path>
          </svg>
        </button>
      </div>
      <div className={`md:flex ${isOpen ? "block" : "hidden"} w-full md:w-auto`}>
        <ul className="md:flex space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
          {navItems?.map((item, i) => (
            <li key={i} className={`relative ${item.submenu ? "group" : ""}`}>
              <Link to={item.link}>{item.text}</Link>
              {item.submenu ? (
                <ul className='absolute hidden group-hover:block p-3 w-40 rounded-lg shadow-lg border z-10 bg-white'>
                  {item.submenu.map((item, i) => (
                    <li key={i} className='pl-3 py-2'>
                      <Link to={item.link} className='bold'>{item.text}</Link>
                    </li>
                  ))}
                </ul>
              )
                : ""}
            </li>
          ))}
        </ul >
      </div>
    </nav>
  )
}

export default NavLinks