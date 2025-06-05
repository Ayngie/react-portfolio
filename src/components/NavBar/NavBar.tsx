import React, { useState } from 'react';
import './NavBar.scss';
import headshot from '../../assets/headshot.jpg';

interface NavBarProps {
  brandName: string;
  navItems: string[];
}

const NavBar: React.FC<NavBarProps> = ({ brandName, navItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={headshot} alt="Portrait" className="navbar-headshot" />
        <a
          href="#Home"
          className="navbar-title"
          onClick={handleLinkClick}
          style={{ textDecoration: 'none' }}>
          {brandName}
        </a>
        <button
          className={`navbar-toggle${menuOpen ? ' open' : ''}`}
          aria-label="Toggle navigation"
          onClick={handleToggle}>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>
      </div>
      <ul className={`navbar-menu${menuOpen ? ' open' : ''}`}>
        {navItems.map((item) => (
          <li key={item}>
            <a href={`#${item}`} onClick={handleLinkClick}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
