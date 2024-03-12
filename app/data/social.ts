import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
import { HiArrowNarrowRight } from "react-icons/hi";

export const socialLinks = [
  {
    id: 1,
    name: "About me",
    url: "/about",
    icon: HiArrowNarrowRight,
    type: "internal",
  },
  {
    id: 2,
    name: "GitHub",
    url: "https://github.com/arcfoz",
    icon: BiLogoGithub,
    type: "external",
  },
  {
    id: 3,
    name: "Linkedin",
    url: "https://linkedin.com/in/ikramtauffiqulhakim",
    icon: BiLogoLinkedinSquare,
    type: "external",
  },
];
