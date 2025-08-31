import { WorkType } from "@/types";
import Image from "next/image";
import React from "react";
import moment from "moment";
import { sanityFetch } from "@/sanity/lib/fetch";
import { worksQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/sanity.image";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

export default async function WorkSection() {
  const works = await sanityFetch<WorkType>({
    query: worksQuery,
  });

  // Sort works by startDate in descending order
  works.sort((a, b) => moment(b.startDate).diff(moment(a.startDate)));

  return (
    <main>
      <section>
        <h1 className="md:text-5lg mb-3 min-w-full text-2xl font-semibold leading-tight tracking-tight md:mb-0 md:min-w-[700px] md:leading-[3.7rem]">
          Work Experience
        </h1>
      </section>
      <StaggerContainer stagger={0.2} className="flex flex-col gap-y-4">
        {works.map((work, index) => {
          const startDate = moment(work.startDate);
          const endDate = moment(work.endDate);
          const duration = endDate.diff(startDate, "months");

          return (
            <StaggerItem key={work._id}>
              <div className="group relative flex max-w-2xl items-start gap-x-4 before:absolute before:bottom-0 before:top-[4.5rem] before:left-[30px] before:w-px before:bg-gradient-to-b before:from-zinc-700 before:to-transparent lg:gap-x-6">
                {/* Timeline dot */}
                <div className="absolute left-[26px] top-[30px] w-2 h-2 bg-zinc-600 rounded-full border-2 border-zinc-800 transition-all duration-300 group-hover:bg-zinc-400 group-hover:scale-150 z-10"></div>
                
                <a
                  href={work.url}
                  className="relative min-h-[60px] min-w-[60px] overflow-clip rounded-md duration-300 hover:scale-110 hover:rotate-3 z-20 bg-zinc-800 border border-zinc-700 group-hover:border-zinc-600"
                  target="_blank"
                >
                  <Image
                    className="object-cover transition-all duration-300 group-hover:brightness-110"
                    src={urlFor(work.logo).url() as string}
                    alt={`${work.name} logo`}
                    fill
                  />
                </a>
                <div className="flex flex-col items-start pl-4">
                  <h3 className="text-xl font-bold transition-colors group-hover:text-zinc-200">{work.name}</h3>
                  <p className="transition-colors group-hover:text-zinc-300">{work.jobTitle}</p>
                  <small className="mt-2 text-sm tracking-widest text-zinc-500 transition-colors group-hover:text-zinc-400">
                    {moment(work.startDate).format("MMM, DD YYYY")} -{" "}
                    {work.endDate
                      ? moment(work.endDate).format("MMM, DD YYYY")
                      : "Present"}
                    &nbsp; (
                    {work.endDate
                      ? moment(work.endDate).diff(
                          moment(work.startDate),
                          "months",
                        )
                      : moment().diff(moment(work.startDate), "months")}{" "}
                    Months)
                  </small>
                  <p className="my-4 text-base text-zinc-400 transition-colors group-hover:text-zinc-300">
                    {work.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </main>
  );
}
