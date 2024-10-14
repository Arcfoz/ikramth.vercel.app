import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlogsQueryResult } from "@/types";
import { Tag } from "@/components/shared/tag";
import { MdOutlineDirectionsRun } from "react-icons/md";
import { sanityFetch } from "@/sanity/lib/fetch";
import { blogsQuery } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/utils";

export async function ProjectCard() {
  const blogs = await sanityFetch<BlogsQueryResult>({ query: blogsQuery });

  return (
    <div className="relative mx-auto max-w-7xl p-5">
      {blogs.map((blog) => (
        <Link href={`/projects/${blog.slug}`} key={blog._id}>
          <div className="mb-8 flex flex-col space-y-8 rounded-xl border-[1px] border-zinc-800 bg-[#10132E]/50 p-4 hover:border-zinc-700 md:flex-row md:space-x-8 md:space-y-0 ">
            <div className="overflow-hidden rounded-lg md:h-full md:w-96">
              <div className="relative h-full w-full transition duration-200 hover:opacity-60 md:h-full md:w-96">
                <Image
                  src={urlForImage(blog.coverImage)?.url() as string}
                  alt={blog.title}
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
                        {blog.tagline}
                      </span>
                      <span className="size-1.5 rounded-full bg-zinc-700" />
                      <span className="text-xs leading-none text-zinc-400">
                        {blog.year}
                      </span>
                    </p>
                    <div className="md:float float-right">
                      {blog.onProgress && (
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
                <h2 className="text-2xl font-bold">{blog.title}</h2>
                <p className="text-sm text-zinc-300">{blog.shortdesc}</p>
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
