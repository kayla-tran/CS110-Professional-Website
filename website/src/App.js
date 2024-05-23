import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EducationSkills from './components/EducationSkills';
import ExperienceProjects from './components/ExperienceProjects';
import Extracurriculars from './components/Extracurriculars';
import Footer from './components/Footer';
import MonsteraPlant from './components/MonsteraPlant';
import './components/Everything.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <hr className="horizontal-line" />
      <EducationSkills />
      <hr className="horizontal-line" />
      <ExperienceProjects />
      <hr className="horizontal-line" />
      <Extracurriculars />
      <hr className="horizontal-line" />
      <MonsteraPlant /> {}
      <Footer />
    </div>
  );
}

export default App;
