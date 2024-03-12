import { getProfile, getProject } from "@/sanity/sanity.query";
import { ProfileType, ProjectType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

export default async function ProjectSection() {
  const projects: ProjectType[] = await getProject();
  const profiles: ProfileType[] = await getProfile();

  return (
    <main>
      <section>
        <h1 className="sm:text-5lg min-w-full text-2xl font-semibold leading-tight tracking-tight lg:min-w-[700px] lg:leading-[3.7rem]">
          Project
        </h1>
        {profiles.map((profile) => (
          <p
            key={profile._id}
            className="mb-6 text-base leading-relaxed text-zinc-400"
          >
            {profile.projectdesc}
          </p>
        ))}
      </section>
      <section className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.slice(0, 3).map((project) => (
          <Link
            key={project._id}
            href={`/projects/${project.slug}`}
            className="flex items-center gap-x-4 rounded-lg border border-transparent bg-zinc-900 p-4 ease-in-out hover:border-zinc-700"
          >
            <Image
              src={project.logo}
              alt={project.name}
              width={60}
              height={60}
            />
            <div>
              <h2 className="mb-1 font-semibold">{project.name}</h2>
              <div className="text-sm text-zinc-400">{project.tagline}</div>
            </div>
          </Link>
        ))}
      </section>
      <section className="mb-12 flex items-center gap-x-1">
        <Link href={"/projects"}>View All Projects</Link>
        <MdArrowRightAlt />
      </section>
    </main>
  );
}
