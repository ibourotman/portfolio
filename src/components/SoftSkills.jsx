import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const skills = [
  { name: "ESPRIT D'ÉQUIPE",      color: 'text-blue-400',   duration: 2.5 },
  { name: 'AUTONOMIE',            color: 'text-white',      duration: 3   },
  { name: 'ADAPTABILITÉ',         color: 'text-green-400',  duration: 2.8 },
  { name: "PRISE D'INITIATIVE",   color: 'text-orange-500', duration: 3.2 },
  { name: 'PROBLEM SOLVING',      color: 'text-purple-400', duration: 2.6 },
];

export default function SoftSkills() {
  const tracks = useRef([]);

  const addTrackRef = el => {
    if (el && !tracks.current.includes(el)) {
      tracks.current.push(el);
    }
  };

  useEffect(() => {
    tracks.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { x: -100 },
        {
          x: 100,
          ease: 'sine.inOut',
          duration: skills[i].duration,
          repeat: -1,
          yoyo: true
        }
      );
    });
  }, []);

  return (
    <section className="py-16 bg-black">
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        <h2 className="text-5xl md:text-7xl font-bold text-center text-gray-200">
          SOFT SKILLS
        </h2>
        {skills.map((skill, i) => {
          const looped = Array(10).fill(skill.name);
          const highlightIndex = 1;
          return (
            <div key={i} className="overflow-hidden whitespace-nowrap">
              <div
                ref={addTrackRef}
                className="inline-flex items-center"
              >
                {looped.map((word, j) => (
                  <React.Fragment key={j}>
                    <span
                      className={`font-bold text-4xl md:text-5xl uppercase ${
                        j === highlightIndex ? skill.color : 'text-gray-600'
                      }`}
                    >
                      {word}
                    </span>
                    {j < looped.length - 1 && (
                      <span className="text-gray-600 mx-2 font-bold text-4xl md:text-5xl">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
