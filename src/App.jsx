import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import CV from './pages/CV';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import SoftSkills from './components/SoftSkills';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="">
        <Home />
        <About />
        <CV/>
        <Skills />
        <SoftSkills />
        <Projects />
      </main>
    </Router>
  );

}

export default App;
