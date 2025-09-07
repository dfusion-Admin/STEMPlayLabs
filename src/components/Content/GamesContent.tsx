import Link from "next/link";
import React from "react";
import { STEMButton } from "../Buttons";

export const GamesContent = () => {
    const solutions = [
        {
            title: "STEMadium",
            range: "Grades 4-6",
            imageUrl: "/images/Screenshot-STEMadium.jpg",
            link: "https://www.stemadium.com",
            learnLink: "https://dfusioninc.com/stemadium-game/",
            shopLink: "https://www.stemadium.com/pricing",
            description: "STEM eductaion through baseball with interactive games that make math and science fun and relevant.",
            points: [
                "8 interactive STEM training games",
                "Narrative-based with character development",
                "Reduces summer slide",
                "Available on iOS and Android",
                "Maps to math and science standards",
            ]
        },
        {
            title: "Fantasy Sports Math League",
            range: "Grades 6-8",
            imageUrl: "/images/Screenshot-FSML.jpg",
            link: "https://www.fantasysportsmathleague.com",
            learnLink: "https://dfusioninc.com/fantasy-sports-math-league/",
            shopLink: "https://share.hsforms.com/1s_6ZFJ9GRwmu0x5B5u8mFAdhxaj",
            description: "Transform middle school math through the excitement of fantasy football using real NFL statistics.",
            points: [
                "Real-world problem solving with NFL data",
                "Fractions, decimals, and data analysis",
                "NCTM Standards alignment",
                "Web-based, Chromebook compatible",
                "FERPA & COPPA compliant",
            ]
        },
        {
            title: "S³E",
            range: "Grades 6-9",
            inDevelopment: true,
            imageUrl: "/images/game3.png",
            link: "https://www.s3e.com",
            learnLink: "https://dfusioninc.com",
            description: "Environmental health literacity through immersive simulation games for real-world health risks.",
            points: [
                "Environmental exposure education",
                "Scientific method and hypothesis testing",
                "Real-world health applications",
                "Customizable scenarios",
                "NGSS aligned",
            ]
        }
    ]

    return (
        <ul className="flex flex-col lg:flex-row gap-4 justify-between w-full">
            {solutions.map((solution, idx) => (
                <li key={idx} className="shrink-0 w-full flex-1 lg:w-auto flex flex-col items-center bg-gradient-to-b from-purple to-periwinkle rounded-lg text-white"> 
                    <div className="relative w-full flex justify-center">
                        <img
                            src={solution.imageUrl}
                            alt={`${solution.title} Screenshot`}
                            className="w-full h-48 asepct-video bg-black object-cover object-top rounded-t-lg overflow-hidden flex justify-center items-center text-center"
                        />

                        <div className="absolute bottom-2 right-2 flex bg-gray px-4 py-1 rounded-full w-fit">
                            <p className="font-bold">
                                {solution.range}
                            </p>
                        </div>

                        {solution.inDevelopment && (
                            <div className="absolute bottom-2 left-2 flex bg-lavender px-4 py-1 rounded-full w-fit">
                                <p className="font-bold text-black">
                                    In Development
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col h-full gap-4 p-4 max-w-lg">
                        <Link
                            href={solution.link}
                            target="_blank"
                            className="text-2xl font-bold text-center h-16 text-white hover:text-blue font-kallisto-heavy uppercase"
                        >
                            {solution.title}
                        </Link>

                        <p className="text-center">
                            {solution.description}
                        </p>

                        <ul className="flex-1 list-disc p-4 flex flex-col gap-2 italic ">
                            {solution.points.map((point, pointIdx) => (
                                <li key={pointIdx}>
                                    {point}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-between">
                            <STEMButton
                                hollow
                                fullWidth
                                label="Learn More"
                                action={() => window.open(solution.learnLink, "_blank")}
                            />

                            {!solution.inDevelopment && (
                                <STEMButton
                                    fullWidth
                                    label="Buy Now"
                                    action={() => window.open(solution.shopLink, "_blank")}
                                />
                            )}
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}