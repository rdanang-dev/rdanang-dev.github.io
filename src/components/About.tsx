import rdanangImg from '../assets/image/rdanang.jpg';
import wavingHand from '../assets/image/waving-hand-joypixels.gif';

const About = () => {
  const skills = [
    { category: "Backend Framework", items: ["NestJs (Node.JS + TS)", "Laravel (PHP)", "SpringBoot (Java)", "Echo (Go)"] },
    { category: "FrontEnd Framework", items: ["React (Typescript) [Tailwind, Bootstrap, Chakra, Mantine, Etc]", "Vue (Typescript) [Tailwind, Bootstrap, Vuetify, Etc]"] },
    { category: "Mobile Framework", items: ["Flutter (Dart)"] },
    { category: "DevOps", items: ["Set up linux", "PM2", "Nginx", "Set up CI/CD"] },
    { category: "VCS", items: ["Git, Github, GitLab"] },
    { category: "Api Doc & Testing", items: ["Postman, Swagger"] },
    { category: "Cloud Storage", items: ["AWS-S3 / GCP / Bunny.net"] },
    { category: "Database", items: ["SQL (MySQL/Postgres)", "NoSQL (MongoDB)"] }
  ];

  return (
    <div className="flex w-full min-h-screen items-center py-20">
      <div className="flex flex-col border border-primary p-6 md:p-10 rounded-lg relative w-full bg-card/30 backdrop-blur-sm">
        <span className="absolute -top-5 left-4 bg-background px-4 text-2xl font-bold text-primary">
          About Me
        </span>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
              <img
                src={rdanangImg}
                alt="Ridho Danang Sanyoto"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="flex-grow">
            <div className="mb-4 flex items-center gap-2 text-xl font-medium text-foreground">
              Hello there Internet Fellas!
              <img
                src={wavingHand}
                alt="waving hand"
                className="w-6 h-6 inline-block"
              />
            </div>

            <div className="text-muted-foreground text-lg leading-relaxed mb-6 text-justify space-y-4">
              <p>
                My name is Ridho Danang Sanyoto — most people know me as Mas Danang, but some also call me Iyoy. I was born in April 1999 and have always loved martial arts, RPG/console games, and anything related to technology.
              </p>
              <p>
                My interest in programming began back in junior high school, probably because I spent way too many hours at internet cafés. That curiosity pushed me to choose Software Engineering as my major in Vocational High School, and I continued learning throughout my bachelor’s degree — where I built my first real project using a framework.
              </p>
              <p>
                I’ve been passionate about building things from scratch ever since, because it helps me truly understand how everything works under the hood.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Skills & Proficiencies :</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-foreground mb-2">{skillGroup.category}</h4>
                    <ul className="space-y-2">
                      {skillGroup.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm md:text-base">
                          <span className="text-primary mt-1.5">▹</span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
