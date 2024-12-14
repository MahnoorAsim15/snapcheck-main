import React from "react";
// import linkedinIcon from "../images/Linkedin.png";  // Corrected path

// <img src={linkedinIcon} alt="LinkedIn" className="h-6 w-6" />

const Footer = () => {
  return (
    <footer className="bg-[#0B0320] text-white py-8 px-4 md:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between">
        {/* Left Section */}
        <div className="mb-8 md:mb-0">
          <img
            src="/images-mahnoor/logo.png" // Replace with your logo's path
            alt="Insightful Logo"
            className="h-10 mb-4"
          />
          <h2 className="text-xl font-bold mb-4">
            Track Your Workforce Perfectly 
          </h2>
          <h2 className="text-xl font-bold mb-4">
          At Your Fingertips
          </h2 >
          <p className="text-sm text-gray-400 mb-4">
            <p>Employee monitoring software empower your</p>
            <p>team Employee monitoring software empower</p>
            <p>your team Employee monitoring software</p>
            <p>empower your team.</p>
            ........
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:opacity-80">
              <img
                src="/images-mahnoor/Facebook.png"
                alt="Facebook"
                className="h-6 w-6"
              />
            </a>
            
            <a href="#" className="hover:opacity-80">
              <img
                src="/images-mahnoor/Linkedin.png"
                alt="LinkedIn"
                className="h-6 w-6"
              />
            </a>
            <a href="#" className="hover:opacity-80">
              <img
                src="/images-mahnoor/Youtube.png"
                alt="YouTube"
                className="h-6 w-6"
              />
            </a>
            <a href="#" className="hover:opacity-80">
              <img
                src="/images-mahnoor/Instagram.png"
                alt="Instagram"
                className="h-6 w-6"
              />
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-gray-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-gray-200"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-gray-200"
              >
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-bold text-purple-400 mb-4">
            Join a Newsletter
          </h3>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 w-full rounded-md text-black"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-md hover:opacity-90"
            >
              Get started
            </button>
          </form>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        <span className="text-purple-400">Snapcheck</span> © 2024, All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
