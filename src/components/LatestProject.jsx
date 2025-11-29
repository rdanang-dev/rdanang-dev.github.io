import React from 'react';
import projectData from '../data/latestproject.json';
import { ExternalLink, Github, Youtube } from 'lucide-react';

const LatestProject = () => {
    const { data } = projectData;

    return (
        <div className="flex w-full min-h-screen items-center py-20">
            <div className="flex flex-col w-full">
                {/* Heading */}
                <div className="flex flex-row items-center mb-10">
                    <span className="text-primary text-2xl md:text-3xl font-bold pr-4 whitespace-nowrap">
                        Projects
                    </span>
                    <hr className="border-primary w-full opacity-50" />
                </div>

                {/* Description */}
                <div className="text-lg md:text-2xl text-foreground mb-12">
                    <span>Here is some project that i do, you can also check the other on my </span>
                    <a
                        href="https://github.com/rdanang-dev"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary hover:underline font-medium"
                    >
                        github
                    </a>
                    <span> !</span>
                </div>

                {/* Projects List */}
                <div className="flex flex-col gap-16">
                    {data.map((project, index) => (
                        <div key={index} className="flex flex-col rounded-3xl">
                            {/* Image Section */}
                            <div className="w-full border border-primary rounded-t-3xl overflow-hidden group">
                                <a
                                    href={project.links || project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block w-full h-full relative overflow-hidden"
                                >
                                    <img
                                        src={`/projects/${project.image}`}
                                        alt={project.title}
                                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                                </a>
                            </div>

                            {/* Content Section */}
                            <div className="flex flex-col p-6 md:p-8 border-x border-b border-primary rounded-b-3xl bg-card/30 backdrop-blur-sm relative">
                                <h3 className="text-3xl font-bold text-primary mb-4">{project.title}</h3>
                                <p className="text-muted-foreground mb-6 text-lg">{project.desc}</p>

                                <div className="space-y-4 text-muted-foreground mb-16">
                                    {project.backendRole && (
                                        <div>
                                            <span className="block font-semibold text-foreground mb-1">Backend Roles:</span>
                                            <p className="pl-4 border-l-2 border-primary/30">{project.backendRole}</p>
                                        </div>
                                    )}
                                    {project.frontendRole && (
                                        <div>
                                            <span className="block font-semibold text-foreground mb-1">FrontEnd Roles:</span>
                                            <p className="pl-4 border-l-2 border-primary/30">{project.frontendRole}</p>
                                        </div>
                                    )}
                                    {project.devopsRole && (
                                        <div>
                                            <span className="block font-semibold text-foreground mb-1">DevOps Roles:</span>
                                            <p className="pl-4 border-l-2 border-primary/30">{project.devopsRole}</p>
                                        </div>
                                    )}

                                    <div className="pt-4">
                                        <span className="block font-semibold text-foreground mb-2">Tags:</span>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="inline-block border border-dotted border-primary px-3 py-1 rounded-full text-sm text-primary"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="absolute bottom-6 right-6 flex gap-4">
                                    {project.links && (
                                        <a
                                            href={project.links}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                            title="Visit Site"
                                        >
                                            <ExternalLink size={28} />
                                        </a>
                                    )}
                                    {project.frontend && (
                                        <a
                                            href={project.frontend}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                            title="Frontend Repo"
                                        >
                                            <Github size={28} />
                                        </a>
                                    )}
                                    {project.backend && (
                                        <a
                                            href={project.backend}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                            title="Backend Repo"
                                        >
                                            <Github size={28} />
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                            title="Watch Demo"
                                        >
                                            <Youtube size={28} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LatestProject;
