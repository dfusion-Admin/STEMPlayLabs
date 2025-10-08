import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import React, { RefObject, useEffect, useState } from "react";
import Image from "next/image";

interface NavbarProps {
    homeRef: RefObject<HTMLDivElement | null>;
    aboutRef: RefObject<HTMLDivElement | null>;
    gameRef: RefObject<HTMLDivElement | null>;
    impactRef: RefObject<HTMLDivElement | null>;
    researchRef: RefObject<HTMLDivElement | null>;
    contactRef: RefObject<HTMLDivElement | null>;
}

export const Navbar = ({ homeRef, aboutRef, gameRef, impactRef, researchRef, contactRef} : NavbarProps) => {
    const [showHomeButton, setShowHomeButton] = useState(false);
    const [navbarColor, setNavbarColor] = useState("backdrop-blur-md bg-purple/0");
    
    const navLinks = [
        {
            label: "Our Games",
            key: "games",
            onClick: () => { gameRef.current?.scrollIntoView({ behavior: 'smooth' }) }
        },
        {
            label: "Impact",
            key: "impact",
            onClick: () => { impactRef.current?.scrollIntoView({ behavior: 'smooth' }) }
        },
        {
            label: "About Us",
            key: "about-us",
            onClick: () => { aboutRef.current?.scrollIntoView({ behavior: 'smooth' }) }
        },
        {
            label: "Research & Insights",
            key: "research-insights",
            onClick: () => { researchRef.current?.scrollIntoView({ behavior: 'smooth' }) }
        },
        {
            label: "Contact",
            key: "contact",
            onClick: () => { contactRef.current?.scrollIntoView({ behavior: 'smooth' }) }
        }
    ]

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                { ref: homeRef, color: "backdrop-blur-md bg-purple/0" },
                { ref: gameRef, color: "bg-white shadow-lg" },
                { ref: impactRef, color: "bg-white shadow-lg" },
                { ref: researchRef, color: "bg-white shadow-lg" },
                { ref: contactRef, color: "bg-white shadow-lg" },
            ];

            const scrollY = window.scrollY + 30; // Offset for navbar height

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];

                if (section.ref.current) {
                    const top = section.ref.current.offsetTop;

                    if (scrollY >= top) {
                        setNavbarColor(section.color);
                        setShowHomeButton(i !== 0);

                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [homeRef, gameRef, impactRef, researchRef, contactRef]);

    return (
        <nav className="fixed z-50 top-0 left-0 w-full flex ">
            <div className="relative z-10 px-8 w-full flex justify-between items-center ">
                <button
                    onClick={() => { homeRef.current?.scrollIntoView({ behavior: 'smooth' }) }}
                    className={`gap-2 shrink-0 py-2 hover:curor-pointer w-fit`}
                >
                    <Image
                        width={1080}
                        height={720}
                        src="/images/STEMPlay Labs Logo Horizontal Full Color.png"
                        alt="STEMPlay Labs Logo"
                        onClick={() => { homeRef.current?.scrollIntoView({ behavior: 'smooth' }) }}
                        className={`${showHomeButton ? "opacity-100" : "opacity-0 pointer-events-none"} h-12 w-full aspect-auto hover:cursor-pointer duration-1000`}
                    />
                </button>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex flex-1 justify-end items-center gap-2 -mr-4">
                    {navLinks.map((link,i) => (
                        <li key={`${i}-${link.key}`}
                        >
                            <button 
                                onClick={link.onClick}
                                className={`${showHomeButton ? "text-blue hover:brightness-75" : "text-white hover:text-blue hover:brightness-125"}  font-bold  px-4 py-2 rounded-full duration-300 hover:cursor-pointer`}
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Mobile Navigation */}
                <Popover as="div" className="md:hidden relative">
                    {({ open }) => (
                        <>
                            <PopoverButton className={`relative z-10 p-2 rounded-full ${showHomeButton ? "text-blue hover:brightness-75" : "text-white hover:text-blue hover:brightness-125"} hover:cursor-pointer focus:ring-0 focus:outline-0 duration-300`}>
                                {open ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.75h16.5M3.75 12h16.5m-16.5 7.25h16.5" />
                                    </svg>
                                )}
                            </PopoverButton>

                            <Transition
                                enter="transition duration-150 cubic-bezier(0.79, 0.33, 0.14, 0.53)"
                                enterFrom="translate-x-50"
                                enterTo=" translate-x-0"
                                leave="transition duration-300 cubic-bezier(0.79, 0.33, 0.14, 0.53)"
                                leaveFrom=" translate-x-0"
                                leaveTo="translate-x-50"
                            >
                                <PopoverPanel className={`${showHomeButton ? 'rounded-bl-lg' : 'rounded-l-lg'} bg-black absolute h-fit duration-1000 top-13 -right-8 w-fit focus:outline-none`}>
                                    <ul className="flex flex-col">
                                        {navLinks.map((link,i) => (
                                           <li key={`${i}-${link.key}`}>
                                                <button 
                                                    
                                                    onClick={() => {
                                                        link.onClick();
                                                        // Close the popover after clicking a link
                                                        (document.activeElement as HTMLElement)?.blur();
                                                    }}
                                                    className={`${showHomeButton ? "text-blue hover:brightness-125" : "text-white hover:text-blue hover:brightness-125"} hover:cursor-pointer font-bold w-full text-right px-4 pr-8 text-nowrap py-2 duration-300`}
                                                >
                                                    {link.label}
                                                </button>
                                           </li>
                                        ))}
                                    </ul>
                                </PopoverPanel>
                            </Transition>
                        </>    
                    )}
                </Popover>
            </div>

            <div className={`${navbarColor} absolute w-full h-full duration-1000`} />
        </nav>
    )
}
