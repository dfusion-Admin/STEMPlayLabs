import Link from "next/link";
import React, { useEffect, useState } from "react";
import { STEMButton } from "../Buttons";
import { faCartPlus, faLightbulb } from "@fortawesome/free-solid-svg-icons";

export const GamesContent = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);

    const solutions = [
        {
            title: "STEMadium",
            range: "Grades 4-6",
            imageUrl: "/images/Screenshot-STEMadium.jpg",
            logo: "/images/Logos/logo-stemadium.png",
            link: "https://www.stemadium.com",
            learnLink: "https://dfusioninc.com/stemadium-game/",
            shopLink: "https://www.stemadium.com/pricing",
            description: "STEM education through baseball with interactive games that make math and science fun and relevant.",
            slides: [
                {
                    imageUrl: "/images/Screenshots/STEMadium-Slide1.jpg",
                    caption: "8 interactive STEM training games"
                },
                {
                    imageUrl: "/images/Screenshots/STEMadium-Slide2.jpg",
                    caption: "Narrative-based with character development"
                },
                {
                    imageUrl: "/images/Screenshots/STEMadium-Slide3.jpg",
                    caption: "Reduces summer slide"
                },
                {
                    imageUrl: "/images/Screenshots/STEMadium-Slide4.jpg",
                    caption: "Available on iOS and Android"
                },
                {
                    imageUrl: "/images/Screenshots/STEMadium-Slide5.jpg",
                    caption: "Maps to math and science standards"
                }
            ],
        },
        {
            title: "Fantasy Sports Math League",
            range: "Grades 6-8",
            imageUrl: "/images/Screenshot-FSML.jpg",
            logo: "/images/Logos/logo-fsml.png",
            link: "https://www.fantasysportsmathleague.com",
            learnLink: "https://dfusioninc.com/fantasy-sports-math-league/",
            shopLink: "https://share.hsforms.com/1s_6ZFJ9GRwmu0x5B5u8mFAdhxaj",
            description: "Transform middle school math through the excitement of fantasy football using real NFL statistics.",
            slides: [
                {
                    imageUrl: "/images/Screenshots/FSML-Slide1.jpg",
                    caption: "Real-world problem solving with NFL data"
                },
                {
                    imageUrl: "/images/Screenshots/FSML-Slide2.jpg",
                    caption: "Fractions, decimals, and data analysis"
                },
                {
                    imageUrl: "/images/Screenshots/FSML-Slide3.jpg",
                    caption: "NCTM Standards alignment"
                },
                {
                    imageUrl: "/images/Screenshots/FSML-Slide4.jpg",
                    caption: "Web-based, Chromebook compatible"
                },
                {
                    imageUrl: "/images/Screenshots/FSML-Slide5.jpg",
                    caption: "FERPA & COPPA compliant"
                }
            ],
        },
        {
            title: "S³E",
            range: "Grades 6-9",
            inDevelopment: true,
            imageUrl: "/images/game3.png",
            logo: "/images/Logos/logo-s3e.png",
            link: "https://www.s3e.com",
            learnLink: "https://dfusioninc.com",
            description: "Environmental health literacity through immersive simulation games for real-world health risks.",
            slides: [
                {
                    imageUrl: "/images/Screenshots/S3E-Slide1.jpg",
                    caption: "Environmental exposure education"
                },
                {
                    imageUrl: "/images/Screenshots/S3E-Slide2.jpg",
                    caption: "Scientific method and hypothesis testing"
                },
                {
                    imageUrl: "/images/Screenshots/S3E-Slide3.jpg",
                    caption: "Real-world health applications"
                },
                {
                    imageUrl: "/images/Screenshots/S3E-Slide4.jpg",
                    caption: "Customizable scenarios"
                },
                {
                    imageUrl: "/images/Screenshots/S3E-Slide5.jpg",
                    caption: "NGSS aligned"
                }
            ],
        }
    ]

    useEffect(() => {
        if (activeIndex == solutions.length-1 && activeSlide == solutions[activeIndex].slides.length - 1) {
            const resetTimer = setTimeout(() => {
                setActiveIndex(0);
                setActiveSlide(0);
            }, 5000); // Reset to first slide after last slide

            return () => clearTimeout(resetTimer);
        }
        setActiveSlide(0);
    }, [activeIndex]);


    useEffect(() => {
        if (activeSlide < solutions[activeIndex].slides.length - 1) {
            const slideTimer = setTimeout(() => {
                setActiveSlide(activeSlide + 1);
            }, 5000); // Change slide every 6 seconds

            return () => clearTimeout(slideTimer);
        } else {
            const resetTimer = setTimeout(() => {
                setActiveIndex((prev) => (prev + 1) % solutions.length);
                setActiveSlide(0);
            }, 5000); // Reset to first slide after last slide

            return () => clearTimeout(resetTimer);
        }
    }, [activeSlide]);

    return (
        <div className="bg-gradient-to-br from-periwinkle to-purple p-2 rounded-xl flex flex-col lg:flex-row-reverse gap-4 w-full">
            <div className="flex-1 w-full flex flex-col lg:flex-row-reverse justify-center items-center gap-4">
                <div className="relative flex justify-center items-center w-full min-h-[450px] h-full lg:w-auto aspect-video bg-black border-white border-2 overflow-hidden rounded-lg">
                    <img
                        src={solutions[activeIndex].slides[activeSlide].imageUrl}
                        alt={`${solutions[activeIndex].title} - ${solutions[activeIndex].slides[activeSlide].caption} Screenshot`}
                        className="w-full h-full asepct-video bg-black object-cover object-center rounded-t-lg lg:rounded-lg overflow-hidden flex justify-center items-center text-center"
                    />

                    <div className="absolute bottom-0 -transform-x-1/2 w-full bg-white px-8 pb-10 pt-2">
                        <p className="w-full italic text-black-light text-center p-2 lg:text-base">
                            {solutions[activeIndex].slides[activeSlide].caption}
                        </p>
                    </div>

                    <ul className="absolute flex flex-row justify-center items-center gap-2 bottom-2 lg:bottom-4 left-1/2 -translate-x-1/2">
                        {solutions[activeIndex].slides.map((point, idx) => (
                            <li
                                key={idx}
                                className={`${activeSlide == idx ? "bg-blue" : "bg-gray/50"} h-2 w-8 rounded-full hover:cursor-pointer`}
                                onClick={() => setActiveSlide(idx)}
                            />
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col h-full gap-4 w-full">
                    <div className="flex-1 flex flex-col gap-4 px-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:h-24">
                            <Link
                                href={solutions[activeIndex].link}
                                target="_blank"
                                className="text-xl lg:text-4xl text-center lg:text-left font-bold  text-white hover:text-blue font-kallisto-heavy uppercase"
                            >
                                {solutions[activeIndex].title}
                            </Link>

                            <div className="flex flex-col items-center justify-end md:items-end gap-2 relative">
                                <div className="flex bg-lavender px-4 py-1 rounded-full w-fit">
                                    <p className="font-bold text-black text-nowrap">
                                        {solutions[activeIndex].range}
                                    </p>
                                </div>

                                {solutions[activeIndex].inDevelopment && (
                                    <div className="flex bg-gray px-4 py-1 rounded-full w-fit">
                                        <p className="font-bold text-black">
                                            In Development
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="h-24 flex flex-row justify-start items-center gap-4 rounded-md">
                            <p className="text-left text-white flex-1 flex items-center">
                                {solutions[activeIndex].description}
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-start">
                            <STEMButton
                                hollow
                                // fullWidth
                                icon={faLightbulb}
                                label="Learn More"
                                action={() => window.open(solutions[activeIndex].learnLink, "_blank")}
                            />

                            {!solutions[activeIndex].inDevelopment && (
                                <STEMButton
                                    // fullWidth
                                    icon={faCartPlus}
                                    label="Buy Now"
                                    action={() => window.open(solutions[activeIndex].shopLink, "_blank")}
                                />
                            )}
                        </div>
                    </div>
                    
                    <ul className="flex-1 flex flex-wrap flex-row gap-2 justify-between items-center px-8">
                        {solutions.map((solution, idx) => (
                            <li key={idx} className="flex-1 flex aspect-square w-24 items-center justify-center"> 
                                <button
                                    onClick={() => setActiveIndex(idx)}
                                    className={`${activeIndex == idx ? "border-4 border-blue-light hover:border-white bg-white" : "hover:border-4 border-transparent hover:border-blue"} max-h-48 max-w-48 aspect-square rounded-full overflow-hidden hover:cursor-pointer duration-300`}
                                >
                                    <img
                                        src={solution.logo}
                                        alt={`${solution.title} Logo`}
                                        className="w-full p-4 object-center text-white rounded-t-lg lg:rounded-lg overflow-hidden flex flex-1 justify-center items-center text-center"
                                    />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            
        </div>
    )
}