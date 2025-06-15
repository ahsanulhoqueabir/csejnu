import matter from "gray-matter";
import { notFound } from "next/navigation";
import { GitHubItem } from "@/lib/githubTree";
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
import { getFileName } from "@/lib/fileName";

export default async function Page({ params }: { params: { slug: string[] } }) {
  const path = params.slug.join("/") + ".md";
  const name = params.slug.at(-1);
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

  return (
    <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        {getFileName(data.title ?? "") ||
          getFileName(name?.toLocaleLowerCase() ?? "")}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: processedContent.toString() }} />
    </div>
  );
}
