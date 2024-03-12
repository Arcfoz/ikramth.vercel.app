import { ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import WorkSection from "./components/WorkSection";
import { sanityFetch } from "@/sanity/sanity.client";
import { profileQuery } from "@/sanity/sanity.query";
import { CustomPortableText } from "@/components/shared/CustomPortableText";
import Skill from "./components/Skill";
import CerfSection from "./components/CerfSection";
import { Metadata } from "next";
import { FaLocationDot } from "react-icons/fa6";
import SigleContactSection from "../components/SigleContactSection";

export const metadata: Metadata = {
  title: "About | Ikram Tauffiqul Hakim",
  metadataBase: new URL("https://ikramth.vercel.app/about"),
  description:
    "Learn more about my skills, experience and technical background",
  openGraph: {
    title: "About | Ikram Tauffiqul H",
    url: "https://ikramth.vercel.app/about",
    description:
      "Learn more about my skills, experience and technical background",
    images:
      "https://res.cloudinary.com/dtshpujvo/image/upload/v1709750214/bitmap_kc4aek.jpg",
  },
};

export default async function About() {
  const profile: ProfileType[] = await sanityFetch({
    query: profileQuery,
    tags: ["profile"],
  });

  return (
    <main className="min-h-screen">
      <div className="relative bg-white bg-grid-black/[0.96] dark:bg-black dark:bg-grid-white/[0.05]">
        <main className="relative z-10 mx-auto max-w-7xl p-5">
          {profile.map((profile) => (
            <div key={profile._id}>
              <section className="grid grid-cols-1 justify-items-center lg:grid-cols-2">
                <div className="order-2 lg:order-none">
                  <h3 className="mb-3 flex items-center gap-x-2">
                    <FaLocationDot className="text-lg" />
                    {profile.location}
                  </h3>
                  <h1 className="mb-8 text-4xl font-bold lg:text-5xl lg:leading-tight">
                    {profile.fullName}
                  </h1>
                  <div className="flex flex-col gap-y-3 leading-relaxed text-zinc-400">
                    <PortableText
                      value={profile.fullBio}
                      components={CustomPortableText}
                    />
                  </div>
                </div>
                <div className="order-none mb-12 flex flex-col gap-y-8 justify-self-center lg:order-1 lg:justify-self-end ">
                  <div>
                    <Image
                      className="mb-4 rounded-2xl bg-[#1d1d20] bg-top object-cover"
                      src={profile.profileImage.image}
                      width={400}
                      height={400}
                      quality={100}
                      alt={profile.profileImage.alt}
                    />
                    <SigleContactSection />
                  </div>
                </div>
              </section>
              <section className="max-w-xl lg:max-w-xl">
                <Skill />
                <WorkSection />
                <CerfSection />
              </section>
            </div>
          ))}
        </main>
        <div className="absolute -bottom-5 left-0 z-0 mb-5 h-10 w-full bg-gradient-to-t from-black xl:bottom-0 xl:mb-0 xl:h-32" />
        <div className="absolute left-0 top-0 z-0 mb-5 h-10 w-full bg-gradient-to-b from-black xl:bottom-0 xl:mb-0 xl:h-32" />
      </div>
    </main>
  );
}
