import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaGithub, FaPlayCircle } from 'react-icons/fa';
import pacman    from '../assets/projects/pacman.png';
import swaglords    from '../assets/projects/swaglords.png';
import realtchat    from '../assets/projects/site3.png';
import site1    from '../assets/projects/site.png';
import site2    from '../assets/projects/site1.png';
import chatbot    from '../assets/projects/chatbot.png';   
import Springboot    from '../assets/projects/springBoot.png';   
import FocusSquad    from '../assets/projects/focussquad.png';   
const projects = [
  {
    title: 'Pacman C++ && MFC',
    imageUrl: pacman ,
    github:    'https://github.com/ibourotman/PacMan_Game',
    website:   'https://drive.google.com/file/d/1cUkKUwZUbh48yRiwScEZytPcmGrb9t-V/view?usp=sharing '
  },
  {
    title: 'Swaglords of Space C++ && SFML',
    imageUrl: swaglords,
    github:    'https://github.com/ibourotman/Swaglords-of-Space-with-c-ssfml',
    website:   'https://drive.google.com/file/d/1Nqy9nf3kiRV8ptyZUzD0-iOaN6p2rMmD/view?usp=sharing'
  },
  {
    title: 'RealTime Chat Node.js && HTML && CSS && Socket.io',
    imageUrl: realtchat,
    github:    'https://github.com/ibourotman/RealTime-Chat',
    website:   '#'
  },
    {
    title: 'store(freelance) WordPress && JavaScript && HTML && CSS',
    imageUrl: site1,
    github:    '#',
    website:   'https://canbusadblue.com/'
  },
{
    title: 'store (FreshShop) Angular && Django',
    imageUrl: site2,
    github:    'https://github.com/ibourotman/FreshShop_Project',
    website:   'https://drive.google.com/file/d/10MtN3RPPRQSgYTUmDZzpqsL8vQSN2v5-/view?usp=drive_link'
  },
  {
    title: 'FocusSquad Vuejs && nodejs',
    imageUrl: FocusSquad,
    github:    'https://github.com/ibourotman/pomodoro-for-a-team',
    website:   'https://drive.google.com/file/d/1zCFpDxYnmN0e5keum34uUvoXDdw45EfZ/view?usp=sharing'
  },
  {
    title: 'Chatbot RAG && Langchain && Chromadb && Python',
    imageUrl: chatbot,
    github:    'https://github.com/ibourotman/chatbot',
    website:   'https://drive.google.com/file/d/1LAl0RmAke_6dxlRI2gcw_1cDDj957v0O/view?usp=sharing'
  },
    {
    title: 'Store api (SpringBoot)',
    imageUrl: Springboot,
    github:    'https://github.com/ibourotman/store-api-with-sprintboot/tree/main/src/main/java/com/ApiStore/ApiStore',
    website:   '#'
  },
 
];

function ProjectCard({ project }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateY = useTransform(x, [-100, 100], [15, -15]);
  const rotateX = useTransform(y, [-100, 100], [-15, 15]);

  function handleMouse(e) {
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top  + rect.height/ 2));
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className="group relative h-64 md:h-72 rounded-xl overflow-hidden shadow-lg cursor-pointer"
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${project.imageUrl})` }}
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition" />

      <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white z-10">
        {project.title}
      </h3>

      <div className="absolute top-4 right-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition z-10">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-200"
        >
          <FaGithub size={20} />
        </a>

        {project.website && project.website !== '#' && (
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200"
          >
            <FaPlayCircle size={20} />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Mes Projets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} project={proj} />
          ))}
        </div>
      </div>
    </section>
  );
}
