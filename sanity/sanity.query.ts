import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      headline,
      profileImage {alt, "image": asset->url},
      shortBio,
      location,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      skills,
      projectdesc
    }`,
  );
}

export async function profileQuery() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      headline,
      profileImage {
        "image": asset->url,
        "lqip": asset->metadata.lqip,
        alt,
      },
      shortBio,
      location,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      usage
    }`,
  );
}

export async function getProject() {
  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      onProgress,
      name,
      tagline,
      shortdesc,
      year,
      coverImage { "image": asset->url },
      "slug": slug.current,
      "logo": logo.asset->url,
    }`,
  );
}

export async function getWork() {
  return client.fetch(
    groq`*[_type == "work"]{
      _id,
      name,
      jobTitle,
      "logo": logo.asset->url,
      url,
      description,
      startDate,
      endDate,
    }`,
  );
}

export async function getCertificate() {
  return client.fetch(
    groq`*[_type == "certificate"]{
      _id,
      name,
      cerfTitle,
      "logo": logo.asset->url,
      url,
      description,
      startDate,
      endDate,
    }`,
  );
}

export async function getSingleProject(slug: string) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      name,
      projectUrl,
      year,
      shortdesc,
      coverImage { "image": asset->url },
      tagline,
      description
    }`,
    { slug },
  );
}

export const singleProjectQuery = groq`*[_type == "project" && slug.current == $slug][0]{
  _id,
  onProgress,
  name,
  projectUrl,
  year,
  shortdesc,
  coverImage {"image": asset->url},
  tagline,
  description
}`;
