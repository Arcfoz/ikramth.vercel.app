import { ProjectCard } from "@/components/ui/ProjectCard";
import { Metadata } from "next";
import Template from "@/app/(site)/template";
import { createMetadata, createJsonLd } from "@/lib/metadata";
import { sanityFetch } from "@/sanity/lib/fetch";
import { blogsQuery } from "@/sanity/lib/queries";
import { BlogsQueryResult } from "@/types";
import Script from "next/script";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ScrollToTopOnRoute from "@/components/shared/ScrollToTopOnRoute";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description: "Explore my portfolio of web development projects, featuring modern technologies like React, Next.js, TypeScript, and more. Showcasing full-stack applications and innovative solutions.",
  path: "/projects",
  keywords: ["Projects", "Portfolio", "Web Development", "React", "Next.js", "TypeScript", "Full-stack", "Applications", "ikramth.is-a.dev", "Ikram Tauffiqul Hakim"],
});
export default async function Projects() {
  const projects = await sanityFetch<BlogsQueryResult>({ query: blogsQuery });

  const projectListJsonLd = createJsonLd("ItemList", {
    name: "Projects by Ikram Tauffiqul Hakim",
    description: "Portfolio of web development projects showcasing modern technologies and innovative solutions",
    numberOfItems: projects.length,
    items: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.shortdesc,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects/${project.slug}`,
        dateCreated: project.year ? `${project.year}-01-01` : undefined,
        creator: {
          "@type": "Person",
          name: "Ikram Tauffiqul Hakim",
        },
      },
    })),
  });

  return (
    <>
      <ScrollToTopOnRoute />
      <Script
        id="projects-list-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectListJsonLd),
        }}
      />
      <Template>
        <div className="relative z-10 bg-grid-black/[0.96] bg-[#000319] dark:bg-grid-white/[0.05]">
          <main className="relative z-10 mx-auto max-w-4xl space-y-6 p-5">
            <Breadcrumb items={[
              { name: "Projects", href: "/projects", current: true }
            ]} />
            
            <div>
              <h1 className="text-3xl font-bold mb-6">Projects</h1>
              <ProjectCard />
            </div>
          </main>
          <div className="absolute -bottom-5 left-0 z-0 mb-5 h-10 w-full bg-gradient-to-t from-[#000319] xl:bottom-0 xl:mb-0 xl:h-32" />
          <div className="absolute left-0 top-0 z-0 mb-5 h-10 w-full bg-gradient-to-b from-[#000319] xl:bottom-0 xl:mb-0 xl:h-32" />
        </div>
      </Template>
    </>
  );
}
