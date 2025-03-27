import { groq } from "next-sanity";

export const settingsQuery = groq`*[_type == "settings"][0]`;

export const profilesQuery = groq`*[_type == "profile"][0]`;

const postFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  onProgress,
  tagline,
  shortdesc,
  projectUrl,
  documentationUrl,
  moreInformationUrl,
  logo,
  year,
  coverImage,

`;

const cerfFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  name,
  cerfTitle,
  logo,
  url,
  description,
  startDate,
  endDate,
`;

const workFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  name,
  jobTitle,
  logo,
  url,
  description,
  startDate,
  endDate,
`;

export const postQuery = groq`*[_type == "post" && slug.current == $slug] [0] {
  content,
  ${postFields}
}`;

export const blogsQuery = groq`*[_type == "post"&& defined(slug.current)] | order(year desc) {
  content,
  ${postFields}
}`;

export const cerfsQuery = groq`*[_type == "certificate"] {
  ${cerfFields}
}`;


export const worksQuery = groq`*[_type == "work"] {
  ${workFields}
}`;
