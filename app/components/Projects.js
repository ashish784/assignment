"use client";
import React,{useState} from 'react';
import Image from 'next/image';
import Image1 from '../assets/Group 24.png';
import Image2 from "../assets/Group 26.png";
import Image3 from "../assets/Group 27.png";
import Image4 from "../assets/ui-ux.jpg";
import Image5 from "../assets/app-desin.jpg";
import Image6 from '../assets/graphic.jpg';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('Web Design');

  const categories = ['All', 'UI/UX', 'Web Design', 'App Design', 'Graphic Design'];

  const projects = [
    {
      title: 'AirCalling Landing Page Design',
      category: 'Web Design',
      image: Image1,
    },
    {
      title: 'Business Landing Page Design',
      category: 'Web Design',
      image: Image2,
    },
    {
      title: 'Ecom Web Page Design',
      category: 'Web Design',
      image: Image3,
    },
    {
        title: 'UI/UX Design',
        category: 'UI/UX',
        image: Image4,
      },
      {
        title: 'Mobile App Design',
        category: 'App Design',
        image: Image5,
      },
      {
        title: 'Web Graphic Design',
        category: 'Graphic Design',
        image: Image6,
    },
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-16 container mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <p className="text-center mb-12 text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus.
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full ${selectedCategory === category ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden hover:border-indigo-600 transition-all">
              <Image src={project.image} alt={project.title} layout="responsive" width={500} height={300} className="w-full h-auto" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
