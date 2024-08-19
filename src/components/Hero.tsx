import { Parallax } from 'react-parallax';
import ReactTypingEffect from 'react-typing-effect';

export default function Hero() {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage="/images/hero-bg.jpg"
      bgImageAlt="Hero Background"
      strength={-200}
    >
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          data-aos="fade-down"
        >
          Welcome to My Portfolio
        </h1>
        <ReactTypingEffect 
          text={["I'm a Web Developer", "I'm a Designer", "I'm a Problem Solver"]}
          className="text-xl md:text-2xl mb-8"
          speed={100}
          eraseSpeed={100}
          typingDelay={500}
          eraseDelay={2000}
        />
        <p 
          className="text-xl md:text-2xl mb-8 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          I&apos;m passionate about creating modern and responsive websites.
        </p>
        <button 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          View My Work
        </button>
      </section>
    </Parallax>
  );
}