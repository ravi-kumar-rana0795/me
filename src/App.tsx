import React from 'react';
// import Header from './components/Header';
import About from './components/aboutMe/About';
import Header from './components/header/Header';
import './App.css';
import Skill from './components/skill/Skill';
import Experience from './components/experiences/Experience';
import Contact from './components/contact/Contact';

const App:React.FC = () => (
  <>
    <Header />
    <main className='main' id="#main">
      <About />
      <Skill />
      <Experience />
      {/* <Projects /> */}
      <Contact />
    </main>
  </>
);

export default App;
