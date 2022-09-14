/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Navbar.css";
import { useState } from 'react'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <div className="nav-header">
      <a href="#" className={activeNav === '#' ? 'site-title' : ''} onChange={() => setActiveNav('#')} >
        Welkom
      </a>
    </div>
  )
}

export default Navbar;

