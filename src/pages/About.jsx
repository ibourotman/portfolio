import { motion } from 'framer-motion';
import profileImg from '../assets/Profile.jpg';

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white text-[#4B5563]"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-[#111827]">À Propos</h2>
          <p>
            Je suis un ingénieur logiciel . J'aime construire des choses, apprendre constamment et 
            améliorer mes compétences. J'ai travaillé sur plusieurs projets de développement web, de 
            développement de logiciels embarqués et d'ingénierie des données.
          </p>
          <ul className="space-y-2">
            <li><strong>Nom :</strong> Otman Ibbour</li>
            <li><strong>Email :</strong> otmanibour445@gmail.com</li>
            <li><strong>Téléphone :</strong> +33 7 73 02 20 08</li>
          </ul>
          <a
            href="https://www.linkedin.com/in/otman-ibbour-a80bbb220/"
            className="inline-block mt-4 px-6 py-2 bg-[#B1B493] text-white font-semibold rounded-lg hover:bg-grey-200 transition"
          >
            Me contacter
          </a>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <motion.div
            className="overflow-hidden rounded-2xl shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <img src={profileImg}  className="w-80 h-auto object-cover"/>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
