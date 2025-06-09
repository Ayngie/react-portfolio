import './App.scss';

import Layout from './components/Layout';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import { ErrorBoundary } from './components/ErrorBoundary';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutMe />} />
            <Route path="projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
// This is the main entry point of the application.
