import { CertificateType } from "@/types";
import Image from "next/image";
import React from "react";
import moment from "moment";
import { sanityFetch } from "@/sanity/lib/fetch";
import { cerfsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/sanity.image";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

export default async function CerfSection() {
  const cerfs = await sanityFetch<CertificateType>({
    query: cerfsQuery,
  });

  return (
    <main>
      <section>
        <h1 className="md:text-5lg mb-3 min-w-full text-2xl font-semibold leading-tight tracking-tight md:mb-0 md:min-w-[700px] md:leading-[3.7rem]">
          Certificate
        </h1>
      </section>
      <StaggerContainer stagger={0.25} className="flex flex-col gap-y-12">
        {cerfs.map((cerf, index) => (
          <StaggerItem key={cerf._id}>
            <div className="group relative flex max-w-2xl items-start gap-x-4 before:absolute before:bottom-0 before:top-[4.5rem] before:left-[30px] before:w-px before:bg-gradient-to-b before:from-yellow-600/50 before:to-transparent lg:gap-x-6">
              {/* Certificate badge */}
              <div className="absolute left-[22px] top-[30px] w-4 h-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full border-2 border-zinc-800 transition-all duration-300 group-hover:scale-125 group-hover:rotate-45 z-10 shadow-lg">
                <div className="absolute inset-1 bg-yellow-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <a
                href={cerf.url}
                className="relative min-h-[60px] min-w-[60px] overflow-clip rounded-md duration-300 hover:scale-110 hover:-rotate-2 z-20 bg-zinc-800 border border-zinc-700 group-hover:border-yellow-500/50 shadow-lg group-hover:shadow-yellow-500/20"
                target="_blank"
              >
                <Image
                  className="object-cover transition-all duration-300 group-hover:brightness-110"
                  src={urlFor(cerf.logo).url() as string}
                  alt={`${cerf.name}logo`}
                  fill
                />
                {/* Certificate overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
              </a>
              <div className="flex flex-col items-start pl-4">
                <h3 className="text-xl font-bold transition-colors group-hover:text-yellow-200">{cerf.name}</h3>
                <p className="transition-colors group-hover:text-zinc-300">{cerf.cerfTitle}</p>
                <small className="mt-2 text-sm tracking-widest text-zinc-500 transition-colors group-hover:text-zinc-400">
                  {moment(cerf.startDate).format("MMM, DD YYYY")} -{" "}
                  {moment(cerf.endDate).format("MMM, DD YYYY")}
                </small>
                <p className="my-4 text-base text-zinc-400 transition-colors group-hover:text-zinc-300">{cerf.description}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </main>
  );
}
