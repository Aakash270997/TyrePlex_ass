import React from 'react'
import NavLinks from './NavLinks'
import { FaRegUserCircle } from 'react-icons/fa'

const Header = () => {
  
  return (
    <header className='bg-white shadow-[box-shadow: 0 1px 4px rgba(0, 0, 0, 0.11);] px-4 py-2'>
      <div className="container flex justify-between m-auto items-center">
        <div className="md:order-2">
          <img src="/images/TP-logo.webp" alt="logo" />
        </div>
        <NavLinks  />
        <div className="login md:order-3 flex gap-2 items-center">
        <FaRegUserCircle />
        Login
        </div>
      </div>
    </header>
  )
}

export default Header