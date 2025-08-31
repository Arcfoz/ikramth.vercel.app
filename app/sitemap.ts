import { sanityFetch } from "@/sanity/lib/fetch";
import { blogsQuery } from "@/sanity/lib/queries";
import { BlogsQueryResult } from "@/types";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ikramth.is-a.dev";
  const blogs = await sanityFetch<BlogsQueryResult>({ query: blogsQuery });

  const projectEntries: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${baseUrl}/projects/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...projectEntries,
  ];
}
