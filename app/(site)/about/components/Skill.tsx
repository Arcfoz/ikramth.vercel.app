"use client";

import React from "react";
import { skillLinks } from "@/app/data/skill";
import { Icon } from "@iconify/react";

interface Skill {
  id: string;
  name: string;
  icon: string;
  category: string;
}

interface GroupedSkills {
  [category: string]: Skill[];
}

export default function Skill() {
  const groupedSkills: GroupedSkills = skillLinks.reduce(
    (acc: GroupedSkills, skill) => {
      acc[skill.category] = [...(acc[skill.category] || []), skill];
      return acc;
    },
    {},
  );

  return (
    <section>
      {Object.entries(groupedSkills).map(([category, skills]) => (
        <div key={category} className="my-10 gap-y-4">
          <h1 className="sm:text-5lg min-w-full text-2xl font-semibold leading-tight tracking-tight lg:min-w-[700px] lg:leading-[3.7rem]">
            {category}
          </h1>
          <ul className="my-3 flex flex-wrap items-center gap-x-2 gap-y-4">
            {skills.map((value) => (
              <li key={value.id.toString()}>
                {" "}
                <a className="group relative inline-block select-none rounded-full bg-zinc-800 p-px font-semibold leading-6 text-white no-underline shadow-2xl shadow-zinc-900 duration-300 hover:scale-105">
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(255,255,255,1)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </span>
                  <div className="class relative z-10 flex items-center space-x-2 rounded-full bg-zinc-950 px-4 py-0.5 text-zinc-400 ring-1 ring-white ring-opacity-10 duration-300 hover:text-zinc-100">
                    <Icon icon={value.icon} />
                    &nbsp;
                    {value.name}
                  </div>
                  <span className="w-[calc(100% - 2.25rem)] absolute -bottom-0 left-[1.125rem] h-px bg-gradient-to-r from-emerald-400/0 via-zinc-500/90 to-zinc-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
