// src/components/Navbar.js

import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`Navbar ${scrolling ? "scrolling" : ""}`}>
      <div className="logo">
        <span>serigne diaw.</span>
      </div>
      <div className="desktopMenu">
        <RouterLink to="/" className="desktopMenuListItem">
          Work
        </RouterLink>
        <RouterLink to="/about" className="desktopMenuListItem">
          About
        </RouterLink>
        <RouterLink to="/resume" className="desktopMenuListItem">
          Resume
        </RouterLink>
      </div>
    </nav>
  );
}
