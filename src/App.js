import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Layout from '../src/components/Layout';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Skills from '../src/components/Skills';
import Projects from '../src/components/Project'; 
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';

function App() {
  return (
      <Layout>
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </Layout>
  );
}

export default App;
