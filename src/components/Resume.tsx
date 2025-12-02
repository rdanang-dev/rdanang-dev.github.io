import { Download } from 'lucide-react';

const Resume = () => {
  const education = [
    {
      school: "Pamulang University",
      year: "2021",
      description: "Graduated in Informatics Engineering Majority (TI/Teknik Informatika) with 3.44 GPA."
    },
    {
      school: "Nusantara 1 Vocational High School",
      year: "2016",
      description: "Graduated in Software Engineering Majority (RPL/Rekayasa Perangkat Lunak)"
    }
  ];

  const experience = [
    {
      company: "PLN Icon Plus",
      role: "Middle Software Engineer [Hybrid]",
      period: "March 2025 - December 2025",
      projects: [
        "New Virtual Cubicle (PLN Division Project Management)",
        "E-Sppd (PLN Bussiness Trip Submission and Management)"
      ],
      stack: "Golang, GraphQL, JavaSpringBoot.",
      responsibilities: "Backend Developer, doing Change Request (CR), Develop/Refactor Api, Trace/Bug Fix"
    },
    {
      company: "Misraj Technology",
      role: "Backend Web Developer [Remote: Riyadh, Saudi Arabia]",
      period: "August 2022 ~ May 2025",
      projects: [
        "Giving Sadakoh (Charity Project from Tmra Group)",
        "Ommar (Charity Project for Tmra Group)",
        "Tender Management (Tender Management System)"
      ],
      stack: "NestJs, Postgres, Prisma",
      responsibilities: "Backend Developer, create/refactor api, create documentation using Swagger, trace/fix bug."
    },
    {
      company: "PT.Trives Digital Mulyacipta",
      role: "Full-stack Programmer [Remote: Bekasi]",
      period: "January 2022 ~ August 2024",
      projects: [
        "Contag Indonesia (Online Based Business Card)",
        "UMT Business App (POS App)"
      ],
      stack: "NestJs, Laravel, Postgres, MongoDB, React, Vue, Tailwind, Flutter.",
      responsibilities: "Full-stack Developer, create/refactor api, create documentation using Swagger, trace/fix bug, creating using React and integrating api, Deploy api and App to the server."
    },
    {
      company: "PT. Kreatifindo Abadi Sejahtera",
      role: "Full-stack Web Developer [Remote: Bekasi]",
      period: "December 2021 ~ June 2022",
      projects: [
        "WA Zone (Web base app for blasting, creating bot Whatsapp)"
      ],
      stack: "NestJS, MongoDB, React, Tailwind",
      responsibilities: "Full-stack Developer, create/refactor api, create documentation using Swagger, trace/fix bug, creating using React and integrating api, Deploy api and App to the server."
    },
    {
      company: "Freelance Experience",
      role: "Full-stack Programmer",
      period: "2021 ~ Current",
      projects: [
        "Benefits (Dating Apps)",
        "Elroi Church (Company Profile)",
        "Wisata Kopi POS (POS)",
        "Jantung Sehat (Health Management App)",
        "Golden Dragon Hauseware (Company Profile)",
        "Delta Apps (Governorate Election Apps)",
        "Etc.."
      ],
      stack: "NestJs, Laravel, Postgres, MongoDB, React, Vue, Tailwind, Flutter.",
      responsibilities: ""
    }
  ];

  return (
    <div className="flex w-full min-h-screen items-center py-20">
      <div className="flex flex-col w-full gap-8">

        {/* Header & Download */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-b border-border pb-6">
          <h2 className="text-3xl font-bold text-primary">Resume</h2>
          <a
            href="/Resume_Ridho_Danang_Sanyoto_ATS.pdf"
            download="Resume_Ridho_Danang_Sanyoto_ATS.pdf"
            className="inline-flex items-center gap-2 border border-primary bg-primary text-primary-foreground px-6 py-2 rounded hover:bg-primary/90 transition-colors duration-300 cursor-pointer font-medium"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Educational Background */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground border-l-4 border-primary pl-4">Educational Background</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-4 border-l border-border/50">
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary" />
                  <h4 className="text-xl font-bold text-foreground">{edu.school}</h4>
                  <span className="text-sm text-primary font-medium block mb-2">{edu.year}</span>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground border-l-4 border-primary pl-4">Work Experience & Projects</h3>
            <div className="space-y-10">
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-4 border-l border-border/50">
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary" />
                  <h4 className="text-xl font-bold text-foreground">{exp.company}</h4>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                    <span className="text-base font-medium text-foreground/80">{exp.role}</span>
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                  </div>

                  <div className="space-y-2 text-muted-foreground text-sm">
                    <div>
                      <span className="font-semibold text-foreground">Project:</span>
                      <ul className="list-disc list-inside ml-2 mt-1 space-y-1">
                        {exp.projects.map((proj, i) => (
                          <li key={i}>{proj}</li>
                        ))}
                      </ul>
                    </div>
                    {exp.stack && (
                      <div>
                        <span className="font-semibold text-foreground">Stack:</span> {exp.stack}
                      </div>
                    )}
                    {exp.responsibilities && (
                      <div>
                        <span className="font-semibold text-foreground">Roles & Responsibility:</span> {exp.responsibilities}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Resume;
