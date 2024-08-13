import React from 'react';
import Profile from "../assets/Group 7.png";
import Image from 'next/image';

const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex justify-center">
          <Image src={Profile} alt="About Me" className=""/>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 md:pl-12">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. 
            Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
          </p>
          <div className="mt-8 space-y-8">
            {[
              { skill: 'UX', percentage: '85%' },
              { skill: 'Website Design', percentage: '75%' },
              { skill: 'App Design', percentage: '65%' },
              { skill: 'Graphic Design', percentage: '90%' },
            ].map((item, index) => (
              <div key={index} className="w-full">
                <span className="font-bold">{item.skill}</span>
                <div className="relative w-full bg-gray-300 h-2 rounded-md mt-1">
                  <div className="bg-orange-500 h-2 rounded-md" style={{ width: item.percentage }}></div>
                  <div
                    className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-[#EDECEC] border-2 border-orange-500 rounded-full"
                    style={{ left: `calc(${item.percentage} - 12px)` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
