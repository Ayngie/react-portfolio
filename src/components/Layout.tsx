import React from 'react';
import NavBar from './NavBar/NavBar';

interface LayoutProps {
  children: React.ReactNode;
}

const navItems = ['Home', 'About', 'Projects'];

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <NavBar brandName="Angelica Reuterswärd" navItems={navItems} />
    {children}
  </>
);

export default Layout;
