import jsIcon       from '../assets/icons/js.jpg';
import htmlIcon     from '../assets/icons/html.jpg';
import cssIcon      from '../assets/icons/css.jpg';
import reactIcon    from '../assets/icons/react.png';
import reactNIcon    from '../assets/icons/reactn.png';
import nodeIcon     from '../assets/icons/ns.png';
import angularIcon  from '../assets/icons/angular.png';
import gitIcon      from '../assets/icons/git.png';
import mongoIcon    from '../assets/icons/mg.png';
import cIcon    from '../assets/icons/c.png';
import cpIcon    from '../assets/icons/c++.jpg';
import pythonIcon    from '../assets/icons/py.png';
import githubIcon    from '../assets/icons/github.jpg';
import javaIcon    from '../assets/icons/java.jpg';
import matplotlibIcon    from '../assets/icons/math1.png';
import numpyIcon    from '../assets/icons/np.png';
import pandasIcon    from '../assets/icons/pd.jpg';
import qtIcon    from '../assets/icons/qt.png';
import sqlIcon    from '../assets/icons/sql.png';
import springIcon    from '../assets/icons/spring.png';


const skills = [
  { name: 'C',             icon: cIcon },
  { name: 'C++',           icon: cpIcon },
  { name: 'JavaScript',    icon: jsIcon },
  { name: 'Python',        icon: pythonIcon },
  { name: 'SQL',           icon: sqlIcon },
  { name: 'MongoDB',       icon: mongoIcon },
  { name: 'Node.js',       icon: nodeIcon },
  { name: 'Spring Boot',   icon: springIcon},
  { name: 'Angular',       icon: angularIcon },
  { name: 'React',         icon: reactIcon },
  { name: 'React Native',  icon: reactNIcon },
  { name: 'Java',          icon: javaIcon },
  { name: 'HTML',          icon: htmlIcon },
  { name: 'CSS',           icon: cssIcon },
  { name: 'Git',           icon: gitIcon },
  { name: 'GitHub',        icon: githubIcon },
  { name: 'NumPy',         icon: numpyIcon },
  { name: 'Pandas',        icon: pandasIcon },
  { name: 'Matplotlib',    icon: matplotlibIcon },
  { name: 'Qt',            icon: qtIcon },
];


export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Compétences</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow hover:shadow-xl transition p-6 flex flex-col items-center"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-20 h-20 object-contain mb-4"
              />
              <span className="mt-auto text-sm font-medium text-gray-700 uppercase">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
