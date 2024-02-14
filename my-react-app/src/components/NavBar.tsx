import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NavBarStyles.css";

// import React from 'react';

const NavBar = () => {
  // state of the menu
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

//   to change the color as we scroll on the main page
const [color, setColor] = useState(false);
const changeColor = () => {
    if (window.scrollY >= 100) { //if we scroll as we go the top, a black background appears
        setColor(true)
    }else { // if we scroll down, the black color disappears.
        setColor(false);
    }
};
window.addEventListener("scroll", changeColor)

  return (
    <div className={color ? "header header-bg" : "header"}>
        {/* this is how we browse to ther pages in the website. */}
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
