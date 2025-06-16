export interface GitHubItem {
  name: string;
  path: string;
  type: "file" | "dir";
  children?: GitHubItem[];
}

export async function fetchGitHubTree(
  path: "",
  owner: string,
  repo: string
): Promise<GitHubItem[]> {
  const res = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 60 },
    }
  );

  const items = await res.json();
  if (!Array.isArray(items)) return [];

  const result: GitHubItem[] = await Promise.all(
    items.map(async (item) => {
      if (item.type === "dir") {
        const children = await fetchGitHubTree(item.path, owner, repo);
        return { ...item, children };
      }
      return item;
    })
  );

  return result;
}
