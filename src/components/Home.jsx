import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
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

                <div className="w-full">
                    <h2 className="text-muted-foreground text-xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold mb-6">
                        I Build Things from Scratch.
                    </h2>

                    <div className="pt-4 pb-8 max-w-2xl">
                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-justify">
                            I'm Web Developer from South Tangerang, Indonesia, I'm currently
                            focused on tech for building web-based app from scratch, such as{' '}
                            <a
                                href="https://laravel.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-primary hover:underline font-medium"
                            >
                                Laravel
                            </a>
                            ,{' '}
                            <a
                                href="https://nestjs.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-primary hover:underline font-medium"
                            >
                                NestJS
                            </a>
                            ,{' '}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                className="text-primary hover:underline font-medium"
                                href="https://vuejs.org/"
                            >
                                VueJS
                            </a>
                            ,{' '}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                className="text-primary hover:underline font-medium"
                                href="https://reactjs.org/"
                            >
                                ReactJS
                            </a>
                            , and{' '}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                className="text-primary hover:underline font-medium"
                                href="https://tailwindcss.com/"
                            >
                                TailwindCSS
                            </a>
                        </p>
                    </div>

                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className="inline-block border border-primary text-primary px-6 py-3 rounded hover:bg-primary/10 hover:text-primary transition-colors duration-300 cursor-pointer font-medium"
                    >
                        Get in Touch
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
