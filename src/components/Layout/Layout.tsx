import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './Layout.scss';

const navLinks = [
  { linkTo: '/', label: 'Home' },
  { linkTo: '/about', label: 'About' },
  { linkTo: '/projects', label: 'Projects' },
  { linkTo: '/contact', label: 'Contact' },
];

const Layout: React.FC = () => (
  <div className="app-container" id="top">
    {/* Accessibility: Skip link for keyboard/screen reader users */}
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>

    <header>
      <NavBar navItems={navLinks} brandName="Angelica Reuterswärd" />
    </header>

    <main id="main-content" tabIndex={-1}>
      <article>
        <Outlet />
        <div className="return-to-top">
          <a
            href="#top"
            className="return-to-top-link"
            aria-label="Return to top of page"
            title="Return to top of page">
            ↑ Return to top
          </a>
        </div>
      </article>
    </main>

    <Footer />
  </div>
);

export default Layout;
