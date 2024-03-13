import { defineField } from "sanity";
import { BiPackage } from "react-icons/bi";

const profile = {
  name: "project",
  title: "Project",
  type: "document",
  icon: BiPackage,
  fields: [
    {
      name: "onProgress",
      title: "On Progress",
      type: "boolean",
    },
    defineField({
      name: "name",
      title: "Project Name",
      type: "string",
      description: "Enter the name of the project",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "In one short sentence, tagline project",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "path slug name",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    {
      name: "logo",
      title: "Project Logo",
      type: "image",
    },
    {
      name: "shortdesc",
      title: "Short Desc",
      type: "string",
    },
    {
      name: "projectUrl",
      title: "Project URL",
      type: "url",
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      description: "cover image project",
      options: { hotspot: true },
    },
    {
      name: "year",
      title: "Year",
      type: "string",
      description: "project year",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default profile;
