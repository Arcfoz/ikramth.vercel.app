import React from "react";
import { getProfile } from "@/sanity/sanity.query";
import { ProfileType } from "@/types";
import HeroSvg from "../../../icons/HeroSvg";
import { socialLinks } from "@/app/data/social";
import Link from "next/link";

export default async function HeroSection() {
  const profiles: ProfileType[] = await getProfile();
  return (
    <main className="mb-10 flex min-h-[60vh] flex-col-reverse items-center justify-between lg:flex-row">
      <section className="">
        {profiles.map((profile) => (
          <div key={profile._id}>
            <h1 className="mb-6 min-w-full text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:min-w-[700px] lg:leading-[3.7rem]">
              {profile.headline}
            </h1>
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              {profile.shortBio}
            </p>

            <ul className="my-5 flex-row items-center gap-x-2 space-y-5 md:my-10 md:flex md:gap-x-6 md:space-y-0">
              {socialLinks.map((value) => (
                <li key={value.id}>
                  <Link
                    href={value.url}
                    {...(value.type === "external" ? { target: "_blank" } : {})}
                    className="border-slate-zinc inline-flex h-12 w-full animate-shimmer items-center justify-center gap-x-1 rounded-md border bg-[linear-gradient(110deg,#090909,45%,#202020,55%,#090909)] bg-[length:200%_100%] px-2 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-offset-2 focus:ring-offset-zinc-50 md:w-auto md:gap-x-5 md:px-6"
                  >
                    <value.icon />
                    {value.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <div className="w-80 py-10 lg:w-full lg:p-16">
        <HeroSvg />
      </div>
    </main>
  );
}
