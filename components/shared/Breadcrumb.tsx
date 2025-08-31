import Link from "next/link";
import { ChevronRightIcon, HomeIcon } from "lucide-react";
import Script from "next/script";
import { createJsonLd } from "@/lib/metadata";

interface BreadcrumbItem {
  name: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ name: "Home", href: "/" }, ...items];

  const breadcrumbJsonLd = createJsonLd("BreadcrumbList", {
    items: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${process.env.NEXT_PUBLIC_BASE_URL || "https://ikramth.is-a.dev"}${item.href}`,
    })),
  });

  return (
    <>
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-zinc-400">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            
            return (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRightIcon className="h-4 w-4 text-zinc-600 mx-2" />
                )}
                
                {index === 0 ? (
                  <Link 
                    href={item.href}
                    className="inline-flex items-center gap-1 text-zinc-400 hover:text-zinc-200 transition-colors"
                  >
                    <HomeIcon className="h-4 w-4" />
                    <span className="sr-only">Home</span>
                  </Link>
                ) : isLast ? (
                  <span className="text-zinc-200 font-medium" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-zinc-400 hover:text-zinc-200 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}