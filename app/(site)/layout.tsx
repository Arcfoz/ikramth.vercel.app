import type { Metadata, Viewport } from "next";
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
import { createMetadata } from "@/lib/metadata";

const sen = Sen({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000319' }
  ],
}

export const metadata: Metadata = createMetadata({
  title: "Full-stack Developer & Software Engineer",
  description: "Ikram Tauffiqul Hakim - Full-stack developer specializing in modern web technologies, creating innovative solutions and exceptional user experiences.",
  keywords: ["Full-stack Developer", "Software Engineer", "React", "Next.js", "TypeScript", "Web Development", "Ikram Tauffiqul Hakim"],
});

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
