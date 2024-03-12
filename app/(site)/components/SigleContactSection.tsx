import { getProfile } from "@/sanity/sanity.query";
import { ProfileType } from "@/types";
import React from "react";
import { BiEnvelope } from "react-icons/bi";

export default async function ContactSection() {
  const profiles: ProfileType[] = await getProfile();
  return (
    <main>
      <section>
        <h1 className="text-2xl font-semibold tracking-tight">Contact</h1>
        <p className="text-base leading-relaxed text-zinc-400">
          Feel free to contact me by email at{" "}
        </p>
        {profiles.map((profile) => (
          <a
            key={profile._id}
            href={`mailto:${profile.email}`}
            className="flex items-center gap-x-2 duration-300 hover:text-zinc-400"
          >
            <BiEnvelope className="text-lg" />
            {profile.email}
          </a>
        ))}
      </section>
    </main>
  );
}
