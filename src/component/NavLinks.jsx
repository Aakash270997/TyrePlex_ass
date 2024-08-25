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
        }
      ]
    },
    {
      text: "Car Tyres",
      link: "#",
      submenu: [
        {
          text: "MRF Tyres",
          link: "#"
        }
      ]
    }
  ]

  return (
    <nav className='order-3 md:order-2'>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="focus:outline-none"
        >
          {/* Hamburger Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" ></path>
          </svg>
        </button>
      </div>
      <div className={`md:flex ${isOpen ? "block" : "hidden"} w-full md:w-auto`}>
        <ul className="md:flex space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
          {navItems?.map(item => (
            <li className={`relative ${item.submenu ? "group" : ""}`}>
              <Link to={item.link}>{item.text}</Link>
              {item.submenu ? (
                <ul className='absolute hidden group-hover:block  mt-2 py-2 w-40 rounded-lg shadow-lg'>
                  {item.submenu.map(item => (
                    <li>
                      <Link to={item.link}>{item.text}</Link>
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