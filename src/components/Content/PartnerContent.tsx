import Image from "next/image";
import Link from "next/link";
import React from "react";

export const PartnerContent = () => {
    const partners = [
        {
            label: "Department of Education",
            logo: "/images/Partners/Seal_of_the_United_States_Department_of_Education.png",
            link: "https://www.ed.gov/"
        },
        {  
            label: "National Institute of Health",
            logo: "/images/Partners/Logo for National Institute of Health, Institute of General Medical Sciences STEMadium funder.svg",
            link: "https://www.nih.gov/"
        },
        {
            label: "NIEHS",
            logo: "/images/Partners/niehs-logo.svg",
            link: "https://www.niehs.nih.gov/"
        },
        {
            label: "NIGMS",
            logo: "/images/Partners/NIGMS.png",
            link: "https://www.nigms.nih.gov/"
        },
        {
            label: "NIH Office of Director",
            logo: "/images/Partners/nih Office of Director.png",
            link: "http://nih.gov/institutes-nih/nih-office-director"
        },
    ];

    // Duplicate partners for seamless looping
    const carouselPartners = [...partners, ...partners];

    return (
        <div className="relative w-full overflow-hidden py-4">
            <ul
                className="flex gap-8 animate-partner-scroll items-center"
                style={{ minWidth: "100%" }}
            >
                {carouselPartners.map((partner, i) => (
                    <li
                        key={i}
                        className="flex flex-col justify-between items-center gap-4 p-4 hover:shadow-lg duration-300 h-52 bg-white/0 hover:bg-white/20 rounded-xl"
                    >
                        <Link
                            href={partner.link}
                            target="_blank"
                            className="flex justify-center items-center w-full h-full"
                        >
                            <Image
                                src={partner.logo}
                                alt={`${partner.label} Logo`}
                                width={200}
                                height={250}
                                className=" h-full w-full object-contain aspect-auto"
                            />
                        </Link>
                    </li>
                ))}
            </ul>

            <style jsx global>{`
                @keyframes partner-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-partner-scroll {
                    animation: partner-scroll 40s linear infinite;
                    width: max-content;
                }
            `}</style>
        </div>
    );
};