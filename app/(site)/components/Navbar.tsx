"use client";
import React from "react";
import { FloatingNav } from "../../../components/ui/floating-navbar";
import { FaLocationDot } from "react-icons/fa6";
export function NavBar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/projects",
    },
  ];
  return (
    <div className="relative mb-32">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

export default NavBar;
