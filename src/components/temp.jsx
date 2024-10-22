import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
        isScrolled ? "bg-gray-800" : "bg-transparent"
      } text-white p-4`}
    >
      <div className="flex justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="inline-block ">
          <img
            src="/images/domainLogos/DW_darkmode.png" // Replace with your actual logo path
            alt="Logo"
            className="h-24 w-auto"
          />
        </div>

        {/* Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>

        {/* Menu Items */}
        <div className={`md:flex items-center space-x-8 `}>
          <Link to="#home" className="hover:text-gray-400 transition">
            Home
          </Link>
          <Link to="#about" className="hover:text-gray-400 transition">
            About
          </Link>
          <Link to="#contact" className="hover:text-gray-400 transition">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed md:hidden top-0 right-0 h-full w-64 bg-gray-800 text-white transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-20`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
          <img
            src="/images/domainLogos/DW_darkmode.png" // Adjust your logo path
            alt="Logo"
            className="h-12 w-auto"
          />
          <button onClick={() => setIsMenuOpen(false)} className="text-white">
            <XMarkIcon className="h-8 w-8" />
          </button>
        </div>
        <div className="mt-8 space-y-6 px-4">
          <Link
            to="#home"
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg hover:text-gray-400"
          >
            Home
          </Link>
          <Link
            to="#about"
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg hover:text-gray-400"
          >
            About
          </Link>
          <Link
            to="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg hover:text-gray-400"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
