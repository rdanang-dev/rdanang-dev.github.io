import { TypeAnimation } from 'react-type-animation';
import { Download } from 'lucide-react';

interface HomeProps {
  setActiveSection: (section: string) => void;
}

const Home = ({ setActiveSection }: HomeProps) => {
  return (
    <div className="flex w-full min-h-screen items-center justify-center pt-16 md:pt-0">
      <div className="flex flex-col py-10 md:py-32 w-full">
        <span className="text-primary text-xl font-medium mb-2">Hi There, i'm</span>

        <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 h-20 sm:h-24 md:h-32 lg:h-40">
          <TypeAnimation
            sequence={[
              'Ridho Danang Sanyoto',
              2000,
              '',
              100,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-foreground"
          />
        </div>

        <div className="w-full pt-8">
          <h2 className="text-muted-foreground text-xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold mb-6">
            I Build Things from Scratch.
          </h2>

          <div className="pt-4 pb-8 max-w-2xl">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-justify">
              Specialize in building backend systems with Node.js and Go, and I'm equally experienced with mature frameworks such as Laravel and Spring Boot. Also able to deliver frontend and mobile interfaces using React, Vue, and Flutter.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setActiveSection('contact')}
              className="inline-block border border-primary text-primary px-6 py-3 rounded hover:bg-primary/10 hover:text-primary transition-colors duration-300 cursor-pointer font-medium"
            >
              Get in Touch
            </button>
            <a
              href="/Resume_Ridho_Danang_Sanyoto_ATS.pdf"
              download="Resume_Ridho_Danang_Sanyoto_ATS.pdf"
              className="inline-flex items-center gap-2 border border-primary bg-primary text-primary-foreground px-6 py-3 rounded hover:bg-primary/90 transition-colors duration-300 cursor-pointer font-medium"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
