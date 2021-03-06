import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import ProjectDetails from './components/ProjectDetails';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/projects/projectsDetails">
            <ProjectDetails />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
