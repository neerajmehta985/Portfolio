import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Achievements', path: '/achievement' },

  { name: 'Contact', path: '/contact' },

  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-gray-900 shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <div className="text-xl font-bold text-pink-500">MyPortfolio</div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {navLinks.map(({ name, path }) => (
            <li key={path}>
              <Link
                to={path}
                className={`hover:text-pink-400 transition ${
                  isActive(path) ? 'text-pink-400' : ''
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden px-6 pb-4 text-white transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <ul className="space-y-4 pt-4">
          {navLinks.map(({ name, path }) => (
            <li key={path}>
              <Link
                to={path}
                onClick={() => setIsOpen(false)}
                className={`block hover:text-pink-400 transition ${
                  isActive(path) ? 'text-pink-400' : ''
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
