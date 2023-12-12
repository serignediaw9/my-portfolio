// Resume.js

import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume">
        <h1>Your Name</h1>
        <p className="subtitle">Web Developer</p>

        <div className="section-divider"></div>

        <section>
          <h2>Education</h2>
          <div className="education-item">
            <h3>University Name</h3>
            <p>Degree in Computer Science</p>
            <p>Graduated in 2022</p>
          </div>
        </section>

        <div className="section-divider"></div>

        <section>
          <h2>Work Experience</h2>
          <div className="work-item">
            <h3>Company Name</h3>
            <p>Web Developer</p>
            <p>June 2022 - Present</p>
            <p>Responsibilities and achievements...</p>
          </div>
        </section>

        {/* Add other sections as needed */}

      </div>
    </div>
  );
};

export default Resume;
