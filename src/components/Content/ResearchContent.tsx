import Link from "next/link";
import React from "react";
import { STEMButton } from "../Buttons";

export const ResearchContent = () => {
    const content = [
        {
            title: "STEMadium's Impact on Reducing Summer Learning Loss",
            summary: "Our randomized controlled trial shows that students using STEMadium for just two weeks increased their knowledge by 10% while control groups declined by 7% - a 17% total difference.",
            type: "Research Study",
            duration: "5 min",
            published: "January 15, 2025",
            link: ""
        },
        {
            title: "Implementing Game-Based Learning in Middle School Math",
            summary: "Teachers share their experiences and strategies for successfully integrating Fantasy Sports Math League into their curriculum, including classroom management tips and assessment approaches.",
            type: "Best Practices",
            duration: "7 min",
            published: "January 8, 2025",
            link: ""
        },
        {
            title: "Breaking Down STEM Stereotypes Through Sports-Based Learning",
            summary: "How connecting STEM concepts to familiar contexts like sports helps challenge persistent stereotypes about \"who can be bood at STEM\" and increases engagement among diverse learners.",
            type: "Industy Insights",
            duration: "6 min",
            published: "December 20, 2024",
            link: ""
        },
        {
            title: "Environmental Health Literacy: Early Results from S³E Beta Testing",
            summary: "Preliminary findings from our environmental health simulation game show significant improvements in students\' understanding of pollution sources and their confidence in taking action.",
            type: "Research Preview",
            duration: "4 min",
            published: "December 15, 2024",
            link: ""
        },
        {
            title: "Collaborating with Schools: Lessons from the Field",
            summary: "Stories from our educator partnerships across different districts, highlighting challenges, successes, and the real impact of game-based STEM learning on student outcomes.",
            type: "Partnership Spotlight",
            duration: "8 min",
            published: "December 5, 2024",
            link: ""
        },
        {
            title: "The Role of Gamification in Addressing the Math Crisis",
            summary: "With 72% of 8th graders scoring below proficient in math, we explore how game-based learning can be part of the solution to America\'s math education challenges.",
            type: "Research Study",
            duration: "10 min",
            published: "November 28, 2025",
            link: ""
        }
    ]

    return (
        <div className="w-full flex flex-col gap-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {content.map((item, idx) => (
                    <li key={idx} className="flex flex-col bg-white rounded-lg p-4 gap-2 hover:shadow-lg duration-300">
                        <h3 className="font-semibold text-lg">
                            {item.title}
                        </h3>
                        
                        <div className="flex justify-between items-center text-sm ">
                            <div className="bg-gray-light px-4 py-1 rounded-full">
                                <p className="text-nowrap ">
                                    {item.type}
                                </p>
                            </div>

                            <p>
                                {item.published}
                            </p>
                        </div>
                        
                        <p className="flex-1 py-4 border-t-2 border-gray-light">
                            {item.summary}
                        </p>

                        <div className="flex justify-between items-center text-sm text-gray">
                            <p className="italic">
                                {item.duration} read
                            </p>

                            <Link href={item.link} target="_blank" className="text-right text-blue hover:brightness-75 font-bold duration-300">
                                Read More
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="flex justify-center w-full">
                <STEMButton
                    label="View All Posts"
                    action={() => { window.open("https://dfusioninc.com/insights/", "_blank") }}
                />
            </div>
        </div>
    )
}