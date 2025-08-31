import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlogsQueryResult } from "@/types";
import { Tag } from "@/components/shared/tag";
import { MdOutlineDirectionsRun } from "react-icons/md";
import { sanityFetch } from "@/sanity/lib/fetch";
import { blogsQuery } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/utils";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

export async function ProjectCard() {
  const blogs = await sanityFetch<BlogsQueryResult>({ query: blogsQuery });

  return (
    <div className="relative mx-auto max-w-7xl p-5">
      <StaggerContainer stagger={0.3}>
        {blogs.map((blog, index) => (
          <StaggerItem key={blog._id}>
            <Link href={`/projects/${blog.slug}`}>
              <div className="group mb-8 flex flex-col space-y-8 rounded-xl border-[1px] border-zinc-800 bg-[#10132E]/50 p-4 transition-all duration-300 hover:border-zinc-700 hover:scale-[1.02] hover:shadow-2xl md:flex-row md:space-x-8 md:space-y-0">
                <div className="overflow-hidden rounded-lg md:h-full md:w-96">
                  <div className="relative h-full w-full transition-all duration-300 group-hover:scale-105 md:h-full md:w-96">
                    <Image
                      src={urlForImage(blog.coverImage)?.url() as string}
                      alt={blog.title}
                      className="rounded-xl transition-all duration-300 group-hover:brightness-75"
                      width={960}
                      height={460}
                      object-fit="cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-xl" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex flex-col space-y-2">
                    <div className="flow-root">
                      <div className="flex flex-1 flex-col justify-between gap-y-2 md:flex-row md:items-center">
                        <p className="inline-flex items-center gap-x-2 text-zinc-400">
                          <span className="text-xs leading-none text-zinc-400 transition-colors group-hover:text-zinc-300">
                            {blog.tagline}
                          </span>
                          <span className="size-1.5 rounded-full bg-zinc-700 transition-colors group-hover:bg-zinc-600" />
                          <span className="text-xs leading-none text-zinc-400 transition-colors group-hover:text-zinc-300">
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
                    <h2 className="text-2xl font-bold transition-colors group-hover:text-zinc-100">{blog.title}</h2>
                    <p className="text-sm text-zinc-300 transition-colors group-hover:text-zinc-200">{blog.shortdesc}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <span className="text-sm text-zinc-400 transition-colors group-hover:text-zinc-300">
                      Learn more
                    </span>
                    <svg 
                      className="w-4 h-4 text-zinc-400 transition-all group-hover:text-zinc-300 group-hover:translate-x-1" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
