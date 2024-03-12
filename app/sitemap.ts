import { getProject } from "@/sanity/sanity.query";
import { ProjectType } from "@/types";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects: ProjectType[] = await getProject();

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects/${project.slug}`,
    changeFrequency: "weekly",
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      changeFrequency: "weekly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      changeFrequency: "weekly",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
      changeFrequency: "weekly",
    },
    ...projectEntries,
  ];
}
