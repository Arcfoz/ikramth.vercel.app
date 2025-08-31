import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ikramth.is-a.dev";
const siteName = "ikramth.is-a.dev";
const defaultDescription = "Full-stack developer specializing in modern web technologies, creating innovative solutions and exceptional user experiences.";

export const siteConfig = {
  baseUrl,
  siteName,
  defaultDescription,
  defaultImage: "https://res.cloudinary.com/dtshpujvo/image/upload/v1710337928/bitmap2_x8imxv.jpg",
  twitterHandle: "@ikramtauffiqul", // Update with actual handle if available
};

interface CreateMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  type?: "website" | "article" | "profile";
  keywords?: string[];
}

export function createMetadata({
  title,
  description = siteConfig.defaultDescription,
  path = "",
  image = siteConfig.defaultImage,
  noIndex = false,
  publishedTime,
  modifiedTime,
  type = "website",
  keywords = [],
}: CreateMetadataOptions = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.siteName}` : siteConfig.siteName;
  const url = `${siteConfig.baseUrl}${path}`;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords.join(", ") : undefined,
    authors: [{ name: "Ikram Tauffiqul Hakim" }],
    creator: "Ikram Tauffiqul Hakim",
    publisher: siteConfig.siteName,
    metadataBase: new URL(siteConfig.baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title || siteConfig.siteName,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: siteConfig.twitterHandle,
      site: siteConfig.twitterHandle,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "axmlIY83P3-hPNKgIxcUtgfhKq1LQkuwDBxHOVvah8U",
    },
  };

  // Add article-specific metadata
  if (type === "article" && (publishedTime || modifiedTime)) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: "article",
      publishedTime,
      modifiedTime,
    };
  }

  return metadata;
}

export function createJsonLd(type: "Person" | "WebSite" | "Article" | "Organization" | "ItemList" | "BreadcrumbList", data: any) {
  const baseStructure = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  switch (type) {
    case "Person":
      return {
        ...baseStructure,
        url: siteConfig.baseUrl,
        image: data.image || siteConfig.defaultImage,
        sameAs: data.sameAs || [],
      };
    
    case "WebSite":
      return {
        ...baseStructure,
        url: siteConfig.baseUrl,
        name: siteConfig.siteName,
        description: siteConfig.defaultDescription,
        author: {
          "@type": "Person",
          name: "Ikram Tauffiqul Hakim",
        },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${siteConfig.baseUrl}/projects?search={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
          },
          {
            "@type": "ReadAction",
            target: [`${siteConfig.baseUrl}/about`, `${siteConfig.baseUrl}/projects`],
          },
        ],
        mainEntity: {
          "@type": "Person",
          name: "Ikram Tauffiqul Hakim",
          url: `${siteConfig.baseUrl}/about`,
        },
        sameAs: [
          "https://github.com/arcfoz",
          "https://linkedin.com/in/ikramtauffiqulhakim",
        ],
      };
    
    case "Article":
      return {
        ...baseStructure,
        url: `${siteConfig.baseUrl}${data.path || ""}`,
        author: {
          "@type": "Person",
          name: "Ikram Tauffiqul Hakim",
        },
        publisher: {
          "@type": "Person",
          name: "Ikram Tauffiqul Hakim",
        },
      };

    case "Organization":
      return {
        ...baseStructure,
        name: siteConfig.siteName,
        url: siteConfig.baseUrl,
        logo: siteConfig.defaultImage,
        sameAs: [
          "https://github.com/arcfoz",
          "https://linkedin.com/in/ikramtauffiqulhakim",
        ],
        founder: {
          "@type": "Person",
          name: "Ikram Tauffiqul Hakim",
        },
      };

    case "ItemList":
      return {
        ...baseStructure,
        numberOfItems: data.numberOfItems,
        itemListElement: data.items || [],
      };

    case "BreadcrumbList":
      return {
        ...baseStructure,
        itemListElement: data.items || [],
      };
    
    default:
      return baseStructure;
  }
}