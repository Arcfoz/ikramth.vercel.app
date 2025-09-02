import { defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";

export default defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "name",
      title: "Skill Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      description: "Iconify icon name (e.g., 'devicon:javascript')",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "skillCategory" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Order within the category (lower numbers first)",
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: "proficiencyLevel",
      title: "Proficiency Level",
      type: "string",
      options: {
        list: [
          { title: "Beginner", value: "beginner" },
          { title: "Intermediate", value: "intermediate" },
          { title: "Advanced", value: "advanced" },
          { title: "Expert", value: "expert" },
        ],
      },
      description: "Optional proficiency level indicator",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category.name",
      icon: "icon",
      order: "order",
    },
    prepare({ title, subtitle, icon, order }) {
      return {
        title,
        subtitle: subtitle ? `${subtitle} - Order: ${order}` : `Order: ${order}`,
      };
    },
  },
  orderings: [
    {
      title: "Category & Order",
      name: "categoryOrder",
      by: [
        { field: "category.name", direction: "asc" },
        { field: "order", direction: "asc" }
      ],
    },
    {
      title: "Name A-Z",
      name: "nameAsc",
      by: [{ field: "name", direction: "asc" }],
    },
  ],
});