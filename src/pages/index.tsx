import { PageSubheader } from "@/components/Headers";
import { STEMButton } from "@/components/Buttons";
import { PageLayout } from "@/components/Layouts/PageLayout";
import { useRef } from "react";
import { ChallengeContent } from "@/components/Content/ChallengeContent";
import { SectionLayout } from "@/components/Layouts/SectionLayout";
import { GamesContent } from "@/components/Content/GamesContent";
import { ImpactContent } from "@/components/Content/ImpactContent";
import { ResearchContent } from "@/components/Content/ResearchContent";
import { ContactContent } from "@/components/Content/ContactContent";
import { faCartShopping, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { PartnerContent } from "@/components/Content/PartnerContent";
import { TestimonialContent } from "@/components/Content/TestimonialContent";
import { AboutUsContent } from "@/components/Content/AboutUsContent";
import Image from "next/image";

export default function Home() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const challengeRef = useRef<HTMLDivElement | null>(null);
  const gameRef = useRef<HTMLDivElement | null>(null);
  const impactRef = useRef<HTMLDivElement | null>(null);
  const researchRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  
  const sections=[
    {
      title: "The Challenge We're Solving",
      subtitle: "Traditional education methods are failing to engage students in STEM subjects, creating gaps in learning and limiting future opportunities.",
      ref: challengeRef,
      theme: "bg-gray-light text-black-light",
      content: <ChallengeContent />
    },
    {
      title: "Our Game-Based Solutions",
      subtitle: "Evidence-based educational games that make STEM learning fun, relevant, and accessible for all students.",
      ref: gameRef,
      theme: "bg-white text-black-light",
      content: <GamesContent />
    },
    {
      title: "Proven Educational Impact",
      subtitle: "Our games deliver measurable results that advance learnig equity and inspire STEM career engagement.",
      ref: impactRef,
      theme: "bg-gradient-to-br from-periwinkle to-blue text-white",
      content: <ImpactContent />
    },
    {
      title: "About Us",
      subtitle: "Learn more about STEM Play Labs, our mission, and the passionate team dedicated to transforming STEM education.",
      ref: aboutRef,
      theme: "bg-white text-black-light",
      content: <AboutUsContent />
    },
    {
      title: "Research & Insights",
      subtitle: "Discover the latest findings from our evidence-based research and practical insights for transforming STEM education.",
      ref: researchRef,
      theme: "bg-gray-light text-black-light",
      content: <ResearchContent />
    },
    {
      title: "Our Funding Partners",
      subtitle: "We are proud to collaborate with leading organizations dedicated to advancing STEM education and equity.",
      theme: "bg-blue-light text-black-light",
      fullWidth: true,
      content: <PartnerContent />
    },
    {
      title: "Testimonials",
      // subtitle: "Hear from educators and students whose lives have been transformed by our engaging STEM games.",
      theme: "bg-gray-light text-black-light",
      content: <TestimonialContent />
    },
    {
      title: "Ready to Transform Learning?",
      subtitle: "Join thousands of educators and students already using STEMPlay Labs games to engage and improve learning outcomes.",
      ref: contactRef,
      theme: "bg-white text-black-light",
      content: <ContactContent />
    }
  ]

  return (
    <PageLayout
      homeRef={homeRef}
      challengeRef={challengeRef}
      gameRef={gameRef}
      aboutRef={aboutRef}
      impactRef={impactRef}
      researchRef={researchRef}
      contactRef={contactRef}
    >
      <div  className="relative flex flex-col items-center justify-center gap-4 px-8 py-24 md:px-48 bg-gradient-to-br from-purple to-periwinkle w-full h-screen lg:h-[85vh] overflow-hidden">
        <div ref={homeRef} className="absolute top-0 left-0 opacity-0" />
        
        <div className="w-full h-full z-10 relative flex flex-col lg:flex-row items-center justify-center gap-4">
          <div className="flex items-center justify-center z-10">
            <Image
              width={1080}
              height={720}
              src="/images/STEMPlay Labs Logo Vertical 1 Color White.png"
              alt="STEMPlay Labs Logo"
              className="w-52 sm:w-2/3 md:w-4/5 lg:w-full min-w-48 max-w-96 aspect-auto" 
            />
          </div>

          <div className="lg:flex-1 flex flex-col items-center justify-center gap-4 lg:gap-12 text-center text-white z-10 bg-white/0 lg:bg-white/10 p-4 lg:p-8 rounded-xl">
            <PageSubheader
              title="It!"
              animText={["Game", "Solve", "Learn", "Play", "STEM"]}
            />

            <p className="text-white text-center w-full">
              Transforming how students learn math and science by turning real-world challenges into engaging game-based learning experiences.
            </p>

            <div className="flex flex-col lg:flex-row items-center gap-4">
              <STEMButton
                icon={faCartShopping}
                label="Shop Our Games"
                action={() => { gameRef.current?.scrollIntoView({ behavior: 'smooth' }) }}
              />

              <STEMButton
                icon={faWandMagicSparkles}
                label="See the Magic"
                hollow
                action={() => { impactRef.current?.scrollIntoView({ behavior: 'smooth' }) }}
              />
            </div>
          </div>
        </div>

        <div className="absolute z-0 top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <video
            autoPlay
            muted
            loop
            src={"/videos/AtomCloud-compressed.mp4"}
            itemType="video/mp4"
            className="absolute left-0 top-1/2 -translate-y-1/2 blur-sm h-[4000px] aspect-video object-cover opacity-10 "
            ref={video => {
              if (video) video.playbackRate = 0.25;
            }}
          />
        </div>
      </div>

      {sections.map((section, idx) => (
        <SectionLayout
          key={idx}
          title={section.title}
          subtitle={section.subtitle}
          fullWidth={section.fullWidth}
          ref={section.ref}
          theme={section.theme}
        >
          {section.content}
        </SectionLayout>
      ))}
    </PageLayout>
  )
}