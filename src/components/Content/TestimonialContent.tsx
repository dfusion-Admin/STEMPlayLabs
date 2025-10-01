import Image from "next/image";
import { Typewriter } from "nextjs-simple-typewriter";
import React, { useEffect, useState } from "react";

export const TestimonialContent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [startTypewriter, setStartTypewriter] = useState(true);
    const [endTypewriter, setEndTypewriter] = useState(false);

    const testimonials = [
        {
            quote: "Fantasy Sports Math League is a brilliant way to engage students in problem-solving, real life, application, and bottom line....fun!!! Real athletes, real data, and also a family engagement piece that connects kids to the adults in the house as well! I strongly recommend this resource to K-12 administrators.",
            name: "Superintendent Dr. Joanne Culverhouse Ed.D.",
            role: "Administrator"
        },
        {
            quote: "My daughter has struggled in math, but after playing STEMadium at her summer camp, she is more confident about both her math and science skills.",
            name: "Parent of STEMadium User",
            role: "Parent"
        },
        {
            quote: "My students are LOVING this program so far!!!",
            name: "6th Grade Teacher, California",
            role: "Teacher (User)"
        },
        {
            quote: "We are doing data analysis, we're doing statistics and graphing data and analyzing graphs... Fantasy Sports Math League lines up with what we're doing the second-half of the year.",
            name: "6th Grade Teacher, California",
            role: "Teacher (User)"
        },
        {
            quote: "For students to not just see science or view science but participate in the research process, and for them to see all of the changes and improvements based on their input has been just life changing for them.",
            name: "Karen Snedeker",
            role: "S3E Co-Design Paartner and STEAM Educator"
        },
        {
            quote: "As an educator, I really like to collaborate with dfusion's research and development team. It brings in a fresh and relevant perspective. Doing the beta testing of course keeps us on the cutting edge. It was very supportive and very collaborative to work with a good team of research and developers.",
            name: "Karen Snedeker",
            role: "Beta-Test Partner and STEAM Educator"
        },
        {
            quote: "It's impactful, fun, and engaging to try something new. It pushes you as a teacher to be more innovative. Trying new things is so important as a teacher. By putting yourself out there to beta-test something, you're going to grow as an educator because you are going to get more tools.",
            name: "Martin Sweet",
            role: "6th Grade Teacher"
        },
        {
            quote: "I like how we got to learn math and still play!",
            name: "6th Grade Fantasy Sports Math League Player",
            role: "Student"
        },
        {
            quote: "Overall this game is a 5 out of 5 learning game. So much fun. It was funny but also teaches you stuff.",
            name: "8th Grade S3E Player",
            role: "Student"
        }
    ];

    useEffect(() => {
        console.log("Current Index:", currentIndex);
    }, [currentIndex]);

    return (
        <div className="relative flex flex-col justify-start lg:flex-row gap-4 h-100 lg:h-auto w-full">
            <div className="flex flex-col items-center justify-center z-10 w-full">

                <ul className="bg-white backdrop-blur-md p-6 rounded-lg shadow-md w-full lg:w-1/2">
                    
                    <li className="flex flex-col gap-4">
                        <div className="w-full h-24 ">
                            <q className="text-lg italic">
                                <Typewriter
                                    words={testimonials.map(t => t.quote)}
                                    loop={0} 
                                    cursor={true}
                                    typeSpeed={50}
                                    deleteSpeed={20}
                                    delaySpeed={3000}
                                    cursorBlinking
                                    onDelay={() => {
                                        setTimeout(() => {
                                            setCurrentIndex((prevIndex) => prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1);
                                            setStartTypewriter(!startTypewriter);
                                            setEndTypewriter(!endTypewriter);
                                        }, 6000);
                                    }}
                                />
                            </q>
                        </div>

                        <div className="flex flex-row justify-between items-end">
                            <ul className="flex justify-center gap-1">
                                {testimonials.map((_, index) => (
                                    <li
                                        key={index}
                                        className={`h-2 w-6 rounded-full ${index === currentIndex ? 'bg-blue' : 'bg-gray/50'}`}
                                        // onClick={() => setCurrentIndex(index)}
                                    />
                                ))}
                            </ul>

                            <div>
                                <p className="font-semibold text-right">
                                    {testimonials[currentIndex].name}
                                </p>
                                <p className="text-sm text-right text-gray">
                                    {testimonials[currentIndex].role}
                                </p>
                            </div>
                        </div>
                        
                    </li>
                </ul>
            </div>

            <Image
                src="/images/Characters/STEMadium/AllPlayers.png"
                alt="Cinder Character"
                width={800}
                height={400}
                className="block lg:hidden absolute right-1/2 bottom-0 translate-x-1/2 translate-y-36 sm:translate-y-60 w-[760px] md:w-4/5"
            />

            <Image
                src="/images/Characters/STEMadium/Cinder.png"
                alt="Cinder Character"
                width={300}
                height={400}
                className={`${(currentIndex == 0 || currentIndex == 4) ? "translate-x-20 xl:translate-x-0 opacity-100 duration-3000" : "translate-x-full opacity-0 duration-6000"} right-0 bottom-0 translate-y-70 hidden lg:block absolute -scale-x-100 w-auto`}
            />

            <Image
                src="/images/Characters/STEMadium/Onyx.png"
                alt="Cinder Character"
                width={600}
                height={400}
                className={`${(currentIndex == 1 || currentIndex == 5) ? "-translate-x-30 xl:translate-x-0 opacity-100 duration-3000" : "-translate-x-full opacity-0 duration-6000"} left-0 bottom-0 translate-y-70 hidden lg:block absolute scale-x-100 w-120`}
            />

            <Image
                src="/images/Characters/STEMadium/Grandpa.png"
                alt="Grandpa Character"
                width={600}
                height={400}
                className={`${(currentIndex == 2 || currentIndex == 6) ? "translate-x-0 xl:-translate-x-20 opacity-100 duration-3000" : "translate-x-60 opacity-0 duration-6000"} right-0 bottom-0 translate-y-90 hidden lg:block absolute -scale-x-100 w-48 `}
            />

            <Image
                src="/images/Characters/STEMadium/Claudia.png"
                alt="Cinder Character"
                width={600}
                height={400}
                className={`${(currentIndex == 3 || currentIndex == 7) ? "-translate-x-30 xl:translate-x-0 opacity-100 duration-3000" : "-translate-x-full opacity-0 duration-6000"} left-0 bottom-0 translate-y-70 hidden lg:block absolute scale-x-100 w-120`}
            />
        </div>
    );
}