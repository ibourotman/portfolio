import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const links = [
  { name: 'ACCUEIL',    to: 'home' },
  { name: 'À PROPOS',   to: 'about' },
  { name: 'CV',         to: 'education' },
  { name: 'COMPÉTENCES',to: 'skills' },
  { name: 'PROJETS',    to: 'projects' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed w-full top-0 z-50 transition-colors duration-300
        ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}
      `}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="hidden md:flex mx-auto space-x-8">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              spy
              offset={-80}
              activeClass="text-[#B1B493] underline"
              className={`
                uppercase tracking-wider cursor-pointer transition
                ${isScrolled
                  ? 'text-gray-800 hover:text-[#B1B493]'
                  : 'text-white hover:text-[#B1B493]'}
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(true)}
        >
          <HiOutlineMenu className={isScrolled ? 'text-gray-800' : 'text-white'} />
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex flex-col">
          <div className="flex justify-end p-6">
            <button onClick={() => setMenuOpen(false)} className="text-3xl text-white">
              <HiOutlineX />
            </button>
          </div>
          <div className="flex-grow flex flex-col items-center justify-center space-y-8">
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={500}
                spy
                offset={-80}
                onClick={() => setMenuOpen(false)}
                className="text-white text-2xl uppercase tracking-wider cursor-pointer hover:text-[#B1B493] transition"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
