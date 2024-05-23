import React from 'react';
import './Navbar.css';
import './Everything.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education-skills">Education & Skills</a></li>
        <li><a href="#experience-projects">Experience & Projects</a></li>
        <li><a href="#extracurriculars">Extracurriculars</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
