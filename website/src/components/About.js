import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        I once was a Biology major who found a deep interest in computer engineering so I switched! 
        My main interests lie in embedded systems, IT, and cybersecurity. I will have a job in IT
        once I finish my academic studies and I plan on learning on lot while at that job. My main 
        career goal is to find what truly interests me so I can enjoy what I do while working. Please
        click 'Resume' below to check out my resume!
      </p>
      <a href="/Tran_Resume_Masters.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
    </section>
  );
}

export default About;
