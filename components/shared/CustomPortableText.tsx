import { PortableTextComponents } from "@portabletext/react";
import { BiLinkExternal, BiSolidQuoteRight } from "react-icons/bi";
import PortableImage from "./PortableImage";
import CodeBlock from "./CodeBlock";
import HashScroll from "./HashScroll";
import Link from "next/link";

export const CustomPortableText: PortableTextComponents = {
  types: {
    image: PortableImage,
    code: CodeBlock,
  },

  block: {
    normal: ({ children }) => <p className="mb-2 mt-2">{children}</p>,
    h2: ({ children }) => (
      <h2
        id={children // TODO: Export slugify code to reusable function
          ?.toString()
          .toLowerCase()
          .replaceAll(/[^-\w]+/g, "-")
          .replaceAll(/--+/g, "-")
          .replace(/^-|-$/g, "")}
        className="font-incognito relative my-8 block text-3xl font-bold tracking-tight text-zinc-700 before:absolute before:-left-4 before:top-1/2 before:hidden before:-translate-y-1/2 before:text-xl before:text-zinc-400 before:opacity-80 before:content-['#'] hover:before:hidden dark:text-zinc-100 dark:before:text-zinc-500 hover:before:sm:inline-block lg:text-4xl lg:before:-left-5 lg:before:text-2xl"
      >
        <HashScroll text={children} />
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        id={children
          ?.toString()
          .toLowerCase()
          .replaceAll(/[^-\w]+/g, "-")
          .replaceAll(/--+/g, "-")
          .replace(/^-|-$/g, "")}
        className="font-incognito relative my-6 block text-2xl font-semibold tracking-tight text-zinc-700 before:absolute before:-left-4 before:top-1/2 before:hidden before:-translate-y-1/2 before:text-xl before:text-zinc-400 before:opacity-80 before:content-['#'] hover:before:hidden dark:text-zinc-100 dark:before:text-zinc-500 hover:before:sm:inline-block lg:text-3xl lg:font-bold lg:before:-left-5 lg:before:text-2xl"
      >
        <HashScroll text={children} />
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        id={children
          ?.toString()
          .toLowerCase()
          .replaceAll(/[^-\w]+/g, "-")
          .replaceAll(/--+/g, "-")
          .replace(/^-|-$/g, "")}
        className="font-incognito relative mb-2 mt-4 inline-block text-xl font-semibold tracking-tight text-zinc-700 before:absolute before:-left-4 before:top-1/2 before:hidden before:-translate-y-1/2 before:text-xl before:text-zinc-400 before:opacity-80 before:content-['#'] hover:before:hidden dark:text-zinc-100 dark:before:text-zinc-500 hover:before:sm:inline-block lg:before:-left-6 lg:before:text-2xl"
      >
        <HashScroll text={children} />
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="relative my-8 overflow-hidden rounded-md border border-zinc-200 p-4 pr-12 text-lg tracking-tight dark:border-zinc-800 lg:py-6 lg:pl-6">
        <BiSolidQuoteRight
          className="absolute -right-5 -top-7 -rotate-12 text-7xl text-zinc-200 dark:text-zinc-800"
          aria-hidden="true"
        />
        {children}
      </blockquote>
    ),
  },
  marks: {
    em: ({ children }) => (
      <em className="font-incognito dark:text-primary-color text-tertiary-color font-semibold">
        {children}
      </em>
    ),
    strong: ({ children }) => (
      <strong className="font-bold text-zinc-700 dark:text-zinc-300">
        {children}
      </strong>
    ),
    link: ({ children, value }) => {
      if (value?.href === "/projects") {
        return (
          <Link
            className="text-zinc-50 hover:underline"
            href={value?.href}
            rel="noreferrer noopener"
          >
            {children} <BiLinkExternal className="inline" aria-hidden="true" />
          </Link>
        );
      } else {
        return (
          <Link
            className="text-zinc-50 hover:underline"
            href={value?.href}
            rel="noreferrer noopener"
            target="_blank"
          >
            {children} <BiLinkExternal className="inline" aria-hidden="true" />
          </Link>
        );
      }
    },
    code: ({ children }) => (
      <code className="font-incognito dark:bg-primary-bg bg-secondary-bg rounded-sm px-1 py-[0.15rem] font-medium text-pink-500 dark:text-zinc-200">
        {children}
      </code>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-5 mt-2 list-[square]">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="ml-5 mt-2 list-decimal">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },
};
