import React from "react";

export const ImpactContent = () => {
    const impactStats = [
        {
            highlight: "10%",
            description: "Knowledge increase in just 2 weeks with STEMadium."
        },
        {
            highlight: "90%",
            description: "Students liked our games better than other educational games."
        },
        {
            highlight: "17%",
            description: "Difference between treatment and control groups."
        },
        {
            highlight: "Significant",
            description: "Improvement in math confidence and reduced anxiety."
        }
    ]

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 flex-1 w-full gap-4">
            {impactStats.map((stat, idx) => (
                <li key={idx} className="flex flex-col w-full md:w-auto min-h-54 justify-between items-center gap-4 p-4 rounded-lg bg-periwinkle">
                    {idx!== impactStats.length -1 ? (
                        <div className={` bg-periwinkle-light/25 rounded-full h-36 aspect-square flex items-center justify-center`}>
                            <h3 className="text-3xl sm:text-4xl font-bold text-white font-kallisto-heavy">
                                {stat.highlight}
                            </h3>
                        </div>
                    ) : (
                        <div className="h-full flex items-center justify-center">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white font-kallisto-heavy uppercase">
                                {stat.highlight}
                            </h3>
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