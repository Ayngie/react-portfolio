import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Layout.scss';

const navLinks = [
  { linkTo: '/', label: 'Home' },
  { linkTo: '/about', label: 'About' },
  { linkTo: '/projects', label: 'Projects' },
  { linkTo: '/contact', label: 'Contact' },
];

const Layout: React.FC = () => (
  <>
    {/* Accessibility: Skip link for keyboard users */}
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>

    <header>
      <NavBar navItems={navLinks} brandName="Angelica Reuterswärd" />
    </header>
    <main id="main-content">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
