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

export type WorkType = Array<{
  _id: string;
  name: string;
  jobTitle: string;
  logo: string;
  url: string;
  description: string;
  startDate: Date;
  endDate: Date;
}>;

export type CertificateType = Array<{
  _id: string;
  name: string;
  cerfTitle: string;
  logo: string;
  url: string;
  description: string;
  startDate: Date;
  endDate: Date;
}>;

export type SettingsQueryResult = {
  _id: string;
  _type: "settings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  description: string;
};

export declare const internalGroqTypeReferenceTo: unique symbol;

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type BlogsQueryResult = Array<{
  content: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }> | null;
  _id: string;
  onProgress: boolean;
  status: "draft" | "published";
  title: string | "Untitled";
  slug: string | null;
  tagline: string | null;
  shortdesc: string | null;
  projectUrl: string | null;
  logo: string | null;
  year: number | null;
  coverImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
}>;


export type PostQueryResult = {
  content: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }> | null;
  _id: string;
  onProgress: boolean;
  status: "draft" | "published";
  title: string | "Untitled";
  slug: string | null;
  tagline: string | null;
  shortdesc: string | null;
  projectUrl: string | null;
  logo: string | null;
  year: number | null;
  coverImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
} | null;


export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type PostSlugsResult = Array<{
  slug: Slug | null;
}>;
