import React from "react";
import { SiSanity } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { FaHeart } from "react-icons/fa6";

export default function Footer() {
  return (
    <main className="mx-auto max-w-7xl p-5 md:p-5">
      <footer className="flex flex-col items-center justify-between py-5 text-xs text-zinc-500 md:flex-row">
        <div className="mb-3 flex flex-wrap items-center gap-x-2 md:mb-0">
          Made with <FaHeart className="hover:scale-110 hover:text-zinc-500" />{" "}
          using
          <ul className="flex items-center gap-x-2">
            <li>
              <a
                href="https://sanity.io"
                rel="noreferrer noopener"
                target="_blank"
                className="flex items-center gap-x-1 hover:underline"
              >
                <SiSanity /> Sanity
              </a>
            </li>
            <li>
              <a
                href="https://nextjs.org"
                rel="noreferrer noopener"
                target="_blank"
                className="flex items-center gap-x-1 hover:underline"
              >
                <IoLogoVercel /> Vercel
              </a>
            </li>
            <li>
              <a
                href="https://vercel.com"
                rel="noreferrer noopener"
                target="_blank"
                className="flex items-center gap-x-1 hover:underline"
              >
                <SiNextdotjs /> Next.js
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-1">
          Copyright © 2024
        </div>
      </footer>
    </main>
  );
}
