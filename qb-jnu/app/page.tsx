import { notFound } from "next/navigation";

import ResourceCard from "@/components/common/ResourceCard";
import Link from "next/link";

export default async function HomePage() {
  const url = `https://raw.githubusercontent.com/cse-jnu/manage/refs/heads/main/index.json`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return notFound();

  const raw = await res.text();
  const data = JSON.parse(raw);
  if (!Array.isArray(data)) return notFound();

  return (
    <>
      {/* hero section  */}
      <section className="relative flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900 rounded-lg shadow-lg mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 text-center">
          Welcome to CSE JNU Resource Hub
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 text-center max-w-2xl">
          Discover, share, and access curated resources for Computer Science at
          JNU. Find notes, question banks, guides, and more—all in one place,
          contributed by the community for the community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition"
          >
            Explore Resources
          </a>
          <Link
            href="/how-to-contribute"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white border border-blue-600 text-blue-600 font-semibold rounded-md shadow hover:bg-blue-50 dark:bg-slate-900 dark:border-blue-400 dark:text-blue-300 dark:hover:bg-slate-800 transition"
          >
            Contribute
          </Link>
        </div>
        <div className="absolute top-4 right-4 opacity-10 text-8xl pointer-events-none select-none">
          📚
        </div>
      </section>
      {/* card section */}
      <section className="grid gap-6 p-8 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item, idx) => (
          <ResourceCard key={idx} item={item} idx={idx} />
        ))}
      </section>
    </>
  );
}
