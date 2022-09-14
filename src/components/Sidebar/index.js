/* eslint-disable jsx-a11y/anchor-is-valid */
import './index.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faEnvelope,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  const [activeNav, setActiveNav] = useState('#');

  return (
    <div className="nav-bar">
      <div id="nav" className={showNav ? 'mobile-show' : ''}>

        <a href="#" className={activeNav === '#' ? 'active' : ''}
          onChange={() => setActiveNav('#')}
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#c7c7c7" />
        </a>

        <a href="#about" className={activeNav === '#about' ? 'active' : ''}
          onChange={() => setActiveNav('#about')}
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#c7c7c7" />
        </a>

        <a href="#footer" className={activeNav === '#footer' ? 'active' : ''}
          onChange={() => setActiveNav('#footer')}
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faEnvelope} color="#c7c7c7" />
        </a>

        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#fff"
          size="2x"
          className='close-icon' />
      </div>
      <ul>

      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#fff"
        size="2x"
        className='hamburger-icon' />
    </div>
  )
}

export default Sidebar
