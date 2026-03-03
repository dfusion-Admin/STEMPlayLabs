import Link from "next/link";
import React, { RefObject } from "react";
import { ListHeader } from "./Headers";
import Image from "next/image";

interface FooterProps {
    homeRef: RefObject<HTMLDivElement | null>;
    aboutRef: RefObject<HTMLDivElement | null>;
    challengeRef: RefObject<HTMLDivElement | null>;
    gameRef: RefObject<HTMLDivElement | null>;
    impactRef: RefObject<HTMLDivElement | null>;
    researchRef: RefObject<HTMLDivElement | null>;
    contactRef: RefObject<HTMLDivElement | null>;
}

export const Footer = ({ aboutRef, impactRef, researchRef, contactRef} : FooterProps) => {
    const socialLinks = [
        {
            label: "Instagram",
            url: "https://www.instagram.com/stemplaylabs/",
            icon: "/images/Icons/Instagram.png"
        },
        {
            label: "LinkedIn",
            url: "https://www.linkedin.com/company/stemplaylabs/",
            icon: "/images/Icons/Linkedin.png"
        }
    ]

    const footerLinks = [
        {
            label: "Our Games",
            links: [
                {
                    label: "STEMadium",
                    url: "https://www.stemadium.com"
                },
                {
                    label: "Fantasy Sports Math League",
                    url: "https://www.fantasysportsmathleague.com"
                },
            ]
        },
        {
            label: "Resources",
            links: [
                {
                    label: "Add-On Resources",
                    url: "https://www.teacherspayteachers.com/store/stemplay-labs"
                },
                {
                    label: "Research & Insights",
                    onClick: () => { researchRef.current?.scrollIntoView({ behavior: 'smooth' }) }
                },
                {
                    label: "Our Impact",
                    onClick: () => { impactRef.current?.scrollIntoView({ behavior: 'smooth' }) }
                },
                // { label: "Educator Resources", url: "#educator-resources", external: false },
            ]
        },
        {
            label: "Company",
            links: [
                {
                    label: "dfusion",
                    url: "https://www.dfusioninc.com"
                },
                {
                    label: "About Us",
                    onClick: () => { aboutRef.current?.scrollIntoView({ behavior: 'smooth' }) }
                },
                {
                    label: "Contact Us",
                    onClick: () => { window.open("mailto:stemplaylabs@dfusioninc.com", "_blank") }
                },
                // { label: "Partnerships", url: "#partnerships", external: false },
            ]
        },
    ]

    return (
        <footer className="w-full flex flex-col justify-center items-center bg-black py-4 gap-8">
            <div className="flex flex-col lg:flex-row gap-8 justify-between w-full lg:max-w-4/5 py-8">
                <ul className="md:basis-3/4 w-full flex flex-col sm:flex-row justify-center gap-4 md:gap-0">
                    {footerLinks.map((section, idx) => (
                        <li key={idx} className={`flex flex-col items-center text-center flex-1 px-4 gap-4`}>
                            <ListHeader title={section.label} />
                            
                            <ul className="flex flex-col items-center">
                                {section.links.map((link, linkIdx) => (
                                    <li key={linkIdx} className="">
                                        {link.url ? (
                                            <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue hover:brightness-125 font-bold duration-300">
                                                {link.label}
                                            </a>
                                        ) : (
                                            <button onClick={link.onClick} className="text-blue hover:brightness-125 hover:cursor-pointer font-bold duration-300">
                                                {link.label}
                                            </button>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

                <div className="flex md:basis-1/4 flex-col items-center gap-4">
                    <ListHeader title="Backed by Science" />

                    <p className="text-gray text-center">
                        Collaborating with leading universities and funded by Small Business Innovation Research grants
                    </p>
                </div>
            </div>

            <div className="w-full lg:px-8 relative">
                <div className="absolute flex flex-row gap-4 items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray px-2 pl-4 py-2 rounded-full">
                    <h3 className="text-xl whitespace-nowrap font-bold text-white uppercase font-kallisto-heavy">
                        Stay Connected:
                    </h3>

                    <ul className="flex flex-1 rounded-full gap-2 flex-row items-end justify-between">
                        {socialLinks.map((link, idx) => (
                            <li key={idx} className="inline-block">
                                <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:brightness-125 duration-300 rounded-full overflow-hidden h-8 w-8 flex items-center justify-center bg-white">
                                    <Image
                                        width={1080}
                                        height={720}
                                        src={link.icon}
                                        alt={`${link.label} Icon`}
                                        className="h-8 w-8"
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <hr className="text-gray border-1 w-full rounded-full" />
            </div>

            <div className="relative z-10 w-full flex justify-center items-center text-white">
                <p className="text-center">
                    &copy; {new Date().getFullYear()} STEMPlay Labs. Powered by <Link href="https://www.dfusioninc.com" target="_blank" className="text-blue hover:brightness-125 font-bold duration-300">dfusion</Link>. All rights reserved.
                </p>
            </div>

        </footer>
    )
}