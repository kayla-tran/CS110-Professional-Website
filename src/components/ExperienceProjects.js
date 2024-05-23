import React from 'react';
import './ExperienceProjects.css';
import './Everything.css';

function ExperienceProjects() {
  return (
    <section id="experience-projects" className="experience-projects">
      <h2>Experience & Projects</h2>
      <ol className="left"><strong>College of Natural and Agricultural Sciences Transition Peer Mentor (2022 - Current)</strong>
      <ul className="left">
        <li>Guided fellow students through the transfer process from 
            CNAS to the Bourns College of Engineering </li>
        <li>Leveraged personal experiences to mentor and support peers 
            facing the strict requirements and challenges of transferring into 
            the engineering college </li>
        <li>Developed mentoring and leadership skills to support peers </li>
      </ul>
      </ol>
      <ol className="left"><strong>Personal Network Lab Testing (2019 - Current)</strong>
      <ul className="left">
        <li>Built network using VMware Workstation</li>
        <li>Created a Microsoft server VM running AD, DNS</li>
        <li>Harden VM Windows clients in accordance to DoD STIG</li>
        <li>Validate Windows security with DoD SCAP application</li>
      </ul>
      </ol>
      <ol className="left"><strong>Naval Research Enterprise Internship Program (2023)</strong>
      <ul className="left">
        <li>Engaged in a 13-week paid internship with the Department of Defense (DoD), contributing to the "Game of Drones" project.</li>
        <li>Collaborated within a team to design, prototype, and construct a fully functional 3D-printed turret, showcasing innovation and problem-solving abilities.</li>
        <li>Took part in teaching workshops, introducing individuals to a scaled-down version of electronic warfare (EW), highlighting a commitment to knowledge sharing and teamwork.</li>
      </ul>
      </ol>
      <ol className="left"><strong>Rose Hack (2022)</strong>
      <ul className="left">
        <li>Created an interactive website documenting reading history in conjunction with a group of three other members</li>
        <li>Gained extra experience in front-end developing</li>
        <li>Won Best Domain Name</li>
      </ul>
      </ol>
      <ol className="left"><strong>Naval Research Enterprise Internship Program (2021)</strong>
      <ul className="left">
        <li>Researched and analyzed the impact and effect of aqueous film forming foams (AFFFs) and potential replacements</li>
        <li>Presented about AFFFs and relevant topics to multiple higher level employees</li>
      </ul>
      </ol>
      <ol className="left"><strong>Awards & Certifications(2023)</strong>
      <ul className="left">
        <li>SMART Scholarship</li>
        <li>Red Cross Lifeguard Certification</li>
        <li>Clearance</li>
      </ul>
      </ol>
    </section>
  );
}

export default ExperienceProjects;
