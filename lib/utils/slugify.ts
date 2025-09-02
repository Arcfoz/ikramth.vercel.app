/**
 * Converts text into a URL-friendly slug for use as anchor IDs
 * @param text - The text to convert to a slug
 * @returns A URL-safe slug string
 */
export function slugify(text: any): string {
  if (!text) return "";
  
  return text
    .toString()
    .toLowerCase()
    .replaceAll(/[^-\w]+/g, "-")
    .replaceAll(/--+/g, "-")
    .replace(/^-|-$/g, "");
}