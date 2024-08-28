import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { TbBrandFacebook } from 'react-icons/tb';

const Footer = () => {
  return (
    <footer className="pt-10 max-w-[1272px] mx-auto">
      <div className="container mx-auto px-4">
        <div className="bg-[#FFEAAA] rounded-lg p-6 flex sm:flex-col items-center justify-between">
          <div className="text-xl font-semibold text-gray-800">
            Have a question about Tyres?
            <div className="mt-4 md:mt-0">
              <p className="text-gray-600 text-[14px] text-[#130f268a]">
                Get an answer in 24 hours from our experts.
              </p>
              <div className="mt-4 relative">
                <input type="text" placeholder="Ask or search your question" className="py-2 px-4 w-full md:w-96 border border-yellow-300 rounded-full focus:outline-none" />
              </div>
            </div>
          </div>
          <div className="ml-4 mt-4 md:mt-0">
            <img src="/images/haveQuestion-bg.webp" alt="Question Icon" className="w-16 h-16 rounded-full" />
          </div>
        </div>
        <div className="flex md:flex-col justify-between items-start text-gray-600 bg-[#ffffff] p-6 pt-8">
          <div className="flex items-center justify-between mb-4 md:mb-0">
            <div>
            <img src="/images/TP-logo.webp" alt="TyrePlex Logo" className="mb-2" />
            <div className="flex gap-3 justify-center">
            <TbBrandFacebook className="w-6 h-6" />
            <FaInstagram className="w-6 h-6" />
            </div>
            </div>
          </div>
          <div className="">
              <a href="#" className="hover:underline block text-[14px]">Who We Are</a>
              <a href="#" className="hover:underline block text-[14px]">Are you a Tyre Dealer?</a>
            </div>
          <div className="">
            <a href="#" className="hover:underline block text-[14px]">Privacy Policy</a>
            <a href="#" className="hover:underline block text-[14px]">Terms of use</a>
          </div>
          <div className="">
            <a href="#" className="hover:underline block text-[14px]">Contact Us</a>
            <a href="#" className="hover:underline block text-[14px]">Career</a>
            <a href="#" className="hover:underline block text-[14px]">Shipping & Return Policy</a>
          </div>
        </div>
        <hr className='pb-3 bg-[#fff]' />
      <div className="text-center mb-4 pb-10 md:mb-0 bg-[#fff]">
        ©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.
      </div>
      </div>
    </footer >
  );
};

export default Footer;
