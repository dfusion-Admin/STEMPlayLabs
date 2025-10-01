import React from "react";

export const AboutUsContent = () => {
    const aboutData = [
        {
            highlight: "Our Story",
            paragraphs: [
                "STEMPlay Labs was born from a simple yet powerful observation: traditional STEM education wasn't reaching the students who needed it most. Founded by BA Laris, our journey began with watching too many bright, curious kids lose their spark when faced with abstract math problems and disconnected science concepts.",
                "As educators and researchers, we knew there had to be a better way. We saw students light up when talking about their favorite sports teams or environmental issues in their communities, yet struggle to engage with the same mathematical and scientific concepts in the classroom. That's when we realized the solution wasn't just about making learning fun—it was about making it relevant."
            ]
        },
        {
            highlight: "Our Mission",
            paragraphs: [
                "We transform how students learn math and science by turning real-world challenges into engaging game-based learning experiences. Every game we create is designed with one goal in mind: helping students see themselves as capable STEM learners, regardless of their background or previous academic experience."
            ]
        },
        {
            highlight: "What Makes Us Different",
            subsections: [
                {
                    header: "We're Research Nerds (In the Best Way)",
                    text: "As a division of dfusion Inc., we don't just wing it—we prove it. Our randomized controlled trials show students using STEMadium gained 10% more knowledge in two weeks while control groups actually lost ground. Fantasy Sports Math League doesn't just make math fun; it measurably reduces math anxiety. We've got the receipts to back up the fun."
                },
                {
                    header: "We Play Favorites (With Underserved Kids)",
                    text: "Here's our not-so-secret bias: our games work best for students who've been failed by traditional STEM education. The kids told they \"aren't math people\"? They become our biggest success stories."
                },
                {
                    header: "Real World = Real Learning",
                    text: "Forget abstract word problems about trains traveling nowhere. Our students calculate NFL player efficiency ratings, investigate actual pollution in their homes, and solve environmental health mysteries that matter to their communities. When learning connects to life, magic happens."
                },
                {
                    header: "Standards? We've Got Those Too",
                    text: "Don't worry, administrators—we speak your language. Every game aligns with curriculum standards while delivering the engagement that makes learning stick. Teachers get accountability; students get awesome. Win-win."
                }
            ]
        },
        {
            highlight: "Our Team",
            members: [
                {
                    name: "BA Laris",
                    role: "Founder & Director",
                    bio: "BA Laris brings decades of experience in educational technology and a passion for reaching every learner. Under BA's leadership, STEMPlay Labs has developed three groundbreaking products that serve students from elementary through high school."
                },
                {
                    name: "Mia Barrett",
                    role: "Director of Education Research and Development",
                    bio: "Mia Barrett leads our research initiatives and ensures every game we create is grounded in evidence-based practices. With extensive experience in program development and evaluation, Mia ensures every game we create delivers measurable impact."
                }
            ],
            paragraphs: [
                "Our broader team includes curriculum wizards, game design geniuses, and education researchers who all share one obsession: proving that learning can be the highlight of any kid's day."
            ]
        }
    ]

    return (
        <ul className="w-full flex flex-col items-center gap-8">
            {aboutData.map((section, idx) => (
                <li key={idx} className="flex flex-col gap-4 w-full lg:max-w-4/5">
                    <h3 className="text-2xl font-bold font-kallisto-heavy text-periwinkle-light">
                        {section.highlight}
                    </h3>

                    {section.members && (
                        <ul className="flex flex-col lg:flex-row gap-8">
                            {section.members.map((member, mIdx) => (
                                <li key={mIdx} className="flex flex-col gap-1">
                                    <h4 className="text-lg font-semibold">
                                        {member.name} - <span className="font-normal italic">{member.role}</span>
                                    </h4>
                                    <p className="text-justify">
                                        {member.bio}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    )}

                    {section.paragraphs && section.paragraphs.map((para, pIdx) => (
                        <p key={pIdx} className="text-justify">
                            {para}
                        </p>
                    ))}

                    {section.subsections && (
                        <ul className="flex flex-col lg:flex-row flex-wrap">
                            {section.subsections.map((subsec, sIdx) => (
                                <li key={sIdx} className={`${sIdx%2 > 0 ? "lg:pl-4" : "lg:pr-4"} flex flex-col gap-2 basis-full lg:basis-1/2 pb-4`}>
                                    <h4 className="text-lg font-semibold">
                                        {subsec.header}
                                    </h4>
                                    <p className="text-justify">
                                        {subsec.text}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    )
}