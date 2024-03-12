import { PortableTextBlock } from "sanity";

export type ProfileType = {
  _id: string;
  fullName: string;
  headline: string;
  profileImage: {
    alt: string;
    image: string;
  };
  shortBio: string;
  email: string;
  fullBio: PortableTextBlock[];
  location: string;
  resumeURL: string;
  socialLinks: string[];
  skills: string[];
  projectdesc: string;
};

export type ProjectType = {
  _id: string;
  onProgress: string;
  name: string;
  slug: string;
  tagline: string;
  shortdesc: string;
  projectUrl: string;
  logo: string;
  year: number;
  coverImage: { alt: String | null; image: string };
  description: PortableTextBlock[];
};

export type WorkType = {
  _id: string;
  name: string;
  jobTitle: string;
  logo: string;
  url: string;
  description: string;
  startDate: Date;
  endDate: Date;
};

export type CertificateType = {
  _id: string;
  name: string;
  cerfTitle: string;
  logo: string;
  url: string;
  description: string;
  startDate: Date;
  endDate: Date;
};
