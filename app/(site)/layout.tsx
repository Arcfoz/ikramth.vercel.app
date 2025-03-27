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
