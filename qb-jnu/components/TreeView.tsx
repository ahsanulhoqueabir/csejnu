"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { TreeItem } from "@/components/TreeItem";
import { GitHubItem } from "@/lib/githubTree";

export default function TreeView({
  tree,
  directory,
}: {
  tree: GitHubItem[];
  directory: string;
}) {
  const [search, setSearch] = useState("");

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">📂 Browse Questions</h1>
      <Input
        placeholder="Search files or folders..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
      />
      <div className="border rounded p-4 bg-background">
        {tree.map((item) => (
          <TreeItem key={item.path} item={item} directory={directory} />
        ))}
      </div>
    </main>
  );
}
