import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig from '../particles-config';
import bgImage from '../assets/img.jpg';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  const particlesInit = async engine => {
    await loadFull(engine);
  };

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0 z-20"
      />

      <div className="relative z-30 text-center px-4">
        <p className="text-white mb-2">Bonjour ! C'est Otman</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Je suis{' '}
          <span className="text-[#B1B493]">
            <Typewriter
              words={[
                'Développeur Full Stack.',
                'à la recherche d’un CDI.'
              ]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={0}
              delaySpeed={2000}
            />
          </span>
        </h1>

        <a
          href="https://www.linkedin.com/in/otman-ibbour-a80bbb220/"
          className="mt-8 inline-block py-3 px-6 bg-[#B1B493] text-black font-semibold rounded-lg hover:bg-grey-200 transition"
        >
          Engagez-moi
        </a>
      </div>
    </section>
  );
}
