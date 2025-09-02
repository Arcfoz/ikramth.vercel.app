import { ProfileType, SkillsByCategoryType } from "@/types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import WorkSection from "./components/WorkSection";
import { CustomPortableText } from "@/components/shared/CustomPortableText";
import Skill from "./components/Skill";
import CerfSection from "./components/CerfSection";
import { Metadata } from "next";
import { FaLocationDot } from "react-icons/fa6";
import SigleContactSection from "../components/SigleContactSection";
import { sanityFetch } from "@/sanity/lib/fetch";
import { profilesQuery, skillsByCategory } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/sanity.image";
import { createMetadata, createJsonLd } from "@/lib/metadata";
import Script from "next/script";
import Breadcrumb from "@/components/shared/Breadcrumb";
import AnimatedSection from "@/components/animations/AnimatedSection";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

function extractPlainText(portableText: any): string {
  if (!portableText || !Array.isArray(portableText)) return "";
  return portableText.map((block: { children?: { text: string }[] }) => 
    block.children?.map(child => child.text).join(" ") || ""
  ).join(" ");
}

export async function generateMetadata(): Promise<Metadata> {
  const profile = await sanityFetch<ProfileType>({ query: profilesQuery });
  const description = extractPlainText(profile?.fullBio) || "Learn more about Ikram Tauffiqul Hakim - Full-stack developer specializing in modern web technologies.";
  
  return createMetadata({
    title: "About",
    description,
    path: "/about",
    type: "profile",
    image: profile?.profileImage ? urlFor(profile.profileImage).url() : undefined,
    keywords: ["About", "Profile", "Full-stack Developer", "Software Engineer", "Biography", "ikramth.is-a.dev", "Ikram Tauffiqul Hakim"],
  });
}

export default async function About() {
  const [profile, skillsData] = await Promise.all([
    sanityFetch<ProfileType>({ query: profilesQuery }),
    sanityFetch<SkillsByCategoryType>({ query: skillsByCategory }),
  ]);

  const personJsonLd = createJsonLd("Person", {
    name: profile?.fullName || "Ikram Tauffiqul Hakim",
    description: extractPlainText(profile?.fullBio) || "Full-stack developer specializing in modern web technologies",
    image: profile?.profileImage ? urlFor(profile.profileImage).url() : undefined,
    jobTitle: "Full-stack Developer",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    address: {
      "@type": "Place",
      name: profile?.location || "Indonesia",
    },
    sameAs: [
      // Add social media URLs here if available in profile data
    ],
  });

  return (
    <>
      <Script
        id="person-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd),
        }}
      />
      <main className="min-h-screen">
        <div className="relative bg-grid-black/[0.96] bg-[#000319] dark:bg-grid-white/[0.05]">
          <main className="relative z-10 mx-auto max-w-7xl p-5">
            <Breadcrumb items={[
              { name: "About", href: "/about", current: true }
            ]} />
            
            <div key={profile?._id}>
            <section id="about-intro" className="grid grid-cols-1 justify-items-center lg:grid-cols-2">
              <StaggerContainer stagger={0.2} className="order-2 lg:order-none">
                <StaggerItem>
                  <h3 className="mb-3 flex items-center gap-x-2">
                    <FaLocationDot className="text-lg transition-colors group-hover:text-zinc-300" />
                    {profile.location}
                  </h3>
                </StaggerItem>
                <StaggerItem>
                  <h1 className="mb-8 text-4xl font-bold lg:text-5xl lg:leading-tight">
                    {profile.fullName}
                  </h1>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex flex-col gap-y-3 leading-relaxed text-zinc-400">
                    <PortableText
                      value={profile.fullBio}
                      components={CustomPortableText}
                    />
                  </div>
                </StaggerItem>
              </StaggerContainer>
              
              <AnimatedSection 
                direction="right" 
                delay={0.4}
                className="order-none mb-12 flex flex-col gap-y-8 justify-self-center lg:order-1 lg:justify-self-end"
              >
                <div className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      className="mb-4 rounded-2xl bg-[#1d1d20] bg-top object-cover transition-all duration-500 group-hover:scale-105"
                      src={urlFor(profile.profileImage).url()}
                      width={400}
                      height={400}
                      quality={100}
                      alt={profile.profileImage.alt}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl" />
                  </div>
                  <SigleContactSection />
                </div>
              </AnimatedSection>
            </section>
            
            <section className="max-w-xl lg:max-w-xl">
              <AnimatedSection delay={0.8}>
                <div id="skills">
                  <Skill skillsData={skillsData} />
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={1.0}>
                <div id="experience">
                  <WorkSection />
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={1.2}>
                <div id="certifications">
                  <CerfSection />
                </div>
              </AnimatedSection>
            </section>
          </div>
        </main>
        <div className="absolute -bottom-5 left-0 z-0 mb-5 h-10 w-full bg-gradient-to-t from-[#000319] xl:bottom-0 xl:mb-0 xl:h-32" />
        <div className="absolute left-0 top-0 z-0 mb-5 h-10 w-full bg-gradient-to-b from-[#000319] xl:bottom-0 xl:mb-0 xl:h-32" />
      </div>
    </main>
    </>
  );
}
