import { sanityFetch } from "@/sanity/lib/fetch";
import { blogsQuery, profilesQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/sanity.image";
import { BlogsQueryResult, ProfileType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

export default async function ProjectSection() {

  const blogs = await sanityFetch<BlogsQueryResult>({ query: blogsQuery });

  const profile = await sanityFetch<ProfileType>({
    query: profilesQuery,
  });

  return (
    <main>
      <section>
        <h1 className="sm:text-5lg min-w-full text-2xl font-semibold leading-tight tracking-tight lg:min-w-[700px] lg:leading-[3.7rem] ]">
          My Project
        </h1>
          <p
            key={profile._id}
            className="mb-6 text-base leading-relaxed text-zinc-400"
          >
            {profile.projectdesc}
          </p>
      </section>
      <section className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {blogs.slice(0, 3).map((blog) => (
          <Link
            key={blog._id}
            href={`/projects/${blog.slug}`}
            className="flex items-center gap-x-4 rounded-lg border border-transparent bg-[#10132E] p-4 ease-in-out hover:border-zinc-700"
          >
            <Image
              src={urlFor(blog.logo).url() as string}
              alt={blog.title}
              width={60}
              height={60}
            />
            <div>
              <h2 className="mb-1 font-semibold">{blog.title}</h2>
              <div className="text-sm text-zinc-400">{blog.tagline}</div>
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
