import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Copyright */}
        <p className="text-sm">© {new Date().getFullYear()} News App. All rights reserved.</p>

        {/* Right Section - Navigation Links */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/privacy" className="hover:text-gray-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-gray-300">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
