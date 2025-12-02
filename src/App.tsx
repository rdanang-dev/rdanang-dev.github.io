import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import LatestProject from './components/LatestProject'
import Contact from './components/Contact'
import Resume from './components/Resume'

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="leading-normal tracking-normal font-mono bg-background text-foreground min-h-screen overflow-x-hidden">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="container mx-auto px-4 md:px-10 lg:px-16">
        {activeSection === 'home' && (
          <section id="home">
            <Home setActiveSection={setActiveSection} />
          </section>
        )}
        {activeSection === 'about' && (
          <section id="about">
            <About />
          </section>
        )}
        {activeSection === 'resume' && (
          <section id="resume">
            <Resume />
          </section>
        )}
        {activeSection === 'project' && (
          <section id="project">
            <LatestProject />
          </section>
        )}
        {activeSection === 'contact' && (
          <section id="contact">
            <Contact />
          </section>
        )}
      </div>
    </div>
  )
}

export default App
