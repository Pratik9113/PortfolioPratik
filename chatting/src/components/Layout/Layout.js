import React, { useRef } from 'react';
import './Layout.css';
import { useTheme } from '../../context/ThemeContent.js';
import { FaBars, FaTimes } from 'react-icons/fa/index.js';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs/index.js';
import {  Link } from 'react-router-dom';
const Layout = () => {
  const [theme, setTheme] = useTheme();
  const navRef = useRef();
  const handleTheme = () => {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
  };
  const showNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
      console.log("Navbar toggled");
    } else {
      console.log("navRef is null");
    }
  };

  const handleLinkClick = () => {
    showNavbar();
  };
  return (
    <>
      <header>
        <h5>Pratik Patil</h5>
        <nav ref={navRef}>
          <li><Link onClick={handleLinkClick} to="/about">About</Link></li>
          <li><Link onClick={handleLinkClick} to="/education">Education</Link></li>
          <li><Link onClick={handleLinkClick} to="/tech">Tech Stack</Link></li>
          <li><Link onClick={handleLinkClick} to="/experience">Experience</Link></li>
          <li><Link onClick={handleLinkClick} to="/project">Project</Link></li>
          <li><Link onClick={handleLinkClick} to="/contact">Contact</Link></li>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
        <div className='theme-btn' onClick={handleTheme}>
          {theme === 'light' ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
        </div>
      </header>
    </>
  );
};
export default Layout;