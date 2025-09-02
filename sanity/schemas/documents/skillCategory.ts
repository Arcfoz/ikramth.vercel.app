import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";

export default defineType({
  name: "skillCategory",
  title: "Skill Category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "name",
      title: "Category Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Optional description for this skill category",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Order in which this category should appear (lower numbers first)",
      validation: (rule) => rule.required().min(0),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "description",
      order: "order",
    },
    prepare({ title, subtitle, order }) {
      return {
        title,
        subtitle: subtitle || `Order: ${order}`,
      };
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Name A-Z",
      name: "nameAsc", 
      by: [{ field: "name", direction: "asc" }],
    },
  ],
});