import { CertificateType } from "@/types";
import Image from "next/image";
import React from "react";
import moment from "moment";
import { sanityFetch } from "@/sanity/lib/fetch";
import { cerfsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/sanity.image";

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
      <div className="flex flex-col gap-y-12">
        {cerfs.map((cerf) => (
          <div
            key={cerf._id}
            className="relative flex max-w-2xl items-start gap-x-4 before:absolute before:bottom-0 before:top-[4.5rem] lg:gap-x-6 "
          >
            <a
              href={cerf.url}
              className="relative min-h-[60px] min-w-[60px] overflow-clip rounded-md duration-300 hover:scale-110"
              target="_blank"
            >
              <Image
                className="object-cover"
                src={urlFor(cerf.logo).url() as string}
                alt={`${cerf.name}logo`}
                fill
              />
            </a>
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-bold">{cerf.name}</h3>
              <p>{cerf.cerfTitle}</p>
              <small className="mt-2 text-sm tracking-widest text-zinc-500">
                {moment(cerf.startDate).format("MMM, DD YYYY")} -{" "}
                {moment(cerf.endDate).format("MMM, DD YYYY")}
              </small>
              <p className="my-4 text-base text-zinc-400">{cerf.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
