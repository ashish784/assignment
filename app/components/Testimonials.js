import React from "react";
import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Image1 from "../assets/Ellipse 10.png";
import Image2 from "../assets/Ellipse 11.png";


const testimonials = [
  {
    name: "Name",
    position: "CEO",
    image: Image1, 
    text: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
  },
  {
    name: "Jane Smith",
    position: "CTO",
    image: Image2, 
    text: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium.
        </p>

        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
            <div className="flex items-center mb-6 space-x-6">
              <div className="w-24 h-24">
                <Image
                  src={testimonials[0].image}
                  alt={testimonials[0].name}
                  width={96}
                  height={96}
                  className="rounded-full"
                />
              </div>
              <div className="flex-1 text-left">
                <p className="text-gray-600 mb-4">
                  <FaQuoteLeft className="inline-block text-orange-500 mr-2" />
                  {testimonials[0].text}
                  <FaQuoteRight className="inline-block text-orange-500 ml-2" />
                </p>
                <p className="text-lg font-semibold">{testimonials[0].name}</p>
                <p className="text-gray-500">{testimonials[0].position}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full ${index === 0 ? 'bg-orange-500' : 'bg-gray-300'}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
