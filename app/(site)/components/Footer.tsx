import React from "react";
import { SiSanity } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { FaHeart } from "react-icons/fa6";
import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
import { HiArrowNarrowRight } from "react-icons/hi";
import moment from "moment";
import Link from "next/link";
import AnimatedSection from "@/components/animations/AnimatedSection";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const mainNavigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
  ];

  const socialLinks = [
    { 
      name: "GitHub", 
      href: "https://github.com/arcfoz",
      icon: BiLogoGithub
    },
    { 
      name: "LinkedIn", 
      href: "https://linkedin.com/in/ikramtauffiqulhakim",
      icon: BiLogoLinkedinSquare
    },
  ];

  const techStack = [
    {
      name: "Next.js",
      href: "https://nextjs.org",
      icon: SiNextdotjs
    },
    {
      name: "Sanity",
      href: "https://sanity.io",
      icon: SiSanity
    },
    {
      name: "Vercel",
      href: "https://vercel.com",
      icon: IoLogoVercel
    }
  ];

  return (
    <main className="mx-auto max-w-7xl p-5 md:p-5">
      <AnimatedSection>
        <Separator className="bg-zinc-800" />
      </AnimatedSection>
      <footer className="pt-12 pb-8">
        <StaggerContainer stagger={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Section 1: Brand & About */}
          <StaggerItem>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-zinc-200 mb-4">ikramth.is-a.dev</h3>
              <div className="text-sm text-zinc-500 mb-4 leading-relaxed">
                <p>© {moment().format('YYYY')} ikramth.is-a.dev</p>
                <p className="mt-1">All rights reserved.</p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-x-2 text-sm text-zinc-400">
                Made with <FaHeart className="hover:scale-110 hover:text-red-400 w-4 h-4 flex-shrink-0 transition-all" /> by Ikram Tauffiqul Hakim
              </div>
            </div>
          </StaggerItem>

          {/* Section 2: Navigation & Connect */}
          <StaggerItem>
            <div className="text-center md:text-left">
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-zinc-300 mb-3">Navigation</h4>
                <StaggerContainer stagger={0.1}>
                  <ul className="space-y-2">
                    {mainNavigation.map((link) => (
                      <StaggerItem key={link.href}>
                        <li>
                          <Link
                            href={link.href}
                            className="group text-sm text-zinc-400 hover:text-zinc-200 transition-colors inline-flex items-center gap-1"
                          >
                            {link.name}
                            <HiArrowNarrowRight className="w-3 h-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                          </Link>
                        </li>
                      </StaggerItem>
                    ))}
                  </ul>
                </StaggerContainer>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-zinc-300 mb-3">Connect</h4>
                <div className="flex flex-col gap-3 md:flex-row md:gap-2">
                  {socialLinks.map((link, index) => (
                    <AnimatedSection
                      key={link.href}
                      delay={0.2 + index * 0.1}
                      direction="up"
                      className="w-full md:w-auto"
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group inline-flex items-center justify-center md:justify-start gap-2 px-4 py-2 rounded-lg bg-zinc-800/60 border border-zinc-700/50 hover:bg-zinc-700/70 hover:border-zinc-600 transition-all duration-300 hover:scale-105 text-sm font-medium text-zinc-300 hover:text-zinc-100 w-full md:w-auto"
                      >
                        <link.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                        {link.name}
                      </a>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Section 3: Tech Stack & Legal */}
          <StaggerItem>
            <div className="text-center md:text-left">
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-zinc-300 mb-3">Built With</h4>
                <StaggerContainer stagger={0.15}>
                  <ul className="space-y-3">
                    {techStack.map((tech) => (
                      <StaggerItem key={tech.href}>
                        <li>
                          <a
                            href={tech.href}
                            rel="noreferrer noopener"
                            target="_blank"
                            className="group inline-flex items-center gap-x-3 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
                          >
                            <tech.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            {tech.name}
                          </a>
                        </li>
                      </StaggerItem>
                    ))}
                  </ul>
                </StaggerContainer>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
        
        {/* Bottom Separator */}
        <AnimatedSection delay={0.8}>
          <Separator className="bg-zinc-800 mb-8" />
        </AnimatedSection>
        
        <AnimatedSection delay={1.0}>
          <div className="text-center">
            <p className="text-xs text-zinc-500">
              Designed and developed with modern technologies for optimal performance.
            </p>
          </div>
        </AnimatedSection>
      </footer>
    </main>
  );
}
