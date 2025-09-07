import React, { RefObject } from "react";
import { STEMButton } from "../Buttons";

export const ContactContent = () => {
    const contactItems = [
        {
            title: "For Educators",
            summary: "Schedule a personalized demo, start with a free trial, or explore bulk pricing options.",
            buttonText: "Contact BA Laris",
            link: "mailto:ba.laris@dfusioninc.com?subject=STEMPlay%20Labs%20-%20Educator%20Inquiries&body=I%20am%20interested%20in%20learning%20more%20about%20STEMPlay%20Labs.%20Please%20provide%20more%20information%20about%3A%0D%0A%0D%0A- Demo%0D%0A- Free%20Trial%0D%0A- Bulk%20Pricing%0D%0A%0D%0AThank%20you!%0D%0A",
        },
        {
            title: "Research Partnerships",
            summary: "Collaborate with us on educational research and development projects.",
            buttonText: "Contact Mia Barrett",
            link: "mailto:mia.barrett@dfusioninc.com?subject=STEMPlay%20Labs%20-%20Research%20Partnerships&body=I%20am%20interested%20in%20learning%20more%20about%20research%20partnerships%20with%20STEMPlay%20Labs.%20Please%20provide%20more%20information.%0D%0A%0D%0AThank%20you!%0D%0A",
        },
        {
            title: "Learn More",
            summary: "Visit our main websit or specific game pages for detailed information.",
            buttonText: "Visit dfusion",
            link: "https://dfusioninc.com/",
        }
    ]
    
    return (
        <ul className="flex flex-col lg:flex-row gap-4 w-full">
            {contactItems.map((item, idx) => (
                <li key={idx} className="flex flex-col flex-1 items-center bg-gray-light rounded-lg p-4 gap-4 hover:shadow-lg duration-300">
                    <h3 className="font-semibold text-2xl text-center">
                        {item.title}
                    </h3>

                    <p className="flex-1 text-center">
                        {item.summary}
                    </p>

                    <STEMButton
                        label={item.buttonText}
                        action={() => { window.open(item.link, "_blank") }}
                    />
                </li>
            ))}
        </ul>
    )
}