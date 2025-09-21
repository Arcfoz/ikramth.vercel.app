import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "../globals.css";

const sen = Sen({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Presentations - Ikram Tauffiqul Hakim",
  description: "Interactive presentation slides created with Reveal.js and Markdown",
};

export default function SlidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${sen.className} bg-black overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}