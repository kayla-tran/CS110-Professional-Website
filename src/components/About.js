import React from 'react';
import './About.css';
import './Everything.css';

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        I once was a Biology major who found a deep interest in computer engineering so I switched! 
        My main interests lie in <br></br>embedded systems, IT, and cybersecurity. I will have a job in IT
        once I finish my academic studies and I plan on learning on<br></br> lot while at that job. My main 
        career goal is to find what truly interests me so I can enjoy what I do while working. 
        </p>
        <p>Please click 'Resume' below to check out my resume!<br></br> <a href="/Tran_Resume_Masters.pdf" target="_blank" rel="noopener noreferrer">Resume</a> </p>
    </section>
  );
}

export default About;
