import React from "react";

const Services = () => {
  return (
    <section id="service" className="py-16 px-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
        <p className="text-center mb-12 text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* UI/UX Design */}
          <div className="bg-white p-6 rounded-lg shadow-sm text-left hover:shadow-lg transition-shadow flex flex-col items-start">
            <div className="text-orange-500 mb-4">
              <svg
                className="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >

                <path
                  d="M4 4h16v2H4zm0 4h10v2H4zm0 4h8v2H4zm0 4h10v2H4zm12 0h4v2h-4zm0-4h8v2h-8zm0-4h6v2h-6z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">UI/UX</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.
            </p>
          </div>

          {/* Web Design */}
          <div className="bg-white p-6 border-2 border-orange-500 rounded-lg shadow-sm text-left hover:shadow-lg transition-shadow flex flex-col items-start">
            <div className="text-orange-500 mb-4">
              <svg
                className="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >

                <path
                  d="M3 3h18v2H3zm0 4h14v2H3zm0 4h10v2H3zm0 4h12v2H3zm0 4h14v2H3zm16 0h2v2h-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Web Design</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.
            </p>
          </div>

          {/* App Design */}
          <div className="bg-white p-6 rounded-lg shadow-sm text-left hover:shadow-lg transition-shadow flex flex-col items-start">
            <div className="text-orange-500 mb-4">
              <svg
                className="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >

                <path
                  d="M6 6h12v12H6zM9 9h6v6H9z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">App Design</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.
            </p>
          </div>

          {/* Graphic Design */}
          <div className="bg-white p-6 rounded-lg shadow-sm text-left hover:shadow-lg transition-shadow flex flex-col items-start">
            <div className="text-orange-500 mb-4">
              <svg
                className="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >

                <path
                  d="M12 2L2 7l10 5 10-5zM2 7v10l10 5 10-5V7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
