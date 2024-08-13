import React from "react";
import Image from "next/image";
import logo from "../assets/logo (1).png";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Me', href: '#about' },
    { name: 'Services', href: '#service' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <footer className="bg-[#F8F8F8] text-black py-10 w-full">
      <div className="container mx-auto text-center">
        <Image src={logo} alt="Logo" className="mx-auto mb-4 w-auto" />
        <ul className="flex flex-col justify-center sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 mb-8">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link href={item.href} legacyBehavior>
                <a className="hover:text-orange-500">{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="hover:text-orange-500">
            <FaFacebookF size={28} />
          </a>
          <a href="#" className="hover:text-orange-500">
            <FaTwitter size={28} />
          </a>
          <a href="#" className="hover:text-orange-500">
            <FaInstagram size={28} />
          </a>
          <a href="#" className="hover:text-orange-500">
            <FaLinkedinIn size={28} />
          </a>
        </div>
      </div>
      <div className="bg-[#545454] text-center w-full mb-[-40px]">
        <p className="text-sm text-white py-3">
          © 2023 <span className="text-[#FD6F00]">Mumair</span> All Rights Reserved, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
