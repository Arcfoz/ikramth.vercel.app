/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */

import { PortableText, type PortableTextComponents, type PortableTextBlock } from "next-sanity";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import PortableImage from "./PortableImage";
import HashScroll from "@/components/shared/HashScroll";
import { slugify } from "@/lib/utils/slugify";

export default function CustomPortableText({ className, value }: { className?: string; value: PortableTextBlock[] }) {
  const components: PortableTextComponents = {
    types: {
      image: PortableImage,
    },
    block: {
      normal: ({ children }) => <p className="mb-5 mt-5">{children}</p>,
      h2: ({ children }) => (
        <h2
          id={slugify(children)}
          className="font-incognito my-8 block text-3xl font-bold tracking-tight text-zinc-700 dark:text-zinc-100 lg:text-4xl"
        >
          <HashScroll text={children} />
        </h2>
      ),
      h3: ({ children }) => (
        <h3
          id={slugify(children)}
          className="font-incognito my-6 block text-2xl font-semibold tracking-tight text-zinc-700 dark:text-zinc-100 lg:text-3xl lg:font-bold"
        >
          <HashScroll text={children} />
        </h3>
      ),
      h4: ({ children }) => (
        <h4
          id={slugify(children)}
          className="font-incognito mb-2 mt-4 inline-block text-xl font-semibold tracking-tight text-zinc-700 dark:text-zinc-100"
        >
          <HashScroll text={children} />
        </h4>
      ),
    },
    marks: {
      em: ({ children }) => <em className="font-incognito dark:text-primary-color text-tertiary-color font-semibold">{children}</em>,
      strong: ({ children }) => <strong className="font-bold text-zinc-700 dark:text-zinc-300">{children}</strong>,
      link: ({ children, value }) => {
        if (value?.href === "/projects") {
          return (
            <Link className="text-zinc-50 hover:underline" href={value?.href} rel="noreferrer noopener">
              {children} <BiLinkExternal className="inline" aria-hidden="true" />
            </Link>
          );
        } else {
          return (
            <Link className="text-zinc-50 hover:underline" href={value?.href} rel="noreferrer noopener" target="_blank">
              {children} <BiLinkExternal className="inline" aria-hidden="true" />
            </Link>
          );
        }
      },
      code: ({ children }) => <code className="font-incognito dark:bg-primary-bg bg-secondary-bg rounded-sm px-1 py-[0.15rem] font-medium text-pink-500 dark:text-zinc-200">{children}</code>,
    },
    list: {
      bullet: ({ children }) => <ul className="ml-5 mt-2 list-[square]">{children}</ul>,
      number: ({ children }) => <ol className="ml-5 mt-2 list-decimal">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => <li className="mb-2">{children}</li>,
      number: ({ children }) => <li className="mb-2">{children}</li>,
    },
  };

  return (
    <div className={["prose", className].filter(Boolean).join(" ")}>
      <PortableText components={components} value={value} />
    </div>
  );
}
