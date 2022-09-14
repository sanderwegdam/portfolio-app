/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Nav.css';

import { AiOutlineHome, AiOutlineUser, AiOutlineDown } from 'react-icons/ai';

import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#footer' onClick={() => setActiveNav('#footer')} className={activeNav === '#footer' ? 'active' : ''}><AiOutlineDown /></a>
    </nav>
  )
}

export default Nav