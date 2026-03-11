import React, { ReactNode, RefObject } from "react";
import { SectionHeader } from "../Headers";
import FloatingIcons from "../FloatingIcons";

interface SectionLayoutProps {
    children: ReactNode;
    id: string;
    ref?: RefObject<HTMLDivElement | null>;
    title?: string;
    subtitle?: string;
    fullWidth?: boolean;
    theme: string;
}

export const SectionLayout = ( { children, id, ref, theme, title, fullWidth, subtitle } : SectionLayoutProps ) => {
    return (
        <section
            id={id}
            ref={ref}
            className={`${theme} ${!fullWidth && 'px-8'} group relative w-full py-24 gap-8 flex flex-col items-center justify-center overflow-hidden`}
        >
            {title || subtitle ? (
                <div className="gap-8 relative flex flex-col items-center justify-center px-12 w-fit">
                    {title ? (
                        <SectionHeader title={title} />
                    ) : null}

                    {subtitle ? (
                        <p className="w-full z-20 md:w-1/2 text-center">
                            {subtitle}
                        </p>
                    ) : null}

                    <div className="bg-periwinkle-light opacity-0 group-hover:opacity-70 absolute z-0 w-60 aspect-square rounded-full duration-2000" />
                </div>
            ) : null}
            
            <div className="relative z-20 w-full flex items-center justify-center">
                {children}
            </div>

            {title && !title.localeCompare("Research & Insights") && (
                <FloatingIcons />
            )}
        </section>
    )
}