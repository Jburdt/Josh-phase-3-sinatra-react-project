import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from 'react';

const NavBar = () => {

  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classlist.toggle('responsive_nav');
  }

  return (
    <header>
      <h3>Logo</h3>
      <nav>
          <a href={navRef}>Home</a>
          <a href='/#'>Tools</a>
          <a href='/#'>Contractors</a>
          <a href='/#'>Rented</a>
          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes/>
          </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  )
}

export default NavBar;