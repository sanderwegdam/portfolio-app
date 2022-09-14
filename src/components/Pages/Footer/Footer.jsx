import React from 'react';
import './Footer.css';

import { FiExternalLink } from 'react-icons/fi';
import { AiOutlineLink } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="social_media">
        <a href="http://sanderwegdam.rf.gd" target="_blank" rel="noreferrer"><FiExternalLink /></a>
        <a href="http://wegdam-media.rf.gd" target="_blank" rel="noreferrer"><AiOutlineLink /></a>
      </div>
    </footer>
  )
}

export default Footer