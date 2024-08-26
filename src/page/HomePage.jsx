import React from 'react'
import HeroSection from '../component/home/HeroSection'
import Deals from '../component/home/Deals'
import Services from '../component/home/Services'
import Products from '../component/home/Products'
import PaymentMode from '../component/home/PaymentMode'

const HomePage = () => {
  return (
    <div className="max-w-[1240px] mx-auto mt-2">
      <HeroSection />
      <Deals />
      <Services />
      <Products />
      <PaymentMode />
    </div>
  )
}

export default HomePage