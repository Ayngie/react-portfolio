import React, { useState } from 'react';
import './NavBar.scss';
import headshot from '../../assets/headshot.jpg';
import { Link, NavLink } from 'react-router-dom';

interface NavBarProps {
  brandName: string;
  navItems: { linkTo: string; label: string }[];
}

const NavBar: React.FC<NavBarProps> = ({ brandName, navItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav aria-label="Main navigation" className="navbar">
      <div className="navbar-brand">
        <img src={headshot} alt="Portrait" className="navbar-headshot" />
        <Link
          to="/"
          className="navbar-title"
          onClick={handleLinkClick}
          aria-label="Home">
          {brandName}
        </Link>
        <button
          className={`navbar-toggle ${menuOpen ? ' open' : ''}`}
          aria-label="Toggle navigation"
          onClick={handleToggle}>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>
      </div>
      <ul className={`navbar-menu ${menuOpen ? ' open' : ''}`}>
        {navItems.map((linkItem) => (
          <li key={linkItem.linkTo}>
            <NavLink
              to={linkItem.linkTo}
              onClick={handleLinkClick}
              onMouseUp={(e) => e.currentTarget.blur()}>
              {linkItem.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
