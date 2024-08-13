"use client";
import { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show success message
      console.log("clicked")
    setSubmitted(true);

    // Hide success message after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="my-16 px-4">
      <h2 className="text-4xl font-bold text-center">Let's Design Together</h2>
      <p className="text-center text-gray-500 mt-4">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
      </p>
      <form onSubmit={handleSubmit} className="mt-8 flex justify-center gap-x-2">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="px-4 py-2 border-2 rounded-[8px] w-80 focus:outline-none bg-gray-100"
          required
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-2 rounded-[8px] hover:bg-white hover:text-[#FD6F00] hover:border-[#FD6F00] hover:border-[1px]"
        >
          Contact Me
        </button>
      </form>
      {submitted && (
        <div className="fixed bottom-0 right-0 m-4 p-4 bg-green-100 text-green-800 rounded-md shadow-md w-30">
          Submitted Successfully
        </div>
      )}
    </section>
  );
};

export default Contact;
