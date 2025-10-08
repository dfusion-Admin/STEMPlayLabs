import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { STEMButton } from "../Buttons";
import { faCartPlus, faDownload, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from "@headlessui/react";
import Image from "next/image";

export const GamesContent = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);

    const gameDetailTags = [
        "gameplay",
        "howToUse",
        "results",
        "resources",
    ]
    const solutions = useMemo(() => [
        {
            title: "STEMadium",
            infographic: "/downloads/Infographic-STEMadium.pdf",
            range: "Grades 4-6",
            subject: "Science & Math",
            topic: "Learning through baseball",
            cost: {
                value: 4.99,
                per: "from the",
                appStoreLink: "https://apps.apple.com/us/app/stemadium/id1579244448",
                googlePlayLink: "https://play.google.com/store/apps/details?id=com.dfusion.stemadium.pii.ii"
            },
            gameplay: "Players create their own characters, explore different game levels, and solve baseball problems to help save the Dragons' baseball team by applying math and science.",
            howToUse: "STEMadium has 8 lessons built into the game that can be used as a classroom supplement, in afterschool programs, camps, or used independently at home.",
            results: "STEMadium increases STEM knowledge and interest and reduced the 'summer slide'. Kids with the lowest interest in STEM careers before playing STEMadium showed significant increases in their interest in math-related careers after playing the game.",
            resources: "A comprehensive teacher's guide is available to support classroom implementation. No oadditional professional development required.",
            support: "Funded with support from National Institute of Health, Institute of General Medical Sciences",
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
            subject: "Math",
            topic: "Learn Algebraic equations and data analysis through football",
            cost: {
                value: 150,
                per: "per classroom",
            },
            gameplay: "Students draft teams, solve algebraic equations using authentic game statistics, and develop critical mathematical reasoning - all while experiencing the engagement that comes from managing their own fantasy teams.",
            howToUse: "Transfrom middle school math through the excitement of fantasy football using real NFL statistics. Fantasy Sports Math League (FSML) is a standards-aligned educational platform that transforms middle school math instruction by combining real NFL data with standards-aligned curriculum.",
            results: "Playing the game siginifcantly improved knowledge of equations, decreased math anxiety, and increased math confidence.",
            resources: "Teacher portal with student reporting, lesson plans, extension activities, and on-demand onboarding.",
            support: "Funded with support from the Department of Education IES-SBIR",
            study: {
                details: "In addition to pilot studies, FSML will be evaluated through a randomized controlled trial to better gain insight into the impact this learning game has on student outcomes.",
                timeframe: "January 2026 - May 2026",
                location: "United States",
                population: "Middle school math, STEM, and afterschool groups",
                investigator: "BA Laris",
                director: "Mia Barrett",
                evaluator: "Arroyo Research Services",
                funder: "Department of Education IES-SBIR"
            },
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
            range: "Grades 6-8",
            inDevelopment: true,
            subject: "Environmental Health",
            topic: "Indoor air quality",
            cost: {
                value: null,
                per: "Under Development",
            },
            gameplay: "Players explore indoor environments to find sources of indoor air pollution and identify ways to make changes to protect the health of peaople and pets by testing out possible solutions.",
            howToUse: "S³E has 6 lessons to support game play that can be used as a classroom supplement, in afterschool programs, camps, or used independently at home.",
            results: "Play-testers of the S³E prototype learned about the types of air pollution in the home, health effects of being exposed to air pollution, and what a hypothesis is.",
            resources: "A comprehensive teacher's guide is available to support classroom implementation. No additional professional development required.",
            support: "Funded with support from National Institute of Health, National Institute of Environmental Health Sciences",
            imageUrl: "/images/game3.png",
            logo: "/images/Logos/logo-s3e.png",
            link: "https://www.s3e.com",
            learnLink: "https://dfusioninc.com",
            description: "Environmental health literacy through immersive simulation games for real-world health risks.",
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
    ], []);

    useEffect(() => {
        if (activeIndex == solutions.length-1 && activeSlide == solutions[activeIndex].slides.length - 1) {
            const resetTimer = setTimeout(() => {
                setActiveIndex(0);
                setActiveSlide(0);
            }, 5000); // Reset to first slide after last slide

            return () => clearTimeout(resetTimer);
        }
        setActiveSlide(0);

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
    }, [solutions, activeIndex, activeSlide]);

    return (
        <div className="flex flex-col lg:flex-row justify-center items-start w-full ">
            <ul className="flex flex-row lg:flex-col gap-2  justify-between items-start">
                {solutions.map((solution, idx) => (
                    <li key={idx} className="flex aspect-square w-fit items-center justify-center"> 
                        <button
                            onClick={() => setActiveIndex(idx)}
                            className={`${activeIndex == idx ? "border-4 border-periwinkle hover:bg-periwinkle-light bg-periwinkle" : "border-4 border-blue hover:bg-blue-light bg-blue"} flex items-center p-4 pb-6 lg:p-4 lg:pr-6 justify-center  min-h-24 max-h-36 aspect-square rounded-t-xl lg:rounded-t-none lg:rounded-l-xl border-b-0 lg:border-b-4 lg:border-r-0 overflow-hidden hover:cursor-pointer duration-300`}
                        >
                            <Image
                                src={solution.logo}
                                alt={`${solution.title} Logo`}
                                width={1080}
                                height={720}
                                className={`${activeIndex == idx ? "" : ""} aspect-square  object-center text-white flex justify-center items-center text-center`}
                            />
                        </button>
                    </li>
                ))}
            </ul>

            <div className={`rounded-xl bg-gradient-to-b lg:bg-gradient-to-r from-periwinkle to-purple p-2 -mt-4 lg:mt-0 lg:-ml-4 flex flex-col lg:flex-row-reverse gap-4 w-full`}>
                <div className="flex-1 w-full flex flex-col lg:flex-row justify-center items-center gap-4">
                    <div className="flex flex-col h-full w-full ">
                        <div className="flex flex-1 flex-col gap-2">
                            <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
                                <Link
                                    href={solutions[activeIndex].link}
                                    target="_blank"
                                    className="text-4xl text-center font-bold  text-white hover:text-blue font-kallisto-heavy uppercase"
                                >
                                    {solutions[activeIndex].title}
                                </Link>

                                {solutions[activeIndex].infographic && (
                                    <STEMButton
                                        hollow
                                        // fullWidth
                                        // dark
                                        icon={faDownload}
                                        label="Free Infographic"
                                        action={() => window.open(solutions[activeIndex].infographic, "_blank")}
                                    />
                                )}
                            </div>

                            <div className="w-full flex flex-col lg:flex-row gap-2 items-center justify-between">
                                <p className="text-white italic text-lg text-center">
                                    {solutions[activeIndex].topic}
                                </p>

                                <div className="flex flex-row flex-wrap justify-center gap-2">
                                    <div className="flex flex-row items-center bg-blue px-4 py-1 rounded-full w-fit">
                                        <p className="text-white font-bold">
                                            {solutions[activeIndex].subject}
                                        </p>
                                    </div>
                                    
                                    <div className="flex flex-row items-center bg-lavender px-4 py-1 rounded-full w-fit">
                                        <p className="font-bold text-black text-nowrap">
                                            {solutions[activeIndex].range}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row justify-start items-start gap-4 rounded-lg bg-black/75 p-4">
                                <p className="text-center text-white flex-1 flex items-center">
                                    {solutions[activeIndex].description}
                                </p>
                            </div>

                            <div className="relative flex lg:hidden justify-center items-center w-full max-h-150 aspect-square border-white border-2 overflow-hidden rounded-lg">
                                <Image
                                    width={1080}
                                    height={720}
                                    src={solutions[activeIndex].slides[activeSlide].imageUrl}
                                    alt={`${solutions[activeIndex].title} - ${solutions[activeIndex].slides[activeSlide].caption} Screenshot`}
                                    className="object-cover object-center h-full w-full overflow-hidden"
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

                            <ul className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-2">
                                {gameDetailTags.map((tag, idx) => (
                                    <Disclosure as="li" key={idx}
                                        className="basis-full lg:basis-1/2 flex flex-col items-center justify-start "
                                    >
                                        {({ open }) => (
                                            <>
                                                <DisclosureButton
                                                    className={`${open ? "bg-blue rounded-t-lg" : "bg-blue/70 hover:bg-blue flex-1 rounded-lg duration-300"} text-lg font-bold text-white w-full text-center p-4 hover:cursor-pointer`}
                                                >
                                                    {tag.charAt(0).toUpperCase() + tag.slice(1).replace(/([A-Z])/g, ' $1')}
                                                </DisclosureButton>

                                                <DisclosurePanel className="text-white italic px-4 py-2 border-4 border-blue rounded-b-lg w-full h-full">
                                                    { // @ts-expect-error --- IGNORE ---
                                                        solutions[activeIndex][tag]
                                                    }
                                                </DisclosurePanel>
                                            </>
                                        )}                  
                                    </Disclosure>
                                ))}
                            </ul>

                            {solutions[activeIndex].study ? (
                                <Disclosure as="div" className="flex flex-col items-center justify-start ">
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton
                                                className={`${open ? "rounded-t-lg bg-blue" : "rounded-lg bg-blue/70 hover:bg-blue duration-300"} text-lg font-bold text-white w-full text-center p-4 hover:cursor-pointer`}
                                            >
                                                Ongoing Research Study
                                            </DisclosureButton>

                                            <Transition
                                                enter="transition duration-100 ease-out"
                                                enterFrom="transform translate-y-0 opacity-0"
                                                enterTo="transform translate-y-100 opacity-100"
                                                leave="transition duration-75 ease-out"
                                                leaveFrom="transform  opacity-100"
                                                leaveTo="transform  opacity-0"
                                            >
                                                <DisclosurePanel
                                                    as="ul"
                                                    transition
                                                    className="text-white italic px-4 py-2 flex flex-col gap-2 w-full border-blue border-4 rounded-b-lg"
                                                >
                                                    <li>
                                                        <div className="flex flex-col lg:flex-row gap-4 justify-between w-full ">
                                                            <div className="flex flex-col lg:flex-row items-center lg:gap-2">
                                                                <p className="font-bold text-lg">
                                                                    Timeframe:
                                                                </p>
                                                                <p className="italic">
                                                                    {" "}{solutions[activeIndex].study?.timeframe}
                                                                </p>
                                                            </div>

                                                            <div className="flex flex-col lg:flex-row items-center lg:gap-2">
                                                                <p className="font-bold text-lg">
                                                                    Location:
                                                                </p>
                                                                <p className="italic">
                                                                    {" "}{solutions[activeIndex].study?.location}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="flex flex-col lg:flex-row gap-4 justify-start w-full ">
                                                            <div className="flex flex-col lg:flex-row items-center text-center lg:gap-2">
                                                                <p className="font-bold text-lg">
                                                                    Population:
                                                                </p>
                                                                <p className="italic">
                                                                    {" "}{solutions[activeIndex].study?.population}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="flex flex-col lg:flex-row gap-4 justify-between w-full ">
                                                            <div className="flex flex-col items-center lg:items-start lg:gap-2">
                                                                <p className="font-bold text-lg whitespace-nowrap">
                                                                    Study Details:
                                                                </p>
                                                                <p className="italic text-center lg:text-left">
                                                                    {" "}{solutions[activeIndex].study?.details}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="flex flex-col lg:flex-row gap-4 justify-between w-full ">
                                                            <div className="flex flex-col lg:flex-row items-center lg:gap-2">
                                                                <p className="font-bold text-lg">
                                                                    Principal Investigator:
                                                                </p>
                                                                <p className="italic">
                                                                    {" "}{solutions[activeIndex].study?.investigator}
                                                                </p>
                                                            </div>

                                                            <div className="flex flex-col lg:flex-row items-center lg:gap-2">
                                                                <p className="font-bold text-lg">
                                                                    Study Director:
                                                                </p>
                                                                <p className="italic">
                                                                    {" "}{solutions[activeIndex].study?.director}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="flex flex-col lg:flex-row gap-4 justify-between w-full ">
                                                            <div className="flex flex-col lg:flex-row items-center lg:gap-2">
                                                                <p className="font-bold text-lg">
                                                                    Evaluator:
                                                                </p>
                                                                <p className="italic">
                                                                    {" "}{solutions[activeIndex].study?.evaluator}
                                                                </p>
                                                            </div>

                                                            <div className="flex flex-col lg:flex-row items-center lg:gap-2">
                                                                <p className="font-bold text-lg">
                                                                    Funder:
                                                                </p>
                                                                <p className="italic">
                                                                    {" "}{solutions[activeIndex].study?.funder}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </DisclosurePanel>
                                            </Transition>
                                        </>
                                    )}
                                </Disclosure>
                            ) : null}

                            <div className="flex flex-col lg:flex-row items-center gap-4 w-full ">
                                <div className="flex-1 text-black text-center bg-amber-300 py-2 rounded-xl h-full flex flex-col items-center justify-center lg:whitespace-nowrap w-full lg:w-fit">
                                    <p>
                                        {"Price: "}
                                    </p>

                                    {solutions[activeIndex].cost.value ? (
                                        <p className="font-bold text-2xl">${solutions[activeIndex].cost.value} </p>
                                    ) : (
                                        <p className="font-bold text-2xl">TBD</p>
                                    )}

                                    <p className="italic">
                                        {` ${solutions[activeIndex].cost.per}`}

                                        {solutions[activeIndex].cost.appStoreLink || solutions[activeIndex].cost.googlePlayLink ? (
                                            <span className="italic">
                                                {" "}
                                                
                                                {solutions[activeIndex].cost.appStoreLink ? (
                                                    <Link
                                                        href={solutions[activeIndex].cost.appStoreLink}
                                                        className="underline"
                                                        target="_blank"
                                                    >
                                                        App Store
                                                    </Link>
                                                ) : null}

                                                {" & "}

                                                {solutions[activeIndex].cost.googlePlayLink ? (
                                                    <Link
                                                        href={solutions[activeIndex].cost.googlePlayLink}
                                                        className="underline"
                                                        target="_blank"
                                                    >
                                                        Google Play
                                                    </Link>
                                                ) : null}
                                            </span>
                                        ) : null}
                                    </p>
                                </div>

                                <div className="flex flex-1 flex-row flex-wrap items-end h-full gap-4 justify-center lg:justify-end w-full lg:w-fit">
                                    <STEMButton
                                        hollow
                                        fullWidth
                                        icon={faLightbulb}
                                        label="Learn More"
                                        action={() => window.open(solutions[activeIndex].learnLink, "_blank")}
                                    />

                                    {solutions[activeIndex].inDevelopment ? (
                                        <div className="flex flex-row justify-center items-center px-4  rounded-full w-full">
                                            <p className="font-bold text-white text-xl text-center">
                                                ...Coming Soon!
                                            </p>
                                        </div>
                                    ) : (
                                        <STEMButton
                                            fullWidth
                                            icon={faCartPlus}
                                            label="Buy Now"
                                            action={() => window.open(solutions[activeIndex].shopLink, "_blank")}
                                        />
                                    )}
                                </div>
                            </div>

                            <div className="flex w-full justify-center items-center">
                                <p className="text-white italic text-sm text-center">
                                    {solutions[activeIndex].support}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative hidden lg:flex justify-center items-center w-full max-h-150 aspect-square border-white border-2 overflow-hidden rounded-lg">
                        <Image
                            width={1080}
                            height={720}
                            src={solutions[activeIndex].slides[activeSlide].imageUrl}
                            alt={`${solutions[activeIndex].title} - ${solutions[activeIndex].slides[activeSlide].caption} Screenshot`}
                            className="object-cover object-center h-full w-full overflow-hidden"
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
                </div>
            </div>
        </div>
    )
}