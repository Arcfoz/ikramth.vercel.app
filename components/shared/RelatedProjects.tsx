import Image from "next/image";
import Link from "next/link";
import { BlogsQueryResult } from "@/types";
import { sanityFetch } from "@/sanity/lib/fetch";
import { blogsQuery } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/utils";
import { Tag } from "./tag";
import { MdOutlineDirectionsRun } from "react-icons/md";
import AnimatedSection from "@/components/animations/AnimatedSection";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

interface RelatedProjectsProps {
  currentSlug?: string;
  limit?: number;
}

export default async function RelatedProjects({ 
  currentSlug, 
  limit = 3 
}: RelatedProjectsProps) {
  const allProjects = await sanityFetch<BlogsQueryResult>({ query: blogsQuery });
  
  // Filter out current project and limit results
  const relatedProjects = allProjects
    .filter(project => project.slug !== currentSlug)
    .slice(0, limit);

  if (relatedProjects.length === 0) {
    return null;
  }

  return (
    <AnimatedSection className="mt-16">
      <section>
        <AnimatedSection delay={0.2}>
          <h2 className="text-2xl font-bold mb-8 text-zinc-200">Related Projects</h2>
        </AnimatedSection>
        
        <StaggerContainer 
          stagger={0.2} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {relatedProjects.map((project, index) => (
            <StaggerItem key={project._id}>
              <Link 
                href={`/projects/${project.slug}`} 
                className="group block h-full"
              >
                <div className="bg-[#10132E]/50 border border-zinc-800 rounded-xl p-4 transition-all duration-300 hover:border-zinc-700 hover:bg-[#10132E]/70 hover:scale-105 hover:shadow-xl hover:shadow-zinc-900/20 h-full flex flex-col">
                  <div className="aspect-video mb-4 overflow-hidden rounded-lg relative">
                    <Image
                      src={urlForImage(project.coverImage)?.url() as string}
                      alt={project.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:brightness-75"
                    />
                    {/* Overlay gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Floating tag animation */}
                    {project.onProgress && (
                      <div className="absolute top-3 right-3 transform transition-all duration-300 group-hover:scale-110">
                        <Tag
                          variant="success"
                          startIcon={<MdOutlineDirectionsRun className="size-3" />}
                        >
                          Ongoing
                        </Tag>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2 flex-grow flex flex-col">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-x-2 text-xs text-zinc-400 transition-colors group-hover:text-zinc-300">
                        <span>{project.tagline}</span>
                        {project.year && (
                          <>
                            <span className="size-1 rounded-full bg-zinc-700 transition-colors group-hover:bg-zinc-600" />
                            <span>{project.year}</span>
                          </>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-zinc-200 group-hover:text-white transition-colors line-clamp-2 text-base">
                      {project.title}
                    </h3>
                    
                    {project.shortdesc && (
                      <p className="text-sm text-zinc-400 line-clamp-3 flex-grow transition-colors group-hover:text-zinc-300">
                        {project.shortdesc}
                      </p>
                    )}

                    {/* Read more indicator */}
                    <div className="flex items-center gap-1 text-xs text-zinc-500 mt-auto pt-2 transition-all duration-300 group-hover:text-zinc-400">
                      <span>Read more</span>
                      <svg 
                        className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" 
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
        
        <AnimatedSection delay={0.8} className="mt-8 text-center">
          <Link 
            href="/projects"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-[#10132E] border border-zinc-700 rounded-lg text-sm text-zinc-300 hover:text-white hover:border-zinc-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            View All Projects
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </AnimatedSection>
      </section>
    </AnimatedSection>
  );
}