export interface GitHubItem {
  name: string;
  path: string;
  type: "file" | "dir";
  children?: GitHubItem[];
}

const GITHUB_OWNER = "cse-jnu";
const GITHUB_REPO = "qb";
const BRANCH = "main";

export async function fetchGitHubTree(path = ""): Promise<GitHubItem[]> {
  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`,
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
        const children = await fetchGitHubTree(item.path);
        return { ...item, children };
      }
      return item;
    })
  );

  return result;
}
