import React from 'react';
import Image from 'next/image';
import Profile from '../assets/Group 2.png';

const HeroSection = () => {
  return (
    <section className="bg-white py-20 px-8 mt-1">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0 mt-5">
          <h1 className="text-xl font-bold ">Hi I am</h1>
          <h2 className="text-4xl font-bold text-orange-500 mt-2">Muhammad Umair</h2>
          <h3 className="text-5xl font-bold mt-2">UI & UX Designer</h3>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
            Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
          </p>
          <button className="mt-6 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600">
            Hire Me
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center items-center relative">
          <div className="container w-72 h-80 md:w-80 md:h-96 flex justify-center items-center ml-3">
              <div className="container w-full h-full">
                <Image 
                  src={Profile} 
                alt="Profile Picture"
                />
            </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default HeroSection;
