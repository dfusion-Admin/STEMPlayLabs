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
                <li key={idx} className="group/challenge relative flex w-full md:w-auto flex-col items-center gap-2 rounded-lg bg-white">
                    <div className="group-hover/challenge:bottom-4 bottom-0 relative w-full h-full flex flex-col justify-center items-center gap-4 bg-white z-10 p-4 rounded-md duration-300">
                        <h3 className="text-2xl font-bold font-kallisto-heavy uppercase text-periwinkle-light">
                            {stat.highlight}
                        </h3>
                        
                        <p className="text-center md:w-3/4">
                            {stat.subtext}
                        </p>
                    </div>

                    <div
                        className="absolute bg-purple w-full h-full rounded-lg"
                    />
                </li>
            ))}
        </ul>
    )
}