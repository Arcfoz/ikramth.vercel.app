import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import Template from "@/app/(site)/template";
import { Tag } from "@/components/shared/tag";
import { MdOutlineDirectionsRun } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { FaBookOpen, FaGlobe, FaInfo } from "react-icons/fa6";
import { PostQueryResult, PostSlugsResult } from "@/types";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postQuery } from "@/sanity/lib/queries";
import { groq, type PortableTextBlock } from "next-sanity";
import { resolveOpenGraphImage, urlForImage } from "@/sanity/lib/utils";
import PortableText from "./portable-text";

type Props = {
  params: { slug: string };
};

const postSlugs = groq`*[_type == "post"]{slug}`;

export async function generateStaticParams() {
  const params = await sanityFetch<PostSlugsResult>({
    query: postSlugs,
    perspective: "published",
    stega: false,
  });
  return params.map(({ slug }) => ({ slug: slug?.current }));
}

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const slug = params.project;
//   const project: ProjectType = await getSingleProject(slug);
//   return {
//     title: `${project.name}`,
//     metadataBase: new URL(
//       `https://ikramth.vercel.app/projects/${project.slug}`,
//     ),
//     description: project.shortdesc,
//     openGraph: {
//       images: urlFor(project.coverImage?.image).width(1200).height(630).url(),
//       url: `https://ikramth.vercel.app/projects/${project.slug}`,
//       title: project.name,
//       description: project.shortdesc,
//     },
//   };
// }

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const post = await sanityFetch<PostQueryResult>({
    query: postQuery,
    params,
    stega: false,
  });
  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(post?.coverImage);

  return {
    title: post?.title,
    description: post?.shortdesc,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
  } satisfies Metadata;
}

export default async function page({ params }: Props) {
  const post = await sanityFetch<PostQueryResult>({
    query: postQuery,
    params,
  });
  return (
    <Template>
      <div className="relative z-10 bg-[#000319] bg-grid-black/[0.96] dark:bg-grid-white/[0.05]">
        <main className="relative z-10 mx-auto mt-10 min-h-screen max-w-6xl px-8 lg:px-16">
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
                    {post?.title}
                  </h1>
                </div>
                <div className="flow-root">
                  <div className="flex flex-1 flex-col justify-between gap-y-2 md:flex-row md:items-center">
                    <p className="inline-flex items-center gap-x-2 text-zinc-400">
                      <span className="text-xs leading-none text-zinc-400">
                        {post?.tagline}
                      </span>
                      <span className="size-1.5 rounded-full bg-zinc-700" />
                      <span className="text-xs leading-none text-zinc-400">
                        {post?.year}
                      </span>
                    </p>

                    <div className="md:float float-right">
                      {post?.onProgress && (
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
              src={urlForImage(post?.coverImage)?.url() as string}
              alt={post?.title as string}
            />

            {post?.documentationUrl && (
              <Button
                asChild
                className="mt-5 h-12 w-full rounded-full border border-zinc-500 bg-[#000319] text-primary-foreground text-white transition duration-150 hover:border-zinc-400 hover:bg-[#10132E]"
              >
                <Link href={post?.documentationUrl} target="_blank">
                  <FaBookOpen />
                  &nbsp; Documentation
                </Link>
              </Button>
            )}

            {post?.moreInformationUrl && (
              <Button
                asChild
                className="mt-5 h-12 w-full rounded-full border border-zinc-500 bg-[#000319] text-primary-foreground text-white transition duration-150 hover:border-zinc-400 hover:bg-[#10132E]"
              >
                <Link href={post?.moreInformationUrl} target="_blank"
                >
                  <FaInfo />
                  &nbsp; More Information
                </Link>
              </Button>
            )}

            {post?.projectUrl && (
              <Button
                asChild
                className="mt-5 h-12 w-full rounded-full border border-zinc-500 bg-[#000319] text-primary-foreground text-white transition duration-150 hover:border-zinc-400 hover:bg-[#10132E]"
              >
                <Link href={post?.projectUrl} target="_blank"
                >
                  <FaGlobe />
                  &nbsp; Website
                </Link>
              </Button>
            )}

            <div className="mt-4 flex flex-col leading-7 text-zinc-400">
              {post?.shortdesc}
            </div>

            <div className="mb-36 mt-4 flex flex-col leading-7 text-zinc-400">
              {post?.content?.length && (
                <PortableText value={post.content as PortableTextBlock[]} />
              )}
            </div>
          </div>
        </main>
        <div className="absolute -bottom-5 left-0 z-0 mb-5 h-10 w-full bg-gradient-to-t from-[#000319] xl:bottom-0 xl:mb-0 xl:h-32" />
        <div className="absolute left-0 top-0 z-0 mb-5 h-10 w-full bg-gradient-to-b from-[#000319] xl:bottom-0 xl:mb-0 xl:h-32" />
      </div>
    </Template>
  );
}
