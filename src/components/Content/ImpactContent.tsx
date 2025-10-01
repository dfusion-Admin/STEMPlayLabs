import React, { useState } from "react";
import FloatingIcons from "../FloatingIcons";
import { CountUpNumber } from "../CountUpNumber";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

export const ImpactContent = () => {
    const [startAnimation, setStartAnimation] = useState(false);
    const [animationsCompleted, setAnimationsCompleted] = useState(0);


    const impactStats = [
        {
            highlight: 10,
            description: "Knowledge increase in just 2 weeks with STEMadium."
        },
        {
            highlight: 17,
            description: "Difference between treatment and control groups."
        },
        {
            highlight: 90,
            description: "Students liked our games better than other educational games."
        },
        {
            highlight: "Significant",
            description: "Improvement in math confidence and reduced anxiety."
        }
    ]

    return (
        <ul onMouseEnter={() => setStartAnimation(true)} className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 flex-1 w-full gap-4">
            {impactStats.map((stat, idx) => (
                <li key={idx} className="flex flex-col w-full md:w-auto min-h-54 justify-between items-center gap-4 p-4 rounded-lg bg-periwinkle">
                    {idx !== impactStats.length - 1 ? (
                        startAnimation && animationsCompleted >= idx ? (
                            <div className={` bg-periwinkle-light/25 rounded-full h-36 aspect-square flex items-center justify-center`}>
                                <CountUpNumber onEndCount={() => setAnimationsCompleted(animationsCompleted+1)} unit={"%"} value={Number(stat.highlight)} />
                            </div>
                        ) : (
                            <div className={` bg-periwinkle-light/25 rounded-full h-36 aspect-square flex items-center justify-center`}>
                                <FontAwesomeIcon icon={faQuestionCircle} className="text-white animate-pulse text-[6rem] relative" />
                            </div>
                        )
                    ) : (
                        <div className="rounded-full h-36 aspect-square flex items-center justify-center">
                            {animationsCompleted == 3 ? (
                                <div className="flex flex-col items-center ">
                                    <FontAwesomeIcon icon={faArrowCircleUp} className="text-white text-6xl rotate-30 animate-bounce relative" />

                                    <h3 className="text-2xl sm:text-3xl font-bold text-white font-kallisto-heavy uppercase">
                                        {stat.highlight}
                                    </h3>
                                </div>
                            ) : (
                                <div className={` bg-periwinkle-light/25 rounded-full h-36 aspect-square flex items-center justify-center`}>
                                    <FontAwesomeIcon icon={faQuestionCircle} className="text-white animate-pulse text-[6rem] relative" />
                                </div>
                            )}
                            
                        </div>
                    )}
                    
                    <p className="text-center md:w-3/4 text-white font-">
                        {stat.description}
                    </p>
                </li>
            ))}
        </ul>
    )
}