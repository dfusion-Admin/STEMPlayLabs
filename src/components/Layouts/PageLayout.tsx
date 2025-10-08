import React, { ReactNode, RefObject } from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

interface PageLayoutProps {
    children: ReactNode;
    homeRef: RefObject<HTMLDivElement | null>;
    aboutRef: RefObject<HTMLDivElement | null>;
    challengeRef: RefObject<HTMLDivElement | null>;
    gameRef: RefObject<HTMLDivElement | null>;
    impactRef: RefObject<HTMLDivElement | null>;
    researchRef: RefObject<HTMLDivElement | null>;
    contactRef: RefObject<HTMLDivElement | null>;
}
export const PageLayout = ({ children, homeRef, aboutRef, challengeRef, gameRef,impactRef, researchRef, contactRef }: PageLayoutProps) => {
    return (
        <main className="w-full min-h-screen flex flex-col text-black-light">
            <Navbar
                homeRef={homeRef}
                aboutRef={aboutRef}
                gameRef={gameRef}
                impactRef={impactRef}
                researchRef={researchRef}
                contactRef={contactRef}
            />
            
            <section className="min-h-screen overflow-y-scroll w-full flex flex-1 flex-col items-center justify-center">
                {children}
            </section>

            <Footer
                homeRef={homeRef}
                challengeRef={challengeRef}
                aboutRef={aboutRef}
                gameRef={gameRef}
                impactRef={impactRef}
                researchRef={researchRef}
                contactRef={contactRef}
            />
        </main>
    )
}