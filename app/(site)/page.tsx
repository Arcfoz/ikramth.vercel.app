import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import HeroSection from "./components/HeroSection";
import { Spotlight } from "../../components/ui/Spotlight";
import ProjectSection from "./components/ProjectSection";
import SigleContactSection from "./components/SigleContactSection";

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="min-h-screen">
      <div className="relative bg-white bg-grid-black/[0.96] dark:bg-black dark:bg-grid-white/[0.05]">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <section className="mx-auto max-w-7xl p-5 md:p-5">
          <HeroSection />
        </section>
        <div className="absolute -bottom-5 left-0 mb-5 h-10 w-full bg-gradient-to-t from-black xl:bottom-0 xl:mb-0 xl:h-32" />
        <div className="absolute left-0 top-0 mb-5 h-10 w-full bg-gradient-to-b from-black xl:bottom-0 xl:mb-0 xl:h-32" />
      </div>
      <section className="mx-auto max-w-7xl p-5 md:p-5">
        <ProjectSection />
        <SigleContactSection />
      </section>
    </main>
  );
}
