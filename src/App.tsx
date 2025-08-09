import './App.scss';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Experience from './components/Experience';
import {Header} from './components/header';
import Skill from './components/Skill';


function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Main content section */}
      <main className="flex-1">
        <AboutMe />
        <Skill />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}

export default App
