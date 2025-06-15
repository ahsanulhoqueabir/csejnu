import { fetchGitHubTree, GitHubItem } from "@/lib/githubTree";
import { TreeItem } from "@/components/TreeItem";
import Home from "@/components/Home";

export default async function HomePage() {
  const tree = await fetchGitHubTree();

  return <Home tree={tree} />;
}
