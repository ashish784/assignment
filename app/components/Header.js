"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MenuIcon from "../assets/Menu.svg";
import { MdClose } from 'react-icons/md';
import Logo from "../assets/logo (1).png";

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About Me', href: '#about' },
  { name: 'Services', href: '#service' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={`mx-auto bg-white shadow-md py-4 px-8 w-full ${isSticky ? 'fixed top-0 left-0 w-full z-50' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src={Logo} alt="logo" className="w-auto" />
        </Link>
        <nav className="hidden lg:flex space-x-6 ml-10">
          {navLinks.map((item, index) => (
            <Link href={item.href} key={index} className="text-gray-600 hover:text-black">
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-5 lg:hidden" onClick={handleMenuToggle}>
          {isMenuOpen ? (
            <MdClose size={24} className="cursor-pointer text-gray-600" />
          ) : (
            <Image src={MenuIcon} alt="Menu Button" width={24} height={24} className="cursor-pointer" />
          )}
        </div>
        <div className="hidden lg:flex">
          <a href="#" className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600">
            Download CV
          </a>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out">
          <div className="absolute top-5 left-5">
            <MdClose size={24} className="cursor-pointer text-gray-600" onClick={handleMenuToggle} />
          </div>
          <nav className="flex flex-col items-center gap-6 mt-10">
            {navLinks.map((item, index) => (
              <Link href={item.href} key={index} className="text-gray-600 font-medium text-xl cursor-pointer hover:underline" onClick={handleMenuToggle}>

                {item.name}

              </Link>
            ))}
          </nav>
          <a href="#" className="mt-8 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600">
            Download CV
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
