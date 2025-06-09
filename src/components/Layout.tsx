import React from 'react';
import NavBar from './NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';

const navLinks = [
  { linkTo: '/', label: 'Home' },
  { linkTo: '/about', label: 'About' },
  { linkTo: '/projects', label: 'Projects' },
];

const Layout: React.FC = () => (
  <>
    <NavBar navItems={navLinks} brandName="Angelica Reuterswärd" />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
