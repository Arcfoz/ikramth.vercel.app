import { sanityFetch } from "@/sanity/lib/fetch";
import { profilesQuery } from "@/sanity/lib/queries";
import { ProfileType } from "@/types";
import React from "react";
import { BiEnvelope } from "react-icons/bi";

export default async function ContactSection() {

  const profile = await sanityFetch<ProfileType>({
    query: profilesQuery,
  });

  return (
    <main>
      <section>
        <h1 className="text-2xl font-semibold tracking-tight">Contact</h1>
        <p className="text-base leading-relaxed text-zinc-400">
          Feel free to contact me by email at{" "}
        </p>
          <a
            key={profile._id}
            href={`mailto:${profile.email}`}
            className="flex items-center gap-x-2 duration-300 hover:text-zinc-400"
          >
            <BiEnvelope className="text-lg" />
            {profile.email}
          </a>
      </section>
    </main>
  );
}
