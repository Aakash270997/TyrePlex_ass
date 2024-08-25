import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 max-w-[1272px] mx-auto">
      <div className="container mx-auto px-4">
        <div className="bg-[#FFEAAA] rounded-lg p-6 flex flex-col md:flex-row items-center justify-between mb-8">
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

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-600">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="https://www.tyreplex.com/assets/images/logo.svg"
              alt="TyrePlex Logo"
              className="h-8 mr-4"
            />
            <div className="space-x-4">
              <a href="#" className="hover:underline">
                Who We Are
              </a>
              <a href="#" className="hover:underline">
                Are you a Tyre Dealer?
              </a>
            </div>
          </div>
          <div className="text-center mb-4 md:mb-0">
            ©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.
          </div>
          <div className="space-x-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of use
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
            <a href="#" className="hover:underline">
              Career
            </a>
            <a href="#" className="hover:underline">
              Shipping & Return Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
