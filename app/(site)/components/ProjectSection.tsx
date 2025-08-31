import { sanityFetch } from "@/sanity/lib/fetch";
import { blogsQuery, profilesQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/sanity.image";
import { BlogsQueryResult, ProfileType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import AnimatedSection from "@/components/animations/AnimatedSection";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

export default async function ProjectSection() {

  const blogs = await sanityFetch<BlogsQueryResult>({ query: blogsQuery });

  const profile = await sanityFetch<ProfileType>({
    query: profilesQuery,
  });

  return (
    <main>
      <AnimatedSection>
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
      </AnimatedSection>

      <StaggerContainer 
        stagger={0.2} 
        className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {blogs.slice(0, 3).map((blog, index) => (
          <StaggerItem key={blog._id}>
            <Link
              href={`/projects/${blog.slug}`}
              className="group flex items-center gap-x-4 rounded-lg border border-transparent bg-[#10132E] p-4 transition-all duration-300 ease-in-out hover:border-zinc-700 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={urlFor(blog.logo).url() as string}
                  alt={blog.title}
                  width={60}
                  height={60}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div>
                <h2 className="mb-1 font-semibold transition-colors group-hover:text-zinc-200">{blog.title}</h2>
                <div className="text-sm text-zinc-400 transition-colors group-hover:text-zinc-300">{blog.tagline}</div>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <AnimatedSection delay={0.6}>
        <section className="mb-12 flex items-center gap-x-1">
          <Link 
            href={"/projects"}
            className="group flex items-center gap-x-1 transition-colors hover:text-zinc-200"
          >
            View All Projects
            <MdArrowRightAlt className="transition-transform group-hover:translate-x-1" />
          </Link>
        </section>
      </AnimatedSection>
    </main>
  );
}
