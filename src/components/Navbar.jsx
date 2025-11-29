import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Home, User, Code, Mail } from 'lucide-react';
import { cn } from '../lib/utils';
import miniLogo from '../assets/image/mini_logo.jpeg';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'about', label: 'About Me', icon: User },
        { id: 'project', label: 'Projects', icon: Code },
        { id: 'contact', label: 'Contact', icon: Mail },
    ];

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="hidden md:block fixed top-0 left-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
                <div className="container mx-auto px-10 lg:px-16">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0 cursor-pointer">
                            <Link to="home" smooth={true} duration={500} offset={-70} className="flex items-center gap-2">
                                <img
                                    src={miniLogo}
                                    alt="RDanang"
                                    className="h-8 w-8 rounded-full border-2 border-primary"
                                />
                                <span className="font-bold text-xl tracking-tight text-foreground">RDanang</span>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.id}
                                    to={item.id}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    onSetActive={() => setActiveSection(item.id)}
                                    className={cn(
                                        "cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300",
                                        activeSection === item.id
                                            ? "text-primary bg-primary/10"
                                            : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Bottom Navbar */}
            <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-background border-t border-border pb-safe">
                <div className="grid grid-cols-4 h-16">
                    {navItems.map((item) => (
                        <Link
                            key={item.id}
                            to={item.id}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={0}
                            onSetActive={() => setActiveSection(item.id)}
                            className={cn(
                                "cursor-pointer flex flex-col items-center justify-center gap-1 transition-colors duration-300",
                                activeSection === item.id
                                    ? "text-primary"
                                    : "text-muted-foreground hover:text-primary"
                            )}
                        >
                            <item.icon className={cn("h-6 w-6", activeSection === item.id && "fill-current")} />
                            <span className="text-[10px] font-medium">{item.label}</span>
                        </Link>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
