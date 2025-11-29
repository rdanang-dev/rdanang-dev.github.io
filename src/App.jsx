import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import LatestProject from './components/LatestProject'
import Contact from './components/Contact'

function App() {
    return (
        <div className="leading-normal tracking-normal font-mono bg-background text-foreground min-h-screen overflow-x-hidden">
            <Navbar />
            <div className="container mx-auto px-4 md:px-10 lg:px-16">
                <section id="home">
                    <Home />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="project">
                    <LatestProject />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </div>
        </div>
    )
}

export default App
