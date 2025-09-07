import Link from "next/link";
import React from "react";
import { ListHeader, PageSubheader } from "./Headers";

export const Footer = () => {
    const footerLinks = [
        {
            label: "Our Games",
            links: [
                { label: "STEMadium", url: "https://www.stemadium.com", external: true },
                { label: "Fantasy Sports Math League", url: "https://www.fantasysportsmathleague.com", external: true },
            ]
        },
        {
            label: "Resources",
            links: [
                { label: "Research & Insights", url: "#research-insights", external: false },
                { label: "Our Impact", url: "#impact", external: false },
                { label: "Educator Resources", url: "#educator-resources", external: false },
            ]
        },
        {
            label: "Company",
            links: [
                { label: "dfusion", url: "https://www.dfusioninc.com", external: false },
                { label: "Contact Us", url: "#contact", external: false },
                { label: "Partnerships", url: "#partnerships", external: false },
            ]
        },
    ]

    return (
        <footer className="w-full flex flex-col bg-black px-8 py-4 gap-4">
            <div className="flex flex-col md:flex-row gap-8 justify-between w-full py-8">
                <ul className="md:basis-3/4 w-full flex flex-col sm:flex-row justify-center gap-4 md:gap-0">
                    {footerLinks.map((section, idx) => (
                        <li key={idx} className={`flex flex-col items-center text-center flex-1 px-4 gap-4`}>
                            <ListHeader title={section.label} />
                            
                            <ul className="flex flex-col items-center">
                                {section.links.map((link, linkIdx) => (
                                    <li key={linkIdx} className="">
                                        {link.external ? (
                                            <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue hover:brightness-125 font-bold duration-300">
                                                {link.label}
                                            </a>
                                        ) : (
                                            <a href={link.url} className="text-blue hover:brightness-125 font-bold duration-300">
                                                {link.label}
                                            </a>
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

            <hr className="text-gray border-1 rounded-full" />

            <div className="relative z-10 w-full flex justify-center items-center text-white">
                <p className="text-center">
                    &copy; {new Date().getFullYear()} STEMPlay Labs. Powered by <Link href="https://www.dfusioninc.com" target="_blank" className="text-blue hover:brightness-125 font-bold duration-300">dfusion</Link>. All rights reserved.
                </p>
            </div>

        </footer>
    )
}