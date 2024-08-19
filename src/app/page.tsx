'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projectImages = [
  '/images/project1.jpg',
  '/images/project2.jpg',
  '/images/project3.jpg',
  '/images/project4.jpg',
];

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          data-aos="fade-down"
        >
          Welcome to My Portfolio
        </h1>
        <p 
          className="text-xl md:text-2xl mb-8 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          I&apos;m a passionate web developer creating modern and responsive websites.
        </p>
        <button 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          View My Work
        </button>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <h2 
          className="text-4xl font-bold text-center mb-12"
          data-aos="fade-up"
        >
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'GraphQL'].map((skill, index) => (
            <div 
              key={skill}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              data-aos="flip-left"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-semibold mb-2">{skill}</h3>
              <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gray-800">
        <h2 
          className="text-4xl font-bold text-center mb-12"
          data-aos="fade-up"
        >
          Recent Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projectImages.map((imgSrc, index) => (
            <div 
              key={imgSrc}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative w-full h-48">
                <Image 
                  src={imgSrc} 
                  alt={`Project ${index + 1}`} 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project {index + 1}</h3>
                <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" className="text-blue-400 hover:text-blue-300">Learn More &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <h2 
          className="text-4xl font-bold text-center mb-12"
          data-aos="fade-up"
        >
          Get In Touch
        </h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              data-aos="fade-right"
            />
          </div>
          <div className="mb-4">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              data-aos="fade-left"
            />
          </div>
          <div className="mb-4">
            <textarea 
              placeholder="Your Message" 
              rows={4}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              data-aos="fade-up"
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded transition duration-300"
            data-aos="zoom-in"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-gray-900">
        <p>&copy; 2023 Your Name. All rights reserved.</p>
      </footer>
    </main>
  );
}