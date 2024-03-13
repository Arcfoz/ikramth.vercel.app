import { BiCertification } from "react-icons/bi";
import { defineType } from "sanity";

export default defineType({
  name: "certificate",
  title: "Certificate",
  type: "document",
  icon: BiCertification,
  fields: [
    {
      name: "name",
      title: "Company Name",
      type: "string",
      description: "What is the name of the company?",
    },
    {
      name: "cerfTitle",
      title: "Job Title",
      type: "string",
      description: "Enter the Certificate title.",
    },
    {
      name: "logo",
      title: "Certificate Logo",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "url",
      title: "Certificate Website",
      type: "url",
    },
    {
      name: "description",
      title: "Certificate Description",
      type: "text",
      rows: 3,
      description: "Write a brief description about this role",
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
    },
  ],
});
