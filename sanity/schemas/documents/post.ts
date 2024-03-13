import { format, parseISO } from "date-fns";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "onProgress",
      title: "On Progress",
      type: "boolean",
    },
    defineField({
      name: "title",
      title: "Title",
      type: "string",
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
      description: "A slug is required for the post to show up in the preview",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
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
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
          validation: (rule) => {
            return rule.custom((alt, context) => {
              if ((context.document?.coverImage as any)?.asset?._ref && !alt) {
                return "Required";
              }
              return true;
            });
          },
        },
      ],
      validation: (rule) => rule.required(),
    }),
    {
      name: "year",
      title: "Year",
      type: "string",
      description: "project year",
    },
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
      ],
    }),
  ],
//   preview: {
//     select: {
//       title: "title",
//       author: "author.name",
//       date: "date",
//       media: "coverImage",
//     },
//     prepare({ title, media, author, date }) {
//       const subtitles = [
//         author && `by ${author}`,
//         date && `on ${format(parseISO(date), "LLL d, yyyy")}`,
//       ].filter(Boolean);

//       return { title, media, subtitle: subtitles.join(" ") };
//     },
//   },
});
