import remark from "remark";
import html from "remark-html";

// export default async function markdownToHtml(markdown) {
//   const processedContent = await remark().use(html).process(markdown);
//   const contentHtml = processedContent.toString();
//   return {
//     processedContent,
//     contentHtml,
//   };
// }

export default async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
