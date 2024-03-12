import Image from "next/image";
import { Metadata } from "next";
import { singleProjectQuery } from "@/sanity/sanity.query";
import { PortableText } from "@portabletext/react";
import { sanityFetch } from "@/sanity/sanity.client";
import { CustomPortableText } from "@/components/shared/CustomPortableText";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import { ProjectType } from "@/types";
import { urlFor } from "@/sanity/sanity.image";
import Template from "@/app/(site)/template";
import { Tag } from "@/components/shared/tag";
import { MdOutlineDirectionsRun } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { FaBookOpen, FaInfo } from "react-icons/fa6";

type Props = {
  params: {
    project: string;
  };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.project;
  const project: ProjectType = await sanityFetch({
    query: singleProjectQuery,
    tags: ["project"],
    qParams: { slug },
  });
  return {
    title: `${project.name}`,
    metadataBase: new URL(
      `https://ikramth.vercel.app/projects/${project.slug}`,
    ),
    description: project.tagline,
    openGraph: {
      images: urlFor(project.coverImage?.image).width(1200).height(630).url(),
      url: `https://ikramth.vercel.app/projects/${project.slug}`,
      title: project.name,
      description: project.tagline,
    },
  };
}

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project: ProjectType = await sanityFetch({
    query: singleProjectQuery,
    tags: ["project"],
    qParams: { slug },
  });

  return (
    <Template>
      <main className="mx-auto min-h-screen max-w-6xl px-8 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <div>
            <div className="inline-block">
              <Link href={"/projects"} className="flex items-center">
                <BiArrowBack style={{ marginRight: "10px" }} />
                <h1>Project</h1>
              </Link>
            </div>

            <div className="mb-5">
              <div className="flex items-start justify-between">
                <h1 className="text-3xl font-bold lg:text-5xl lg:leading-tight">
                  {project.name}
                </h1>
              </div>
              <div className="flow-root">
                <div className="flex flex-1 flex-col justify-between gap-y-2 md:flex-row md:items-center">
                  <p className="inline-flex items-center gap-x-2 text-zinc-400">
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
            </div>
          </div>

          <Image
            className="rounded-xl border border-zinc-800"
            width={900}
            height={460}
            src={project.coverImage?.image}
            alt={project.name}
          />

          {project.projectUrl && (
            <Button
              asChild
              className="mt-5 h-12 w-full rounded-full border bg-[#1d1d20] text-primary-foreground text-white transition duration-150 hover:border-zinc-400 hover:bg-[#1d1d20]"
            >
              <Link href={project.projectUrl} target="_blank">
                <FaBookOpen />
                &nbsp; Documentation
              </Link>
            </Button>
          )}

          {project.name === "Nutriku" && (
            <Button
              asChild
              className="mt-5 h-12 w-full rounded-full border bg-[#1d1d20] text-primary-foreground text-white transition duration-150 hover:border-zinc-400 hover:bg-[#1d1d20]"
            >
              <Link
                href="https://www.linkedin.com/feed/update/activity:7092827598300336128/"
                target="_blank"
              >
                <FaInfo />
                &nbsp; More Information
              </Link>
            </Button>
          )}

          <div className="mt-4 flex flex-col leading-7 text-zinc-400">
            {project.shortdesc}
          </div>

          <div className="mb-36 mt-4 flex flex-col leading-7 text-zinc-400">
            <PortableText
              value={project.description}
              components={CustomPortableText}
            />
          </div>
        </div>
      </main>
    </Template>
  );
}
