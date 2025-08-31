import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ikramth.is-a.dev";
  
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio", "/api/draft"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
