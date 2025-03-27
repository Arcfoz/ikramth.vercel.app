import type { SettingsQueryResult } from "@/types";
import HeroSection from "./components/HeroSection";
import { Spotlight } from "../../components/ui/Spotlight";
import ProjectSection from "./components/ProjectSection";
import SigleContactSection from "./components/SigleContactSection";
import { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/fetch";
import { settingsQuery } from "@/sanity/lib/queries";

export async function generateMetadata(): Promise<Metadata> {
  const home = await sanityFetch<SettingsQueryResult>({
      query: settingsQuery,
    });

  return {
    title: "Ikram Tauffiqul Hakim",
    description: `${home.title} - ${home.description}`,
    openGraph: {
      title: "Ikram Tauffiqul Hakim",
      url: "https://ikramth.is-a.dev/about",
      description: `${home.title} - ${home.description}`,
      images:
        "https://res.cloudinary.com/dtshpujvo/image/upload/v1710337928/bitmap2_x8imxv.jpg",
    },
  };
}

export default async function Home() {
  return (
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
  );
}
