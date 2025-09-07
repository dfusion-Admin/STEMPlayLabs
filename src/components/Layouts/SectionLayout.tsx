import React, { ReactNode, RefObject } from "react";
import { SectionHeader } from "../Headers";

interface SectionLayoutProps {
    children: ReactNode,
    ref: RefObject<HTMLDivElement | null>;
    title: string;
    subtitle: string;
    theme: string;
}

export const SectionLayout = ( { children, ref, theme, title, subtitle } : SectionLayoutProps ) => {
    return (
        <section
            ref={ref}
            className={`${theme} w-full px-8 py-24 gap-8 flex flex-col items-center justify-center`}
        >
            <div className="gap-8 flex flex-col items-center justify-center w-full">
                <SectionHeader title={title} />

                <p className="w-full md:w-1/2 text-center">
                    {subtitle}
                </p>
            </div>
            
            {children}
        </section>
    )
}