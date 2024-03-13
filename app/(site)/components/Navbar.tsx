"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const menus = [
    {
      link: "/about",
      label: "About",
      icon: "",
    },
    {
      link: "/projects",
      label: "Projects",
      icon: "",
    },
  ];

  const pathname = usePathname();

  return (
    <main className="sticky top-0 z-50 mx-auto max-w-7xl py-2">
      <nav className="flex items-center justify-between rounded-full border bg-background/75 px-8 py-5 backdrop-blur supports-[backdrop-filter]:bg-background/75">
        <Link href={"/"}>
          <h1 className="text-base font-bold md:text-xl">Ikram Tauffiqul H</h1>
        </Link>
        <div className="flex items-center gap-5 text-sm md:text-base">
          {menus.map((menu, index) => (
            <Link
              key={index}
              href={menu.link}
              className={`link text-zinc-400 hover:text-zinc-300 ${pathname.includes(menu.link) ? "text-zinc-50 underline" : ""}`}
            >
              {menu.label}
            </Link>
          ))}
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
