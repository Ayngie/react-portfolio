import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Projects from './pages/Projects/Projects';
import ContactMe from './pages/ContactMe/ContactMe';
import NotFound from './pages/NotFound/NotFound';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';

// Entry point: Render the application with routing and error handling
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutMe />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<ContactMe />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
