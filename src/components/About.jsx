import React from 'react';
import rdanangImg from '../assets/image/rdanang.jpg';
import wavingHand from '../assets/image/waving-hand-joypixels.gif';

const About = () => {
    const skills = [
        { category: "Languages", items: ["HTML", "CSS", "PHP", "JavaScript", "TypeScript"] },
        { category: "Frameworks", items: ["Laravel", "NestJS", "TailwindCSS", "React/Vue", "Next/Nuxt"] },
        { category: "Tools & DB", items: ["MySQL", "MongoDB", "Nginx", "VSCode", "Linux"] },
        { category: "Others", items: ["Git, Github, GitLab", "Postman, Swagger", "REST API", "SPA & PWA", "AWS S3 / GCP"] }
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

                        <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-justify">
                            My name is Ridho Danang Sanyoto, Well known as Mas Danang, but people
                            also call me Iyoy, born on late April 1999, I love matrial arts,
                            playing games, and anything that realted to tech, especially when I
                            have to built it from scratch, because with that way I know how it
                            works, My intrest on Web Development was started when I was Junior
                            High School Student, Maybe because I spent a lot of time at Internet
                            Caffe back then, So I choose Software Engineering for my Vocational
                            High School Majority to learn more about it, and finaly start using
                            Framework when I develop my final assigment for Bachelor Degree, I may
                            not good at competitive programming, but i got the job done anyway.
                        </p>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-primary">Language, Tools and Concept :</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {skills.map((skillGroup, index) => (
                                    <ul key={index} className="space-y-2">
                                        {skillGroup.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm md:text-base">
                                                <span className="text-primary mt-1.5">▹</span>
                                                <span className="text-muted-foreground">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
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
