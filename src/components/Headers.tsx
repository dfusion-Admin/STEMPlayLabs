import React from "react";
import { Typewriter } from "nextjs-simple-typewriter";

interface HeaderProps {
    title: string;
    animText?: string[]
}

export const PageHeader = ({ title }: HeaderProps) => {
    return (
        <header className="">
            <h1 className="text-6xl text-center font-kallisto-heavy font-bold text-white">
                {title.toUpperCase()}
            </h1>
        </header>
    )
}

export const PageSubheader = ({ title, animText }: HeaderProps) => {
    return (
        <header className="bg-black/75 p-4 z-10 w-full flex items-center justify-center rounded-xl">
            <h2 className="text-6xl font-bold text-blue-light">
                {animText && (
                    <Typewriter
                        words={animText}
                        loop={0} 
                        cursor
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={2000}
                        cursorBlinking={true}
                        cursorColor="#FFFFFF"
                        cursorStyle=" "
                    />
                )}

                {title}
            </h2>
        </header>
    )
}

export const SectionHeader = ({ title }: HeaderProps) => {
    return (
        <header className="z-20">
            <h2 className="text-4xl text-center font-bold  font-kallisto-heavy uppercase">
                {title}
            </h2>
        </header>
    )
}

export const ListHeader = ({ title }: HeaderProps) => {
    return (
        <header className="border-b-2 border-gray w-fit pb-2 px-2">
            <h4 className="text-xl text-center text-white font-kallisto-heavy uppercase whitespace-nowrap">
                {title}
            </h4>
        </header>
    )
}