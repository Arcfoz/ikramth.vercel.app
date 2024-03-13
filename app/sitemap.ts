import { sanityFetch } from "@/sanity/lib/fetch";
import { blogsQuery } from "@/sanity/lib/queries";
import { BlogsQueryResult } from "@/types";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await sanityFetch<BlogsQueryResult>({ query: blogsQuery });

  const projectEntries: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects/${blog.slug}`,
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
