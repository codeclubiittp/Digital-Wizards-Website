import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, ChevronUpIcon,ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDomainsOptions, setShowDomainsOptions] = useState(false);

  const domains = [
    { to: '/domain/app-development', text: 'App Development' },
    { to: '/domain/architecture', text: 'Architecture' },
    { to: '/domain/competitive-programming', text: 'Competitive Programming' },
    { to: '/domain/cyber-security', text: 'Cyber Security' },
    { to: '/domain/software-engineering', text: 'Software Engineering' },
    { to: '/domain/web-development', text: 'Web Development' },
  ];

  const DomainLink = ({ to, text, onClick }) => (
    <Link
      to={to}
      onClick={onClick}
      className="block hover:text-gray-400"
    >
      <ChevronRightIcon className="h-5 w-5 inline-block mr-1" />
      <span>{text}</span>
    </Link>
  );

  const handleLinkClick = () => {
    setShowDomainsOptions(false);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 
        ${
        isScrolled ? "bg-black/70" : "bg-transparent"
      } 
      text-white`}
    >

      {/* Laptop Menu */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div >
        <Link to="/" className="hover:text-gray-400 transition">
          <img
            src="/images/domainLogos/DW_darkmode.png"
            alt="Logo"
            className="h-24 w-auto"
          />
          </Link>
        </div>

        {/*Hamburger Menu Button */}
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
        <div className={`hidden md:flex items-center space-x-8 `}>
          <div className={`bg-transparent p-6 rounded-lg hover:bg-gray-400/20`}>
            <Link to="/" className="hover:text-gray-400 text-xl cursor-pointer transition">
            Home
          </Link></div>
          
          
          <div className="relative bg-transparent p-6 rounded-lg hover:bg-gray-400/20">
        {/* Domains Button */}
        <div
          onClick={() => setShowDomainsOptions(!showDomainsOptions)}
          className="block text-lg hover:text-gray-400 cursor-pointer flex items-center space-x-2"
        >
          <span>Domains</span>
          {showDomainsOptions ? (
            <ChevronUpIcon className="h-5 w-5 inline-block" />
          ) : (
            <ChevronDownIcon className="h-5 w-5 inline-block" />
          )}
        </div>

        {/* Dropdown Menu */}
        {showDomainsOptions && (
          <div className="absolute left-0 mt-2 bg-gray-700 rounded-lg p-3 space-y-2 w-72">
            {domains.map(({ to, text }) => (
              <DomainLink
                key={to}
                to={to}
                text={text}
                onClick={handleLinkClick}
              />
            ))}
          </div>
        )}
      </div>
          <div className={`bg-transparent p-6 rounded-lg hover:bg-gray-400/20`}>
            <Link to="/contact" className="hover:text-gray-400 text-lg transition">
            Team
          </Link></div>
          
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white transform ${
          isMenuOpen ? "translate-x-8" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
          <Link to="/" className="hover:text-gray-400 transition">
            <img
              src="/images/domainLogos/DW_darkmode.png" // Adjust your logo path
              alt="Logo"
              className="h-12 w-auto"
            />
          </Link>
          <button onClick={() => setIsMenuOpen(false)} className="text-white">
            <XMarkIcon className="h-8 w-8 -translate-x-8" />
          </button>
        </div>
        <div className="mt-8 space-y-6 px-4">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg hover:text-gray-400"
          >
            Home
          </Link>

          <div
            onClick={() => setShowDomainsOptions(!showDomainsOptions)}
            className="block text-lg hover:text-gray-400 cursor-pointer flex items-center space-x-2"
          >
            <span>Domains</span>
            {showDomainsOptions ? (
              <ChevronUpIcon className="h-5 w-5 inline-block" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 inline-block" />
            )}
          </div>

          {/* Dropdown Menu */}
          {showDomainsOptions && (
            <div className="mt-2 bg-gray-700 rounded-lg p-3 space-y-2">
              {domains.map(({ to, text }) => (
                <DomainLink
                  key={to}
                  to={to}
                  text={text}
                  onClick={handleLinkClick}
                />
              ))}
            </div>
          )}
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg hover:text-gray-400"
          >
            Team
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
