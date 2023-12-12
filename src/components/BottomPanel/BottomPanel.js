// BottomPanel.js

import React from 'react';
import "./BottomPanel.css";
import { FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";

const BottomPanel = () => {
  return (
    <div className="bottomPanel">
      <div className="socialLinks">
        <a href="https://www.linkedin.com/in/serigne-diaw-11291b173/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={{ fontSize: '4.5rem', color: '#0077B5', }}/>
        </a>
        <a href="mailto:smdiaw@ucdavis.edu">
          <IoMdMail size={80} />
        </a>
      </div>
    </div>
  );
};

export default BottomPanel;
