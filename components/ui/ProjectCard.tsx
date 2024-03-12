import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProjectType } from "@/types";
import { getProject } from "@/sanity/sanity.query";
import { Tag } from "@/components/shared/tag";
import { MdOutlineDirectionsRun } from "react-icons/md";

export async function ProjectCard() {
  const projects: ProjectType[] = await getProject();

  projects.sort((a, b) => b.year - a.year);

  return (
    <div className="relative mx-auto max-w-7xl p-5">
      {projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project._id}>
          <div className="border-tertiary mb-8 flex flex-col space-y-8 rounded-xl border-[1px] bg-secondary/50 p-4 hover:border-zinc-600 md:flex-row md:space-x-8 md:space-y-0 ">
            <div className="overflow-hidden rounded-lg md:h-full md:w-96">
              <div className="relative h-full w-full transition duration-200 hover:opacity-60 md:h-full md:w-96">
                <Image
                  src={project.coverImage.image}
                  alt={project.name}
                  className="rounded-xl"
                  width={960}
                  height={460}
                  object-fit="cover"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex flex-col space-y-2">
                <div className="flow-root">
                  <div className="flex flex-1 flex-col justify-between gap-y-2 md:flex-row md:items-center">
                    <p className="inline-flex items-center gap-x-2 text-zinc-400 ">
                      <span className="text-xs leading-none text-zinc-400">
                        {project.tagline}
                      </span>
                      <span className="size-1.5 rounded-full bg-zinc-700" />
                      <span className="text-xs leading-none text-zinc-400">
                        {project.year}
                      </span>
                    </p>
                    <div className="md:float float-right">
                      {project.onProgress && (
                        <Tag
                          variant="success"
                          startIcon={
                            <MdOutlineDirectionsRun className="size-[15px]" />
                          }
                        >
                          On&nbsp;Going
                        </Tag>
                      )}
                    </div>
                  </div>
                </div>
                <h2 className="text-2xl font-bold">{project.name}</h2>
                <p className="text-sm text-zinc-300">{project.shortdesc}</p>
                <div className="flex flex-col space-y-2 md:flex-row md:items-center md:space-x-2 md:space-y-0"></div>
              </div>
              <h1 className="transition delay-75 hover:text-zinc-400">
                Learn more
              </h1>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
