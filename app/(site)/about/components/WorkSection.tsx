import { getWork } from "@/sanity/sanity.query";
import { WorkType } from "@/types";
import Image from "next/image";
import React from "react";
import moment from "moment";

export default async function WorkSection() {
  const works: WorkType[] = await getWork();

  return (
    <main>
      <section>
        <h1 className="md:text-5lg mb-3 min-w-full text-2xl font-semibold leading-tight tracking-tight md:mb-0 md:min-w-[700px] md:leading-[3.7rem]">
          Work Experience
        </h1>
      </section>
      <div className="flex flex-col gap-y-4">
        {works.map((work) => {
          const startDate = moment(work.startDate);
          const endDate = moment(work.endDate);
          const duration = endDate.diff(startDate, "months");

          return (
            <div
              key={work._id}
              className="relative flex max-w-2xl items-start gap-x-4 before:absolute before:bottom-0 before:top-[4.5rem] lg:gap-x-6 "
            >
              <a
                href={work.url}
                className="relative min-h-[60px] min-w-[60px] overflow-clip rounded-md duration-300 hover:scale-110"
                target="_blank"
              >
                <Image
                  className="object-cover"
                  src={work.logo}
                  alt={`${work.name}logo`}
                  fill
                />
              </a>
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-bold">{work.name}</h3>
                <p>{work.jobTitle}</p>
                <small className="mt-2 text-sm tracking-widest text-zinc-500">
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
                <p className="my-4 text-base text-zinc-400">
                  {work.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
