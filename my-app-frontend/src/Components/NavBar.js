import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  return (
    <header>
      <h3>Logo</h3>
      <nav>
          <a href='/#'>Home</a>
          <a href='/#'>Tools</a>
          <a href='/#'>Contractors</a>
          <a href='/#'>Rented</a>
          <button>
            <FaTimes/>
          </button>
      </nav>
      <button>
        <FaBars />
      </button>
    </header>
  )
}

export default NavBar