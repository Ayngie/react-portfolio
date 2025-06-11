import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import Loader from './components/Loader/Loader';
import Layout from './components/Layout/Layout';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home/Home'));
const AboutMe = lazy(() => import('./pages/AboutMe/AboutMe'));
const Projects = lazy(() => import('./pages/Projects/Projects'));
const ContactMe = lazy(() => import('./pages/ContactMe/ContactMe'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<AboutMe />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<ContactMe />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
