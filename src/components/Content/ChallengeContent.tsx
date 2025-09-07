import React from "react";

export const ChallengeContent = () => {
    const challengeStats = [
        {
            highlight: "72%",
            subtext: "of 8th graders score below proficient in math",
        },
        {
            highlight: "Low",
            subtext: "STEM engagement among diverse learners",
        },
        {
            highlight: "Limited",
            subtext: "access to engaging STEM resources",
        },
        {
            highlight: "Persistent",
            subtext: "stereotypes about \"who can excel in STEM\"",
        }
    ]

    return (
        <ul className="flex flex-col md:flex-row justify-between w-full gap-4">
            {challengeStats.map((stat, idx) => (
                <li key={idx} className="flex w-full md:w-auto flex-col items-center gap-2 p-4 rounded-lg bg-white">
                    <h3 className="text-2xl font-bold font-kallisto-heavy uppercase text-periwinkle-light">
                        {stat.highlight}
                    </h3>
                    
                    <p className="text-center md:w-3/4">
                        {stat.subtext}
                    </p>
                </li>
            ))}
        </ul>
    )
}