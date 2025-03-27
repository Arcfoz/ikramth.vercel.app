import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./components/Footer";
import { draftMode } from "next/headers";
import AlertBanner from "./alert-banner";
import { VisualEditing } from "next-sanity";
import ScrollToTopButton from "./components/ScrollToTopButton";
import NavBar from "./components/NavBar";
import Script from 'next/script'

const sen = Sen({ subsets: ["latin"] });

const options = {
  title: "Ikram Tauffiqul Hakim",
  description:
    "Ikram Tauffiqul Hakim is a App Developer, Visual Designer, and Machine Learning Developer, passionate about crafting user-friendly digital experiences, I'm currently delving into the exciting fields of machine learning and data analytics.",
  url: "https://ikramth.vercel.app/",
  ogImage:
    "https://res.cloudinary.com/dtshpujvo/image/upload/v1710337928/bitmap2_x8imxv.jpg",
};

export const metadata: Metadata = {
  title: options.title,
  metadataBase: new URL(options.url),
  description: options.description,
  openGraph: {
    title: options.title,
    url: options.url,
    siteName: "ikramth.vercel.app",
    locale: "en-US",
    type: "website",
    description: options.description,
    images: options.ogImage,
  },
  alternates: {
    canonical: options.url,
  },
  other: {
    "google-site-verification": "HPO1osDjE2JpSwHA14rPVhIlbWtQelBIkeTGcTShylg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sen.className} bg-[#000319]`}>
        <Script
          async
          src="https://umami-arcfoz.vercel.app/script.js"
          data-website-id="acfcd09a-b4a3-4818-96dd-902ea2a6c8db"
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {draftMode().isEnabled && <AlertBanner />}
          <NavBar />
          {children}
          {draftMode().isEnabled && <VisualEditing />}
          <ScrollToTopButton />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
