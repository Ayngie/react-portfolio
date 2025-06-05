import './App.scss';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Projects from './pages/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Layout>
      <main>
        <Home />
        <AboutMe />
        <Projects />
      </main>
      <Footer />
    </Layout>
  );
}

export default App;

// This is the main entry point of the React application.
// It imports the main App component and renders it.
// The App component includes a Layout that contains a NavBar and main content sections.
// The Layout component is responsible for rendering the NavBar and passing the necessary props.
// The NavBar component is responsible for rendering the navigation bar with brand name, and navigation items.
// The NavBar component uses React hooks to manage the state of the menu (open/closed).
