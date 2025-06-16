import matter from "gray-matter";
import { notFound } from "next/navigation";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import "katex/dist/katex.min.css";
import PageHeader from "@/components/common/PageHeader";
import extractPath from "@/lib/extractPath";

export default async function Page(props: { params: { slug: string[] } }) {
  const { params } = await Promise.resolve(props);
  const path = params.slug.join("/") + ".md";
  const url = `https://raw.githubusercontent.com/cse-jnu/qb/main/${path}`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return notFound();

  const raw = await res.text();
  const { content, data } = matter(raw);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw) // allow raw HTML like <img />
    .use(rehypeKatex)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content);

  const headerDetails = extractPath(path);

  return (
    <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto p-6 ">
      <PageHeader data={headerDetails} />
      <div dangerouslySetInnerHTML={{ __html: processedContent.toString() }} />
    </div>
  );
}
