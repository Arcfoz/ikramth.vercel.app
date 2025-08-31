import type { SettingsQueryResult } from "@/types";
import HeroSection from "./components/HeroSection";
import { Spotlight } from "../../components/ui/Spotlight";
import ProjectSection from "./components/ProjectSection";
import SigleContactSection from "./components/SigleContactSection";
import { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/fetch";
import { settingsQuery } from "@/sanity/lib/queries";
import { createMetadata, createJsonLd } from "@/lib/metadata";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const home = await sanityFetch<SettingsQueryResult>({
      query: settingsQuery,
    });

  return createMetadata({
    title: home?.title || "Full-stack Developer & Software Engineer",
    description: `${home?.title ? `${home.title} - ` : ""}${home?.description || "Full-stack developer specializing in modern web technologies, creating innovative solutions and exceptional user experiences."}`,
    path: "/",
    type: "website",
    keywords: ["Full-stack Developer", "Software Engineer", "React", "Next.js", "TypeScript", "Web Development", "ikramth.is-a.dev", "Ikram Tauffiqul Hakim", "Portfolio"],
  });
}

export default async function Home() {
  const home = await sanityFetch<SettingsQueryResult>({
    query: settingsQuery,
  });

  const websiteJsonLd = createJsonLd("WebSite", {
    name: "ikramth.is-a.dev",
    description: home?.description || "Full-stack developer specializing in modern web technologies",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://ikramth.is-a.dev",
  });

  const organizationJsonLd = createJsonLd("Organization", {
    "@type": "Person",
    name: "Ikram Tauffiqul Hakim",
    description: home?.description || "Full-stack developer specializing in modern web technologies",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://ikramth.is-a.dev",
    jobTitle: "Full-stack Developer",
    knowsAbout: [
      "Web Development",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Full-stack Development",
      "Software Engineering"
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance Developer"
    },
  });

  return (
    <>
      <Script
        id="website-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd),
        }}
      />
      <Script
        id="organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <main className="min-h-screen">
        <Spotlight
            className="-top-40 left-0 md:-top-10 md:left-60"
            fill="#CBACF9"
          />
          <Spotlight
            className="md:left-100 -top-60 left-0 md:-top-10"
            fill="#623AFE"
          />
        <div className="relative bg-[#000319] bg-grid-white/[0.05] ">
          <section className="mx-auto max-w-7xl p-5 md:p-5">
            <HeroSection />
          </section>
          <div className="absolute -bottom-5 left-0 mb-5 h-10 w-full bg-gradient-to-t from-[#000319] xl:bottom-0 xl:mb-0 xl:h-32" />
          <div className="absolute left-0 top-0 mb-5 h-10 w-full bg-gradient-to-b from-[#000319] xl:bottom-0 xl:mb-0 xl:h-32" />
        </div>
        <section className="mx-auto max-w-7xl p-5 md:p-5">
          <ProjectSection />
          <SigleContactSection />
        </section>
      </main>
    </>
  );
}
