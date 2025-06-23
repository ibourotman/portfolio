const experience = [
  {
    title: 'Stagiaire Ingénieur Logiciel – Dassault Systèmes',
    period: 'Mars 2025 – Présent',
    location: 'Vélizy-Villacoublay, France',
    bullets: [
      "Développement d’un assistant AI capable d’interagir avec le contenu des Team Boards de 3DLean.",
      "Mise en place d’un système dynamique de détection de zones, permettant de taguer automatiquement les notes en fonction de leur position sur des templates intelligents.",
      "Outils : LLM (Mistral, LLaMA), Python, RAG, Marionette.js, Backbone.js, TypeScript/JavaScript, Java, WebSocket, REST API, SQL, Docker, HTML, CSS, Git."
    ]
  },
  {
    title: 'Stagiaire Développeur – e-whiz',
    period: 'Avril 2024 – Août 2024',
    location: 'Toulouse, France',
    bullets: [
      "Développement d’un système de géolocalisation basé sur le principe du TDOA (Time Difference of Arrival).",
      "Outils : cartes NRF52840, DW3000, C/C++, Python.",
      "Développement d’une application mobile de tableau de bord pour la visualisation et le traitement des données.",
      "Outils : React Native, Firebase, TypeScript."
    ]
  },
  {
    title: 'Stagiaire Développeur – OCP',
    period: 'Juillet 2022 – Septembre 2022',
    location: 'Khouribga, Maroc',
    bullets: [
      "Développement d'une application de bureau pour la gestion des stocks du groupe OCP.",
      "Outils : Java, Swing, XML, MySQL, phpMyAdmin, Launch4j, Inno Setup.",
      "Conception respectant les principes POO, avec une structure dynamique basée sur des fichiers XML."
    ]
  }
];

const education = [
  {
    degree:
      "Cycle d'ingénieur – Ingénierie et Sciences des données, Information, Systèmes",
    period: '2023 – 2025',
    institution: 'Seatech, Toulon, France'
  },
  {
    degree:
      "Cycle d'ingénieur – Systèmes Intelligents, Communicants et Mobiles",
    period: '2021 – 2023',
    institution: 'Faculté des Sciences Techniques, Fès, Maroc'
  },
  {
    degree:
      "Diplôme d'études universitaires en Sciences et Techniques",
    period: '2019 – 2021',
    institution: 'Faculté des Sciences Techniques, Fès, Maroc'
  }
];

export default function CV() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <section id="experience" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold uppercase mb-8 text-center">Expérience</h2>
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-gray-500 mt-1">{exp.location} | {exp.period}</p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold uppercase mb-8 text-center">Éducation</h2>
          <div className="space-y-8">
            {education.map((edu, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold">{edu.institution}</h3>
                <p className="text-gray-500 mt-1">{edu.period}</p>
                <p className="mt-2 text-gray-700">{edu.degree}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
