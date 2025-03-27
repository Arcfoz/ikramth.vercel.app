import { ProjectCard } from "@/components/ui/ProjectCard";
import { Metadata } from "next";
import Template from "@/app/(site)/template";

export const metadata: Metadata = {
  title: "Projects | Ikram Tauffiqul Hakim",
  metadataBase: new URL("https://ikramth.is-a.dev/projects"),
  description:
    "Learn more about my skills, experience and technical background",
  openGraph: {
    title: "Projects | Ikram Tauffiqul H",
    url: "https://ikramth.is-a.dev/projects",
    description:
      "Learn more about my skills, experience and technical background",
    images:
      "https://res.cloudinary.com/dtshpujvo/image/upload/v1710337928/bitmap2_x8imxv.jpg",
  },
};
export default async function Projects() {
  return (
    <Template>
      <div className="relative z-10 bg-grid-black/[0.96] bg-[#000319] dark:bg-grid-white/[0.05]">
        <main className="relative z-10 mx-auto max-w-4xl space-y-6 p-5">
          <ProjectCard />
        </main>
        <div className="absolute -bottom-5 left-0 z-0 mb-5 h-10 w-full bg-gradient-to-t from-[#000319] xl:bottom-0 xl:mb-0 xl:h-32" />
        <div className="absolute left-0 top-0 z-0 mb-5 h-10 w-full bg-gradient-to-b from-[#000319] xl:bottom-0 xl:mb-0 xl:h-32" />
      </div>
    </Template>
  );
}
