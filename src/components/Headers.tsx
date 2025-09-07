import React from "react";

interface HeaderProps {
    title: string;
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

export const PageSubheader = ({ title }: HeaderProps) => {
    return (
        <header className="">
            <h2 className="text-4xl font-bold text-blue-light">
                {title}
            </h2>
        </header>
    )
}

export const SectionHeader = ({ title }: HeaderProps) => {
    return (
        <header className="">
            <h2 className="text-4xl text-center font-bold font-kallisto-heavy uppercase">
                {title}
            </h2>
        </header>
    )
}

export const ListHeader = ({ title }: HeaderProps) => {
    return (
        <header className="border-b-2 border-gray w-fit pb-2 px-2">
            <h4 className="text-xl text-center text-white font-kallisto-heavy uppercase">
                {title}
            </h4>
        </header>
    )
}